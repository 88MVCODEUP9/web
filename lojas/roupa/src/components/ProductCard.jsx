import { memo, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSiteConfig } from "../context/SiteConfigContext.jsx";
import "../styles/products.css";
import ProductActions from "./ProductActions.jsx";

/* ============================================================
   PRODUCT CARD
   1–5 imagens
   autoplay a cada 3 segundos
   expansão ao clicar
   seletor de imagens, cores e tamanhos
============================================================ */

function ProductCard({ product, modalOnly = false, initialSelection, onOpen, onClose, paused = false }) {
  const { config } = useSiteConfig();
  const { id, images = [], colors = [], sizes = [] } = product;
  const safeImages = images.length ? images.slice(0, 5) : [`${import.meta.env.BASE_URL}placeholder.svg`];
  const cardRef = useRef(null);
  const dialogRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  useEffect(() => {
    if (modalOnly) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(cardRef.current);
    const update = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, [modalOnly]);

  const [currentImage, setCurrentImage] = useState(initialSelection?.image || 0);
  const expanded = modalOnly;
  const openProduct = () => onOpen?.(product, { color: selectedColor, size: selectedSize, image: currentImage });
  const closeProduct = () => onClose?.();

  const [selectedColor, setSelectedColor] = useState(
    initialSelection?.color || colors[0]?.name || ""
  );

  const [selectedSize, setSelectedSize] = useState(
    initialSelection?.size || sizes[0] || ""
  );

  useEffect(() => {
    setCurrentImage(current => Math.min(current, safeImages.length - 1));
    setSelectedColor(current => colors.some(color => color.name === current) ? current : colors[0]?.name || "");
    setSelectedSize(current => sizes.includes(current) ? current : sizes[0] || "");
  }, [product]);

  /* ==========================================================
     TROCA AUTOMÁTICA — 3 SEGUNDOS
  ========================================================== */

  useEffect(() => {
    if (
      !visible || !pageVisible || paused || expanded ||
      safeImages.length <= 1
    ) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentImage((current) =>
        (current + 1) % safeImages.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [expanded, safeImages.length, visible, pageVisible, paused]);

  /* ==========================================================
     ESC FECHA
  ========================================================== */

  useEffect(() => {
    if (!expanded) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector("button")?.focus();
    const handleKeyboard = (event) => {
      if (event.key === "Escape") closeProduct();
      if (event.key !== "Tab") return;
      const items = [...dialogRef.current.querySelectorAll('button:not(:disabled), input, a[href], [tabindex="0"]')];
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", handleKeyboard);
    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected && previousFocus !== document.body) previousFocus.focus();
      else document.querySelector(".product-card")?.focus();
    };
  }, [expanded, onClose]);

  /* ==========================================================
     NAVEGAÇÃO
  ========================================================== */

  const nextImage = (event) => {
    event?.stopPropagation();

    setCurrentImage((current) =>
      (current + 1) % safeImages.length
    );
  };

  const previousImage = (event) => {
    event?.stopPropagation();

    setCurrentImage((current) =>
      current === 0
        ? safeImages.length - 1
        : current - 1
    );
  };

  /* ==========================================================
     CONTEÚDO INTERNO
  ========================================================== */

  const renderContent = (modal = false) => (
    <>

      {/* ==============================================
          ÁREA DA IMAGEM
      ============================================== */}

      <div
        className={
          modal
            ? "product-image-area expanded-image-area"
            : "product-image-area"
        }
        onClick={
          !modal
            ? (event) => { event.stopPropagation(); openProduct(); }
            : undefined
        }
      >

        <div className="product-halo" />

        {safeImages.length > 0 && (
          <div className="image-stage">

            <img
              key={currentImage}
              src={safeImages[currentImage]}
              alt={config.labels.productImage}
              className="product-image slide-image"
              loading={modal ? "eager" : "lazy"}
              decoding="async"
              onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`; }}
              draggable="false"
            />

          </div>
        )}

        {/* CONTADOR */}

        {safeImages.length > 1 && (
          <div className="image-counter">
            {currentImage + 1}
            <span>/</span>
            {safeImages.length}
          </div>
        )}

        {/* SETAS APENAS QUANDO EXPANDIDO */}

        {modal && safeImages.length > 1 && (
          <>

            <button
              className="image-arrow arrow-left"
              onClick={previousImage}
              type="button"
              aria-label={config.labels.previousImage}
            >
              ‹
            </button>

            <button
              className="image-arrow arrow-right"
              onClick={nextImage}
              type="button"
              aria-label={config.labels.nextImage}
            >
              ›
            </button>

          </>
        )}

      </div>

      {/* ==============================================
          MINIATURAS — APENAS EXPANDIDO
      ============================================== */}

      {modal && safeImages.length > 1 && (

        <div className="thumbnail-list">

          {safeImages.map((image, index) => (

            <button
              type="button"
              key={image + index}
              aria-label={`${config.labels.viewImage} ${index + 1}`}
              aria-pressed={currentImage === index}
              className={
                currentImage === index
                  ? "thumbnail active"
                  : "thumbnail"
              }
              onClick={(event) => {
                event.stopPropagation();
                setCurrentImage(index);
              }}
            >

              <img
                src={image}
                alt={config.labels.productImage}
                loading={modal ? "eager" : "lazy"}
              decoding="async"
              onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`; }}
              draggable="false"
              />

            </button>

          ))}

        </div>

      )}

      {/* ==============================================
          INDICADORES NO CARD FECHADO
      ============================================== */}

      {!modal && safeImages.length > 1 && (

        <div className="image-dots">

          {safeImages.map((_, index) => (

            <button
              type="button"
              key={index}
              aria-label={`${config.labels.viewImage} ${index + 1}`}
              aria-pressed={currentImage === index}
              className={
                currentImage === index
                  ? "image-dot active"
                  : "image-dot"
              }
              onClick={(event) => {
                event.stopPropagation();
                setCurrentImage(index);
              }}
            />

          ))}

        </div>

      )}

      {/* ==============================================
          CONTROLES
      ============================================== */}

      <div
        className="product-controls"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* CORES */}

        {colors.length > 0 && (

          <div className="glass-radio-group">

            {colors.map((color) => (

              <label
                key={color.name}
                className={
                  selectedColor === color.name
                    ? "color-option selected"
                    : "color-option"
                }
              >

                <input
                  type="radio"
                  name={`color-${id}-${modal ? "modal" : "card"}`}
                  checked={
                    selectedColor === color.name
                  }
                  onChange={() =>
                    setSelectedColor(
                      color.name
                    )
                  }
                />

                <span
                  className="color-dot"
                  style={{
                    background: color.value,
                  }}
                />

                <span className="color-name">
                  {color.name}
                </span>

              </label>

            ))}

          </div>

        )}

        {/* TAMANHOS */}

        {sizes.length > 0 && (

          <div className="liquid-group">

            {sizes.map((size) => (

              <label
                key={size}
                className={
                  selectedSize === size
                    ? "size-option selected"
                    : "size-option"
                }
              >

                <input
                  type="radio"
                  name={`size-${id}-${modal ? "modal" : "card"}`}
                  checked={
                    selectedSize === size
                  }
                  onChange={() =>
                    setSelectedSize(size)
                  }
                />

                <span>
                  {size}
                </span>

              </label>

            ))}

          </div>

        )}

      </div>

    </>
  );

  return (
    <>

      {/* ======================================================
          CARD NORMAL
      ====================================================== */}

      {!modalOnly && <article
        className="product-card"
        ref={cardRef}
        tabIndex={0}
        aria-label={config.labels.openProduct}
        onKeyDown={(event) => { if (event.target === event.currentTarget && ["Enter", " "].includes(event.key)) { event.preventDefault(); openProduct(); } }}
        onClick={() => openProduct()}
      >

        <div className="card-light-layer">
          <div className="gold-slit" />

          <div className="gold-lumen">
            <div className="lumen-min" />
            <div className="lumen-mid" />
          </div>
        </div>

        <div className="card-content">

          {renderContent()}

        </div>

      </article>}


      {/* ======================================================
          VISUALIZAÇÃO EXPANDIDA
      ====================================================== */}

      {expanded && createPortal(

        <div
          className="product-modal-overlay"
          onClick={() =>
            closeProduct()
          }
        >

          <div
            className="expanded-card"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={config.labels.productDetails}
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="expanded-gold-light" />

            {/* FECHAR */}

            <button
              className="close-expanded"
              type="button"
              aria-label={config.labels.close}
              onClick={() =>
                closeProduct()
              }
            >
              ×
            </button>

            <div className="modal-heading"><span className="collection-eyebrow">{config.site.name}</span><h2>{config.categories.find(category => category.id === product.category)?.label || product.category}</h2><p>{config.labels.chooseOptions}</p></div>
            {renderContent(true)}
            <ProductActions product={product} color={selectedColor} size={selectedSize} />

          </div>

        </div>, document.body

      )}

    </>
  );
}



export default memo(ProductCard);
