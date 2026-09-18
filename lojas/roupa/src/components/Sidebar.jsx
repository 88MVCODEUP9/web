import { useSiteConfig } from "../context/SiteConfigContext.jsx";
import "../styles/Sidebar.css";

export default function Sidebar({ open, setOpen, active, onSelect, categories }) {
  const { config } = useSiteConfig();

  /* =========================================================
     CABIDE
  ========================================================= */

  const HangerIcon = () => (
    <svg viewBox="0 0 32 32" fill="none">
      <path
        d="M12.8 7.2C12.8 5.1 14.2 3.5 16.1 3.5
           C18 3.5 19.4 5 19.4 6.9
           C19.4 8.5 18.4 9.5 17.1 10.4
           C15.8 11.3 15.2 12.2 15.2 13.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M15.2 13.5V15"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M16 14.7L5.2 22.1
           C3.5 23.3 4.3 25.8 6.3 25.8
           H25.7
           C27.7 25.8 28.5 23.3 26.8 22.1
           L16 14.7Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );

  /* =========================================================
     CAMISA
  ========================================================= */

  const ShirtIcon = () => (
    <svg viewBox="0 0 32 32" fill="none">
      <path
        d="M11 5L6 7.5L3.5 13L8 15V27H24V15L28.5 13L26 7.5L21 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M11 5C12 7.3 13.7 8.5 16 8.5C18.3 8.5 20 7.3 21 5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M13 6L16 11L19 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M16 11V16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );

  /* =========================================================
     CHAPÉU / BONÉ
  ========================================================= */

  const HatIcon = () => (
    <svg viewBox="0 0 32 32" fill="none">
      <path
        d="M6 18C6.5 11 10.5 7 16 7C21.5 7 25.5 11 26 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M6 18H26"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M16 18C21 18 26 19 29 22C24 23.5 18 23.5 13 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  /* =========================================================
     SAPATO
  ========================================================= */

  const ShoeIcon = () => (
    <svg viewBox="0 0 32 32" fill="none">
      <path
        d="M5 10L11 13C13 14 14 17 17 18L25 20
           C27.5 20.7 29 22 29 24
           C29 26 27.5 27 25 27H7
           C4.5 27 3 25.5 3 23
           C3 20 4 15 5 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M4 22H28"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M10 14L14 13M12 16L16 15M14 18L18 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  /* =========================================================
     CHINELO / SANDÁLIA
     NOVO ÍCONE
  ========================================================= */

  const SlipperIcon = () => (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SOLA */}

      <path
        d="
          M20.5 3.5
          C16.5 4.5 14.2 9 13.5 14
          C12.7 19.5 13 26 14.3 32
          C15.5 38.2 18 44 21.8 46.5
          C24.5 48.3 28.2 47.4 30.4 44
          C33.2 39.8 34.2 34 34 28
          C33.8 21.8 32.7 15.5 30.3 10.5
          C28 5.7 24.3 2.7 20.5 3.5Z
        "
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />

      {/* TIRAS */}

      <path
        d="
          M15.8 17
          C19 18.2 21.7 20.3 24 23.2
          C26.2 20.5 29 18.3 32 17
        "
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M24 23V29"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* DETALHE */}

      <circle
        cx="24"
        cy="29.5"
        r="1.6"
        fill="currentColor"
      />
    </svg>
  );

  /* =========================================================
     CAMISETA
     NOVO ÍCONE BASEADO NO SVG ENVIADO
  ========================================================= */

  const TshirtIcon = () => (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <g transform="translate(0,50) scale(0.1,-0.1)">
        <path
          d="
            M153 463
            C133 459 130 452 130 411
            C130 384 122 348 110 325
            C93 292 90 266 90 158
            L90 30
            L410 30
            L410 158
            C410 266 407 292 390 325
            C378 348 370 384 370 411
            C370 455 368 458 339 464
            C322 467 299 465 288 459
            C269 449 250 450 195 463
            C184 466 165 466 153 463Z

            M206 379
            C242 339 320 375 320 431
            C320 443 325 447 335 444
            C345 440 350 424 350 396
            C350 373 359 337 370 315
            C387 283 390 256 390 163
            L390 50
            L110 50
            L110 163
            C110 256 113 283 130 315
            C141 337 150 373 150 396
            C150 444 171 461 182 422
            C186 409 197 389 206 379Z

            M300 426
            C300 410 268 380 252 380
            C234 380 200 409 200 424
            C200 431 220 435 250 435
            C278 435 300 431 300 426Z
          "
        />

        <path
          d="
            M170 275
            C170 264 177 261 195 266
            C213 270 220 268 220 257
            C220 249 209 235 195 226
            C181 217 170 201 170 190
            C170 174 177 170 205 170
            C224 170 240 175 240 180
            C240 186 228 190 213 190
            L185 191
            L213 211
            C232 225 240 241 240 261
            C240 287 237 290 205 290
            C180 290 170 286 170 275Z
          "
        />

        <path
          d="
            M260 275
            C260 264 267 261 285 266
            C303 271 310 268 310 257
            C310 249 304 239 298 236
            C288 231 288 229 298 224
            C304 221 310 211 310 203
            C310 192 303 189 284 194
            C265 199 259 197 262 188
            C265 181 280 175 296 175
            C324 175 325 176 327 233
            L330 290
            L295 290
            C270 290 260 285 260 275Z
          "
        />
      </g>
    </svg>
  );

  /* =========================================================
     BERMUDA
  ========================================================= */

  const ShortsIcon = () => (
    <svg viewBox="0 0 32 32" fill="none">
      <path
        d="M7 5H25L24 14L27 26H18L16 18L14 26H5L8 14L7 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M8 10H24M16 6V18"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );

  /* =========================================================
     CALÇA
  ========================================================= */

  const PantsIcon = () => (
    <svg viewBox="0 0 32 32" fill="none">
      <path
        d="M8 4H24L23 14L25 28H18L16 16L14 28H7L9 14L8 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M9 9H23M16 5V16"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M10 10C11 12 12 13 14 13M22 10C21 12 20 13 18 13"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );

  /* =========================================================
     ITENS DO MENU
  ========================================================= */

  const icons = { camisa: <ShirtIcon />, chapeu: <HatIcon />, sapato: <ShoeIcon />, chinelo: <SlipperIcon />, camiseta: <TshirtIcon />, bermuda: <ShortsIcon />, short: <ShortsIcon />, calca: <PantsIcon /> };
  const items = [{ id: "todos", label: config.labels.allProducts, icon: <HangerIcon /> }, ...categories.map(category => ({ ...category, icon: icons[category.id] || <HangerIcon /> }))];


  return (
    <>
      

      {/* ======================================================
          MENU LATERAL
      ====================================================== */}

      <aside
        className={`sidebar ${open ? "open" : ""}`}
      >

        {/* CABIDE / ABRIR E FECHAR */}

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="category-menu"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={
            open
              ? "Fechar menu"
              : "Abrir menu"
          }
        >

          <span className="hanger">
            <HangerIcon />
          </span>

          <span className="menu-name">
            {config.labels.menu}
          </span>

        </button>

        {/* SEPARADOR */}

        <div className="gold-line" />

        {/* CATEGORIAS */}

        <nav className="menu-list" id="category-menu" aria-label={config.labels.categories}>

          {items.map((item) => (

            <button
              key={item.id}
              aria-label={item.label}
              title={!open ? item.label : undefined}
              aria-pressed={active === item.id}

              type="button"

              className={
                `menu-item ${
                  active === item.id
                    ? "active"
                    : ""
                }`
              }

              onClick={() =>
                onSelect(item.id)
              }
            >

              <span className="item-icon">
                {item.icon}
              </span>

              <span className="item-label">
                {item.label}
              </span>

            </button>

          ))}

        </nav>

      </aside>
    </>
  );
}