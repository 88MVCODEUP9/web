import { useEffect, useState } from "react";

/* ============================================================
   PRODUCT CARD
   1–5 imagens
   autoplay a cada 3 segundos
   expansão ao clicar
   seletor de imagens, cores e tamanhos
============================================================ */

function ProductCard({
  images = [],
  colors = [],
  sizes = [],
}) {
  const safeImages = images.slice(0, 5);

  const [currentImage, setCurrentImage] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const [selectedColor, setSelectedColor] = useState(
    colors[0]?.name || ""
  );

  const [selectedSize, setSelectedSize] = useState(
    sizes[0] || ""
  );

  /* ==========================================================
     TROCA AUTOMÁTICA — 3 SEGUNDOS
  ========================================================== */

  useEffect(() => {
    if (
      expanded ||
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
  }, [expanded, safeImages.length]);

  /* ==========================================================
     ESC FECHA
  ========================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setExpanded(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleEscape
      );
  }, []);

  /* ==========================================================
     BLOQUEIA SCROLL QUANDO ABERTO
  ========================================================== */

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

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

  const ProductContent = ({ modal = false }) => (
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
            ? () => setExpanded(true)
            : undefined
        }
      >

        <div className="product-halo" />

        {safeImages.length > 0 && (
          <div className="image-stage">

            <img
              key={currentImage}
              src={safeImages[currentImage]}
              alt=""
              className="product-image slide-image"
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
              aria-label="Imagem anterior"
            >
              ‹
            </button>

            <button
              className="image-arrow arrow-right"
              onClick={nextImage}
              type="button"
              aria-label="Próxima imagem"
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
                alt=""
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
              aria-label={`Ver imagem ${index + 1}`}
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
                  name={`color-${safeImages[0]}`}
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
                  name={`size-${safeImages[0]}`}
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

      <article
        className="product-card"
        onClick={() => setExpanded(true)}
      >

        <div className="card-light-layer">
          <div className="gold-slit" />

          <div className="gold-lumen">
            <div className="lumen-min" />
            <div className="lumen-mid" />
          </div>
        </div>

        <div className="card-content">

          <ProductContent />

        </div>

      </article>


      {/* ======================================================
          VISUALIZAÇÃO EXPANDIDA
      ====================================================== */}

      {expanded && (

        <div
          className="product-modal-overlay"
          onClick={() =>
            setExpanded(false)
          }
        >

          <div
            className="expanded-card"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="expanded-gold-light" />

            {/* FECHAR */}

            <button
              className="close-expanded"
              type="button"
              aria-label="Fechar"
              onClick={() =>
                setExpanded(false)
              }
            >
              ×
            </button>

            <ProductContent modal />

          </div>

        </div>

      )}

    </>
  );
}


/* ============================================================
   APP
============================================================ */

export default function App() {

  const products = [

    /* ========================================================
       PRODUTO 1 — 5 IMAGENS
    ======================================================== */

    {
      images: [
        "/produtos/camisa-1.png",
        "/produtos/camisa-2.png",
        "/produtos/camisa-3.png",
        "/produtos/camisa-4.png",
        "/produtos/camisa-5.png",
      ],

      colors: [
        {
          name: "Preto",
          value: "#080808",
        },
        {
          name: "Azul",
          value: "#164cff",
        },
        {
          name: "Vermelho",
          value: "#d51f32",
        },
      ],

      sizes: [
        "P",
        "M",
        "G",
        "GG",
      ],
    },


    /* ========================================================
       PRODUTO 2 — 3 IMAGENS
    ======================================================== */

    {
      images: [
        "/produtos/calca-1.png",
        "/produtos/calca-2.png",
        "/produtos/calca-3.png",
      ],

      colors: [
        {
          name: "Preto",
          value: "#080808",
        },
        {
          name: "Azul",
          value: "#244c87",
        },
      ],

      sizes: [
        "38",
        "40",
        "42",
        "44",
      ],
    },


    /* ========================================================
       PRODUTO 3 — 1 IMAGEM
    ======================================================== */

    {
      images: [
        "/produtos/bermuda-1.png",
      ],

      colors: [
        {
          name: "Preto",
          value: "#080808",
        },
        {
          name: "Branco",
          value: "#eeeeee",
        },
      ],

      sizes: [
        "M",
        "G",
        "GG",
        "XG",
      ],
    },

  ];

  return (
    <>

      <style>{`

        /* ====================================================
           BASE
        ==================================================== */

        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          margin: 0;
          min-height: 100%;
        }

        body {
          background:

            radial-gradient(
              circle at 50% -20%,
              #28231a 0%,
              #11100e 25%,
              #070707 60%,
              #030303 100%
            );

          color: white;

          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        button {
          font-family: inherit;
        }


        /* ====================================================
           GRID
        ==================================================== */

        .products-grid {
          width: 100%;

          min-height: 100vh;

          padding: 55px;

          display: grid;

          grid-template-columns:
            repeat(
              auto-fill,
              minmax(320px, 1fr)
            );

          align-items: start;

          justify-items: center;

          gap: 40px;
        }


        /* ====================================================
           CARD
        ==================================================== */

        .product-card {
          position: relative;

          width: min(100%, 355px);

          min-height: 500px;

          padding: 18px;

          border-radius: 30px;

          overflow: hidden;

          isolation: isolate;

          cursor: pointer;

          background:

            radial-gradient(
              circle at 50% 4%,
              rgba(208,167,79,.09),
              transparent 35%
            ),

            linear-gradient(
              145deg,
              rgba(30,30,31,.72),
              rgba(8,8,9,.86)
            );

          backdrop-filter:
            blur(22px);

          -webkit-backdrop-filter:
            blur(22px);

          border:
            1px solid
            rgba(219,181,99,.20);

          box-shadow:

            inset
            0 1px 0
            rgba(255,255,255,.07),

            0 18px 50px
            rgba(0,0,0,.50),

            0 0 0 1px
            rgba(255,255,255,.015);

          transition:
            transform .42s cubic-bezier(.2,.8,.2,1),
            border-color .42s ease,
            box-shadow .42s ease;
        }


        .product-card::before {
          content: "";

          position: absolute;

          inset: -1px;

          border-radius: inherit;

          padding: 1px;

          background:
            linear-gradient(
              145deg,
              rgba(244,211,135,.5),
              rgba(184,134,48,.08) 30%,
              rgba(255,255,255,.02) 55%,
              rgba(196,148,57,.22)
            );

          -webkit-mask:
            linear-gradient(#fff 0 0)
              content-box,
            linear-gradient(#fff 0 0);

          -webkit-mask-composite: xor;

          mask-composite: exclude;

          pointer-events: none;
        }


        .product-card:hover {
          transform:
            translateY(-8px)
            scale(1.01);

          border-color:
            rgba(218,176,87,.44);

          box-shadow:

            0 25px 65px
            rgba(0,0,0,.65),

            0 0 35px
            rgba(192,143,47,.10);
        }


        /* ====================================================
           LUZ
        ==================================================== */

        .card-light-layer {
          position: absolute;

          inset: 0;

          pointer-events: none;

          overflow: hidden;
        }


        .gold-slit {
          position: absolute;

          top: 7px;
          left: 50%;

          transform:
            translateX(-50%);

          width: 58%;
          height: 2px;

          border-radius: 50%;

          background:
            linear-gradient(
              90deg,
              transparent,
              #c79a43,
              #f1d28b,
              #c79a43,
              transparent
            );

          box-shadow:
            0 0 12px
            rgba(218,177,87,.35);
        }


        .gold-lumen {
          position: absolute;

          inset: 0;

          pointer-events: none;
        }


        .lumen-min {
          position: absolute;

          top: 0;
          left: 15%;

          width: 70%;
          height: 100px;

          background:
            linear-gradient(
              rgba(230,190,104,.16),
              transparent
            );

          filter: blur(14px);
        }


        .lumen-mid {
          position: absolute;

          width: 80%;
          height: 220px;

          top: -80px;
          left: 10%;

          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,
              rgba(212,170,79,.13),
              transparent 70%
            );

          filter: blur(18px);
        }


        .card-content {
          position: relative;

          z-index: 2;
        }


        /* ====================================================
           IMAGEM
        ==================================================== */

        .product-image-area {
          position: relative;

          width: 100%;
          height: 325px;

          display: flex;

          justify-content: center;
          align-items: center;

          overflow: hidden;
        }


        .image-stage {
          position: relative;

          width: 100%;
          height: 100%;

          display: flex;

          align-items: center;
          justify-content: center;
        }


        .product-halo {
          position: absolute;

          width: 215px;
          height: 215px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(205,160,67,.13),
              rgba(205,160,67,.03) 45%,
              transparent 70%
            );

          filter: blur(8px);
        }


        .product-image {
          position: relative;

          z-index: 2;

          max-width: 90%;
          max-height: 285px;

          width: auto;
          height: auto;

          object-fit: contain;

          user-select: none;

          filter:
            drop-shadow(
              0 20px 22px
              rgba(0,0,0,.5)
            );
        }


        /* animação lateral */

        .slide-image {
          animation:
            slideProduct .55s
            cubic-bezier(.2,.8,.2,1);
        }


        @keyframes slideProduct {

          from {
            opacity: 0;

            transform:
              translateX(45px)
              scale(.97);
          }

          to {
            opacity: 1;

            transform:
              translateX(0)
              scale(1);
          }

        }


        /* ====================================================
           CONTADOR
        ==================================================== */

        .image-counter {
          position: absolute;

          right: 9px;
          top: 10px;

          z-index: 10;

          padding:
            6px 9px;

          border-radius: 10px;

          background:
            rgba(0,0,0,.45);

          border:
            1px solid
            rgba(255,255,255,.07);

          backdrop-filter:
            blur(10px);

          color: #d4ad58;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: .5px;
        }


        .image-counter span {
          color: #666;

          padding:
            0 3px;
        }


        /* ====================================================
           PONTOS
        ==================================================== */

        .image-dots {
          height: 18px;

          display: flex;

          justify-content: center;
          align-items: center;

          gap: 6px;

          margin-top: -7px;

          margin-bottom: 8px;
        }


        .image-dot {
          width: 5px;
          height: 5px;

          padding: 0;

          border: 0;

          border-radius: 50%;

          background: #444;

          cursor: pointer;

          transition:
            width .3s ease,
            background .3s ease,
            box-shadow .3s ease;
        }


        .image-dot.active {
          width: 18px;

          border-radius: 10px;

          background:
            linear-gradient(
              90deg,
              #9b7027,
              #e0bb68
            );

          box-shadow:
            0 0 8px
            rgba(218,177,87,.25);
        }


        /* ====================================================
           CONTROLES
        ==================================================== */

        .product-controls {
          position: relative;

          z-index: 10;
        }


        /* ====================================================
           CORES
        ==================================================== */

        .glass-radio-group {
          width: 100%;

          display: flex;

          gap: 4px;

          padding: 5px;

          border-radius: 15px;

          background:
            rgba(255,255,255,.035);

          border:
            1px solid
            rgba(255,255,255,.06);

          backdrop-filter:
            blur(14px);
        }


        .color-option {
          position: relative;

          flex: 1;

          min-width: 0;

          min-height: 43px;

          padding:
            7px 6px;

          border-radius: 11px;

          display: flex;

          justify-content: center;
          align-items: center;

          gap: 6px;

          color: #858585;

          font-size: 11px;
          font-weight: 600;

          cursor: pointer;

          transition: .3s ease;
        }


        .color-option input,
        .size-option input {
          position: absolute;

          opacity: 0;

          pointer-events: none;
        }


        .color-option:hover {
          color: white;

          background:
            rgba(255,255,255,.035);
        }


        .color-option.selected {
          color: #f5d992;

          background:
            linear-gradient(
              135deg,
              rgba(212,170,78,.18),
              rgba(117,82,25,.10)
            );

          box-shadow:
            inset 0 0 0 1px
            rgba(222,181,91,.22);
        }


        .color-dot {
          width: 13px;
          height: 13px;

          min-width: 13px;

          border-radius: 50%;

          border:
            1px solid
            rgba(255,255,255,.30);

          box-shadow:
            0 2px 5px
            rgba(0,0,0,.5);
        }


        .color-name {
          overflow: hidden;

          white-space: nowrap;

          text-overflow: ellipsis;
        }


        /* ====================================================
           TAMANHOS
        ==================================================== */

        .liquid-group {
          width: 100%;

          margin-top: 11px;

          display: flex;

          gap: 5px;

          padding: 5px;

          border-radius: 15px;

          background:
            rgba(0,0,0,.40);

          border:
            1px solid
            rgba(255,255,255,.055);

          overflow-x: auto;

          scrollbar-width: none;
        }


        .liquid-group::-webkit-scrollbar {
          display: none;
        }


        .size-option {
          position: relative;

          flex: 1;

          min-width: 48px;

          height: 42px;

          border-radius: 11px;

          display: flex;

          justify-content: center;
          align-items: center;

          color: #686868;

          font-size: 12px;
          font-weight: 650;

          cursor: pointer;

          transition: .3s ease;
        }


        .size-option:hover {
          color: white;
        }


        .size-option.selected {
          color: #f6dda0;

          background:
            linear-gradient(
              145deg,
              rgba(208,164,70,.24),
              rgba(103,72,22,.14)
            );

          box-shadow:

            inset
            0 1px 1px
            rgba(255,222,151,.12),

            0 0 0 1px
            rgba(211,169,78,.20),

            0 0 15px
            rgba(196,147,47,.08);
        }


        /* ====================================================
           MODAL / EXPANSÃO
        ==================================================== */

        .product-modal-overlay {
          position: fixed;

          inset: 0;

          z-index: 99999;

          padding: 25px;

          display: flex;

          align-items: center;
          justify-content: center;

          background:
            rgba(0,0,0,.78);

          backdrop-filter:
            blur(15px);

          -webkit-backdrop-filter:
            blur(15px);

          animation:
            overlayIn .3s ease;
        }


        @keyframes overlayIn {

          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }

        }


        .expanded-card {
          position: relative;

          width:
            min(94vw, 760px);

          max-height: 94vh;

          padding:
            25px 28px 28px;

          overflow-y: auto;

          scrollbar-width: thin;

          border-radius: 34px;

          background:

            radial-gradient(
              circle at 50% 0%,
              rgba(210,168,79,.14),
              transparent 37%
            ),

            linear-gradient(
              145deg,
              rgba(27,27,28,.96),
              rgba(5,5,6,.98)
            );

          border:
            1px solid
            rgba(223,183,96,.35);

          box-shadow:

            inset
            0 1px 0
            rgba(255,255,255,.08),

            0 35px 100px
            rgba(0,0,0,.8),

            0 0 70px
            rgba(194,145,49,.10);

          animation:
            expandCard .42s
            cubic-bezier(.16,1,.3,1);
        }


        @keyframes expandCard {

          from {
            opacity: 0;

            transform:
              scale(.84)
              translateY(25px);
          }

          to {
            opacity: 1;

            transform:
              scale(1)
              translateY(0);
          }

        }


        .expanded-gold-light {
          position: absolute;

          top: 0;
          left: 15%;

          width: 70%;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #e1bd6b,
              transparent
            );

          box-shadow:
            0 0 20px
            rgba(221,180,90,.45);
        }


        /* ====================================================
           IMAGEM EXPANDIDA
        ==================================================== */

        .expanded-image-area {
          height:
            min(58vh, 520px);

          cursor: default;
        }


        .expanded-image-area
        .product-image {

          max-width: 88%;

          max-height:
            min(52vh, 470px);
        }


        /* ====================================================
           FECHAR
        ==================================================== */

        .close-expanded {
          position: absolute;

          right: 18px;
          top: 18px;

          z-index: 100;

          width: 39px;
          height: 39px;

          padding: 0;

          border-radius: 50%;

          border:
            1px solid
            rgba(255,255,255,.10);

          background:
            rgba(0,0,0,.45);

          color: #aaa;

          backdrop-filter:
            blur(10px);

          font-size: 25px;

          line-height: 1;

          cursor: pointer;

          transition: .25s ease;
        }


        .close-expanded:hover {
          color: #e5c16d;

          border-color:
            rgba(218,177,87,.4);

          background:
            rgba(201,151,54,.10);

          transform:
            rotate(90deg);
        }


        /* ====================================================
           SETAS
        ==================================================== */

        .image-arrow {
          position: absolute;

          top: 50%;

          z-index: 20;

          transform:
            translateY(-50%);

          width: 44px;
          height: 58px;

          padding: 0;

          border-radius: 14px;

          border:
            1px solid
            rgba(255,255,255,.08);

          background:
            rgba(5,5,5,.40);

          color: #aaa;

          backdrop-filter:
            blur(12px);

          font-size: 32px;

          cursor: pointer;

          transition: .25s ease;
        }


        .image-arrow:hover {
          color: #e8c574;

          border-color:
            rgba(218,177,87,.35);

          background:
            rgba(174,128,41,.10);

          box-shadow:
            0 0 20px
            rgba(218,177,87,.08);
        }


        .arrow-left {
          left: 3px;
        }


        .arrow-right {
          right: 3px;
        }


        /* ====================================================
           MINIATURAS
        ==================================================== */

        .thumbnail-list {
          width: 100%;

          display: flex;

          justify-content: center;

          gap: 9px;

          margin:
            -3px 0 18px;

          overflow-x: auto;

          scrollbar-width: none;
        }


        .thumbnail-list::-webkit-scrollbar {
          display: none;
        }


        .thumbnail {
          width: 64px;
          height: 64px;

          min-width: 64px;

          padding: 5px;

          border-radius: 13px;

          border:
            1px solid
            rgba(255,255,255,.07);

          background:
            rgba(255,255,255,.025);

          cursor: pointer;

          overflow: hidden;

          transition:
            border-color .3s ease,
            background .3s ease,
            transform .3s ease,
            box-shadow .3s ease;
        }


        .thumbnail:hover {
          transform:
            translateY(-2px);

          border-color:
            rgba(255,255,255,.18);
        }


        .thumbnail.active {
          border-color:
            rgba(223,182,92,.58);

          background:
            rgba(205,158,64,.08);

          box-shadow:
            0 0 14px
            rgba(213,171,82,.12);
        }


        .thumbnail img {
          width: 100%;
          height: 100%;

          object-fit: contain;

          display: block;
        }


        /* controles maiores no modal */

        .expanded-card
        .product-controls {

          max-width: 610px;

          margin:
            0 auto;
        }


        .expanded-card
        .color-option {

          min-height: 48px;

          font-size: 12px;
        }


        .expanded-card
        .size-option {
          height: 46px;

          font-size: 13px;
        }


        /* ====================================================
           MOBILE
        ==================================================== */

        @media (max-width: 760px) {

          .products-grid {
            padding:
              30px 16px;

            grid-template-columns:
              1fr;

            gap: 28px;
          }


          .product-card {
            width: 100%;

            max-width: 370px;
          }


          .product-modal-overlay {
            padding: 10px;
          }


          .expanded-card {
            width: 100%;

            max-height: 96vh;

            padding:
              18px 15px 22px;

            border-radius: 26px;
          }


          .expanded-image-area {
            height: 48vh;

            min-height: 310px;
          }


          .expanded-image-area
          .product-image {

            max-height: 43vh;

            max-width: 88%;
          }


          .image-arrow {
            width: 38px;
            height: 50px;

            font-size: 28px;
          }


          .thumbnail {
            width: 55px;
            height: 55px;

            min-width: 55px;
          }


          .close-expanded {
            width: 36px;
            height: 36px;

            right: 13px;
            top: 13px;
          }

        }

      `}</style>


      <main className="products-grid">

        {products.map(
          (product, index) => (

            <ProductCard
              key={index}

              images={product.images}

              colors={product.colors}

              sizes={product.sizes}
            />

          )
        )}

      </main>

    </>
  );
}