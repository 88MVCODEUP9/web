import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("camisa");

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

  const items = [
    {
      id: "camisa",
      label: "Camisa",
      icon: <ShirtIcon />,
    },
    {
      id: "chapeu",
      label: "Chapéu",
      icon: <HatIcon />,
    },
    {
      id: "sapato",
      label: "Sapato",
      icon: <ShoeIcon />,
    },
    {
      id: "chinelo",
      label: "Chinelo",
      icon: <SlipperIcon />,
    },
    {
      id: "camiseta",
      label: "Camiseta",
      icon: <TshirtIcon />,
    },
    {
      id: "bermuda",
      label: "Bermuda",
      icon: <ShortsIcon />,
    },
    {
      id: "calca",
      label: "Calça",
      icon: <PantsIcon />,
    },
  ];

  return (
    <>
      <style>{`

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
          background: #080808;

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

        /* =====================================================
           MENU LATERAL
        ===================================================== */

        .sidebar {
          position: fixed;

          top: 0;
          bottom: 0;
          left: 0;

          width: 78px;
          height: 100vh;

          padding: 14px 10px;

          display: flex;
          flex-direction: column;

          background:

            radial-gradient(
              circle at 0% 0%,
              rgba(197, 155, 69, 0.10),
              transparent 30%
            ),

            linear-gradient(
              145deg,
              #030303 0%,
              #0b0b0c 42%,
              #171719 100%
            );

          border-right:
            1px solid rgba(255, 255, 255, 0.07);

          box-shadow:
            12px 0 40px rgba(0, 0, 0, 0.60);

          overflow: hidden;

          transition:
            width .42s cubic-bezier(.4, 0, .2, 1),
            box-shadow .42s ease;

          z-index: 9999;
        }

        .sidebar.open {
          width: 238px;

          box-shadow:
            18px 0 55px rgba(0, 0, 0, 0.72);
        }

        /* =====================================================
           BOTÃO DO CABIDE
        ===================================================== */

        .menu-toggle {
          position: relative;

          width: 100%;
          height: 58px;

          min-height: 58px;

          padding: 0;

          border:
            1px solid rgba(212, 175, 90, 0.22);

          border-radius: 15px;

          background:
            linear-gradient(
              135deg,
              #090909,
              #19191b
            );

          color: #ffffff;

          display: flex;
          align-items: center;

          cursor: pointer;

          overflow: hidden;

          transition:
            border-color .3s ease,
            box-shadow .3s ease,
            transform .2s ease;
        }

        /* reflexo dourado */

        .menu-toggle::after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              110deg,
              transparent 25%,
              rgba(212,175,90,.10),
              transparent 75%
            );

          transform: translateX(-110%);

          transition:
            transform .65s ease;
        }

        .menu-toggle:hover::after {
          transform: translateX(110%);
        }

        .menu-toggle:hover {
          border-color:
            rgba(220, 180, 90, .55);

          box-shadow:
            0 0 24px rgba(212, 175, 90, .11);
        }

        .menu-toggle:active {
          transform: scale(.97);
        }

        /* =====================================================
           CABIDE
        ===================================================== */

        .hanger {
          position: relative;

          z-index: 2;

          min-width: 56px;
          width: 56px;
          height: 56px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #ffffff;

          transition:
            color .3s ease,
            transform .3s ease,
            filter .3s ease;
        }

        .hanger svg {
          width: 30px;
          height: 30px;
        }

        .menu-toggle:hover .hanger {
          color: #d8b15b;

          transform: scale(1.08);

          filter:
            drop-shadow(
              0 0 6px rgba(214, 175, 88, .40)
            );
        }

        /* =====================================================
           NOME GUARDA-ROUPA
        ===================================================== */

        .menu-name {
          position: relative;

          z-index: 2;

          margin-left: 7px;

          color: #ffffff;

          font-size: 15px;
          font-weight: 650;

          letter-spacing: .3px;

          white-space: nowrap;

          opacity: 0;

          transform: translateX(-12px);

          transition:
            opacity .22s ease,
            transform .32s ease;
        }

        .sidebar.open .menu-name {
          opacity: 1;
          transform: translateX(0);
        }

        /* =====================================================
           LINHA DOURADA
        ===================================================== */

        .gold-line {
          width: 34px;
          height: 1px;

          min-height: 1px;

          margin: 17px auto 12px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #8c682c,
              #e0ba62,
              #8c682c,
              transparent
            );

          opacity: .8;

          transition: width .4s ease;
        }

        .sidebar.open .gold-line {
          width: 185px;
        }

        /* =====================================================
           LISTA
        ===================================================== */

        .menu-list {
          display: flex;
          flex-direction: column;

          gap: 6px;

          width: 100%;
        }

        /* =====================================================
           ITEM
        ===================================================== */

        .menu-item {
          position: relative;

          width: 100%;
          height: 52px;

          min-height: 52px;

          padding: 0;

          border:
            1px solid transparent;

          border-radius: 12px;

          background: transparent;

          color: #f3f3f3;

          display: flex;
          align-items: center;

          cursor: pointer;

          overflow: hidden;

          transition:
            color .25s ease,
            background .25s ease,
            border-color .25s ease,
            box-shadow .25s ease,
            transform .2s ease;
        }

        /* HOVER */

        .menu-item:hover {
          color: #ffffff;

          background:
            linear-gradient(
              90deg,
              rgba(255,255,255,.065),
              rgba(255,255,255,.018)
            );

          border-color:
            rgba(255,255,255,.045);
        }

        .menu-item:active {
          transform: scale(.97);
        }

        /* =====================================================
           ITEM SELECIONADO
        ===================================================== */

        .menu-item.active {
          color: #e6bf69;

          border-color:
            rgba(212,175,90,.20);

          background:
            linear-gradient(
              90deg,
              rgba(212,175,90,.17) 0%,
              rgba(212,175,90,.065) 55%,
              transparent 100%
            );

          box-shadow:
            inset 0 0 20px rgba(212,175,90,.025);
        }

        /* BARRA DOURADA */

        .menu-item.active::before {
          content: "";

          position: absolute;

          left: 0;

          width: 3px;
          height: 30px;

          border-radius:
            0 5px 5px 0;

          background:
            linear-gradient(
              180deg,
              #f2d17d,
              #b68631
            );

          box-shadow:
            0 0 6px #d6af58,
            0 0 14px rgba(214,175,88,.55),
            0 0 26px rgba(214,175,88,.22);
        }

        /* =====================================================
           FUNDO ILUMINADO DO ÍCONE
        ===================================================== */

        .menu-item.active
        .item-icon::before {

          content: "";

          position: absolute;

          width: 36px;
          height: 36px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(218,178,88,.22),
              rgba(218,178,88,.07) 45%,
              transparent 72%
            );

          filter: blur(2px);
        }

        /* =====================================================
           ÍCONES
        ===================================================== */

        .item-icon {
          position: relative;

          min-width: 56px;
          width: 56px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #ffffff;

          transition:
            color .3s ease,
            transform .3s ease,
            filter .3s ease;
        }

        .item-icon svg {
          position: relative;

          z-index: 2;

          width: 27px;
          height: 27px;

          overflow: visible;
        }

        /* Chinelo e camiseta têm viewBox 50 */

        .menu-item:hover
        .item-icon {

          transform: scale(1.08);
        }

        /* SELECIONADO */

        .menu-item.active
        .item-icon {

          color: #e5bd64;

          transform: scale(1.08);

          filter:
            drop-shadow(
              0 0 5px rgba(218,178,88,.50)
            );
        }

        /* =====================================================
           TEXTO
        ===================================================== */

        .item-label {
          position: relative;

          z-index: 2;

          margin-left: 7px;

          font-size: 14px;
          font-weight: 550;

          letter-spacing: .2px;

          white-space: nowrap;

          opacity: 0;

          transform: translateX(-9px);

          transition:
            opacity .2s ease,
            transform .3s ease;
        }

        .sidebar.open
        .item-label {

          opacity: 1;

          transform: translateX(0);
        }

        .menu-item.active
        .item-label {

          font-weight: 650;
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .sidebar {
            width: 72px;
          }

          .sidebar.open {
            width: 230px;
          }

          .hanger,
          .item-icon {
            min-width: 50px;
            width: 50px;
          }

          .hanger svg {
            width: 28px;
            height: 28px;
          }

          .item-icon svg {
            width: 25px;
            height: 25px;
          }
        }

      `}</style>

      {/* ======================================================
          MENU LATERAL
      ====================================================== */}

      <aside
        className={`sidebar ${open ? "open" : ""}`}
      >

        {/* CABIDE / ABRIR E FECHAR */}

        <button
          className="menu-toggle"
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
            Guarda-Roupa
          </span>

        </button>

        {/* SEPARADOR */}

        <div className="gold-line" />

        {/* CATEGORIAS */}

        <nav className="menu-list">

          {items.map((item) => (

            <button
              key={item.id}

              type="button"

              className={
                `menu-item ${
                  active === item.id
                    ? "active"
                    : ""
                }`
              }

              onClick={() =>
                setActive(item.id)
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