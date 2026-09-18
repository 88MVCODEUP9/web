import React from "react";

export default function Footer() {
  /* =========================================================
     EDITE SOMENTE ESTES LINKS
  ========================================================= */

  const socialLinks = {
    instagram: "https://www.instagram.com/SEU_USUARIO",
    whatsapp: "https://wa.me/55SEUNUMERO",
  };

  return (
    <>
      <style>{`
        /* =====================================================
           FOOTER
        ===================================================== */

        .mv-footer {
          position: relative;

          width: 100%;
          height: 320px;
          min-height: 260px;
          max-height: 500px;

          overflow: hidden;

          background: #030303;

          border-top: 1px solid rgba(218, 177, 87, 0.25);

          box-shadow:
            0 -15px 45px rgba(0, 0, 0, 0.55),
            inset 0 1px 0 rgba(255, 215, 130, 0.05);

          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          isolation: isolate;
        }

        /* =====================================================
           FUNDO ANIMADO
           Baseado no efeito enviado, convertido para dourado
        ===================================================== */

        .mv-footer-background {
          position: absolute;
          inset: 0;

          overflow: hidden;

          z-index: 0;

          pointer-events: none;
        }

        .mv-footer-background::before {
          content: "";

          position: absolute;

          inset: -145%;

          transform: rotate(-45deg);

          background-color: #020202;

          background-image:

            radial-gradient(
              4px 100px at 0px 235px,
              rgba(255, 209, 111, 0.90),
              transparent
            ),

            radial-gradient(
              4px 100px at 300px 235px,
              rgba(185, 132, 39, 0.80),
              transparent
            ),

            radial-gradient(
              1.5px 1.5px at 150px 117.5px,
              rgba(255, 225, 154, 0.95) 100%,
              transparent 150%
            ),

            radial-gradient(
              4px 100px at 0px 252px,
              rgba(122, 82, 24, 0.72),
              transparent
            ),

            radial-gradient(
              4px 100px at 300px 252px,
              rgba(225, 173, 68, 0.74),
              transparent
            ),

            radial-gradient(
              1.5px 1.5px at 150px 126px,
              rgba(255, 202, 90, 0.90) 100%,
              transparent 150%
            ),

            radial-gradient(
              4px 100px at 0px 150px,
              rgba(245, 193, 88, 0.74),
              transparent
            ),

            radial-gradient(
              4px 100px at 300px 150px,
              rgba(164, 112, 34, 0.78),
              transparent
            ),

            radial-gradient(
              1.5px 1.5px at 150px 75px,
              rgba(255, 223, 142, 0.94) 100%,
              transparent 150%
            ),

            radial-gradient(
              4px 100px at 0px 253px,
              rgba(178, 126, 38, 0.74),
              transparent
            ),

            radial-gradient(
              4px 100px at 300px 253px,
              rgba(241, 192, 91, 0.72),
              transparent
            ),

            radial-gradient(
              1.5px 1.5px at 150px 126.5px,
              rgba(255, 216, 126, 0.92) 100%,
              transparent 150%
            ),

            radial-gradient(
              4px 100px at 0px 204px,
              rgba(126, 86, 25, 0.75),
              transparent
            ),

            radial-gradient(
              4px 100px at 300px 204px,
              rgba(217, 163, 59, 0.77),
              transparent
            ),

            radial-gradient(
              1.5px 1.5px at 150px 102px,
              rgba(255, 226, 151, 0.95) 100%,
              transparent 150%
            ),

            radial-gradient(
              4px 100px at 0px 134px,
              rgba(231, 180, 77, 0.75),
              transparent
            ),

            radial-gradient(
              4px 100px at 300px 134px,
              rgba(137, 94, 30, 0.76),
              transparent
            ),

            radial-gradient(
              1.5px 1.5px at 150px 67px,
              rgba(255, 206, 100, 0.90) 100%,
              transparent 150%
            ),

            radial-gradient(
              4px 100px at 0px 179px,
              rgba(164, 112, 31, 0.75),
              transparent
            ),

            radial-gradient(
              4px 100px at 300px 179px,
              rgba(236, 188, 84, 0.78),
              transparent
            ),

            radial-gradient(
              1.5px 1.5px at 150px 89.5px,
              rgba(255, 229, 157, 0.90) 100%,
              transparent 150%
            ),

            radial-gradient(
              4px 100px at 0px 299px,
              rgba(194, 140, 41, 0.80),
              transparent
            ),

            radial-gradient(
              4px 100px at 300px 299px,
              rgba(255, 208, 103, 0.76),
              transparent
            ),

            radial-gradient(
              1.5px 1.5px at 150px 149.5px,
              rgba(255, 219, 133, 0.90) 100%,
              transparent 150%
            ),

            radial-gradient(
              4px 100px at 0px 215px,
              rgba(239, 186, 76, 0.75),
              transparent
            ),

            radial-gradient(
              4px 100px at 300px 215px,
              rgba(139, 95, 28, 0.78),
              transparent
            ),

            radial-gradient(
              1.5px 1.5px at 150px 107.5px,
              rgba(255, 211, 110, 0.90) 100%,
              transparent 150%
            ),

            radial-gradient(
              4px 100px at 0px 281px,
              rgba(169, 116, 32, 0.74),
              transparent
            ),

            radial-gradient(
              4px 100px at 300px 281px,
              rgba(229, 175, 65, 0.76),
              transparent
            ),

            radial-gradient(
              1.5px 1.5px at 150px 140.5px,
              rgba(255, 228, 155, 0.92) 100%,
              transparent 150%
            );

          background-size:
            300px 235px,
            300px 235px,
            300px 235px,
            300px 252px,
            300px 252px,
            300px 252px,
            300px 150px,
            300px 150px,
            300px 150px,
            300px 253px,
            300px 253px,
            300px 253px,
            300px 204px,
            300px 204px,
            300px 204px,
            300px 134px,
            300px 134px,
            300px 134px,
            300px 179px,
            300px 179px,
            300px 179px,
            300px 299px,
            300px 299px,
            300px 299px,
            300px 215px,
            300px 215px,
            300px 215px,
            300px 281px,
            300px 281px,
            300px 281px;

          opacity: 0.66;

          animation:
            mvFooterBackground 150s linear infinite;
        }

        @keyframes mvFooterBackground {
          0% {
            background-position:
              0px 220px,
              3px 220px,
              151.5px 337.5px,
              25px 24px,
              28px 24px,
              176.5px 150px,
              50px 16px,
              53px 16px,
              201.5px 91px,
              75px 224px,
              78px 224px,
              226.5px 350.5px,
              100px 19px,
              103px 19px,
              251.5px 121px,
              125px 120px,
              128px 120px,
              276.5px 187px,
              150px 31px,
              153px 31px,
              301.5px 120.5px,
              175px 235px,
              178px 235px,
              326.5px 384.5px,
              200px 121px,
              203px 121px,
              351.5px 228.5px,
              225px 224px,
              228px 224px,
              376.5px 364.5px;
          }

          100% {
            background-position:
              0px 6800px,
              3px 6800px,
              151.5px 6917.5px,
              25px 13632px,
              28px 13632px,
              176.5px 13758px,
              50px 5416px,
              53px 5416px,
              201.5px 5491px,
              75px 17175px,
              78px 17175px,
              226.5px 17301.5px,
              100px 5119px,
              103px 5119px,
              251.5px 5221px,
              125px 8428px,
              128px 8428px,
              276.5px 8495px,
              150px 9876px,
              153px 9876px,
              301.5px 9965.5px,
              175px 13391px,
              178px 13391px,
              326.5px 13540.5px,
              200px 14741px,
              203px 14741px,
              351.5px 14848.5px,
              225px 18770px,
              228px 18770px,
              376.5px 18910.5px;
          }
        }

        /* camada escura para não ficar chamativo demais */

        .mv-footer-background::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.68),
              rgba(0, 0, 0, 0.32) 50%,
              rgba(0, 0, 0, 0.68)
            );
        }

        /* =====================================================
           CONTEÚDO
        ===================================================== */

        .mv-footer-content {
          position: relative;
          z-index: 5;

          width: min(1180px, calc(100% - 50px));
          height: 100%;

          margin: auto;

          display: grid;

          grid-template-columns:
            1fr 220px 1fr;

          align-items: center;

          gap: 40px;
        }

        /* =====================================================
           MENSAGEM
        ===================================================== */

        .mv-footer-message {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .mv-footer-message p {
          max-width: 270px;

          margin: 0;

          color: rgba(255, 255, 255, 0.65);

          font-size: 12px;
          font-weight: 400;

          line-height: 1.7;

          letter-spacing: 0.3px;
        }

        .mv-footer-message strong {
          color: #d7ae59;

          font-weight: 600;
        }

        /* =====================================================
           ROSTO ANIMADO
        ===================================================== */

        .mv-face-container {
          position: relative;

          height: 230px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #d9ae57;
        }

        /* halo atrás */

        .mv-face-container::before {
          content: "";

          position: absolute;

          width: 170px;
          height: 170px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(216, 174, 87, 0.12),
              rgba(216, 174, 87, 0.035) 45%,
              transparent 72%
            );

          filter: blur(10px);

          animation:
            faceHalo 4s ease-in-out infinite;
        }

        @keyframes faceHalo {
          0%,
          100% {
            transform: scale(0.92);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        .mv-face {
          position: relative;

          z-index: 2;

          width: 105px;

          filter:
            drop-shadow(
              0 0 5px
              rgba(215, 172, 84, 0.25)
            );

          transition:
            filter 0.4s ease,
            transform 0.4s ease;
        }

        .mv-face-container:hover .mv-face {
          transform: scale(1.04);

          filter:
            drop-shadow(
              0 0 8px
              rgba(224, 184, 96, 0.48)
            );
        }

        .mv-face .face__eyes,
        .mv-face .face__eye-lid,
        .mv-face .face__mouth-left,
        .mv-face .face__mouth-right,
        .mv-face .face__nose,
        .mv-face .face__pupil {
          animation:
            mvEyes 1s 0.3s forwards;
        }

        .mv-face .face__eye-lid,
        .mv-face .face__pupil {
          animation-duration: 4s;
          animation-delay: 1.3s;
          animation-iteration-count: infinite;
        }

        .mv-face .face__eye-lid {
          animation-name: mvEyeLid;
        }

        .mv-face .face__mouth-left {
          animation-name: mvMouthLeft;
        }

        .mv-face .face__mouth-right {
          animation-name: mvMouthRight;
        }

        .mv-face .face__nose {
          animation-name: mvNose;
        }

        .mv-face .face__pupil {
          animation-name: mvPupil;
        }

        @keyframes mvEyeLid {
          0%,
          40%,
          45%,
          100% {
            transform: translateY(0);
          }

          42.5% {
            transform: translateY(17.5px);
          }
        }

        @keyframes mvEyes {
          from {
            transform: translateY(112.5px);
          }

          to {
            transform: translateY(15px);
          }
        }

        @keyframes mvPupil {
          0%,
          37.5%,
          40%,
          45%,
          87.5%,
          100% {
            stroke-dashoffset: 0;
            transform: translate(0, 0);
          }

          12.5%,
          25%,
          62.5%,
          75% {
            transform: translate(-35px, 0);
          }

          42.5% {
            stroke-dashoffset: 35;
            transform: translate(0, 17.5px);
          }
        }

        @keyframes mvMouthLeft {
          from,
          50% {
            stroke-dashoffset: -102;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes mvMouthRight {
          from,
          50% {
            stroke-dashoffset: 102;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes mvNose {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(0, 22.5px);
          }
        }

        /* =====================================================
           REDES SOCIAIS
        ===================================================== */

        .mv-socials {
          display: flex;

          flex-direction: column;

          align-items: flex-end;

          gap: 12px;
        }

        .mv-social-button {
          --social-color: #d8ad56;
          --social-rgb: 216, 173, 86;

          position: relative;

          width: 185px;
          height: 48px;

          padding: 0 17px;

          display: flex;
          align-items: center;

          gap: 12px;

          overflow: hidden;

          border:
            1px solid
            rgba(var(--social-rgb), 0.72);

          border-radius: 24px;

          background:
            rgba(0, 0, 0, 0.36);

          backdrop-filter: blur(10px);

          -webkit-backdrop-filter: blur(10px);

          color: var(--social-color);

          text-decoration: none;

          font-size: 13px;
          font-weight: 600;

          letter-spacing: 0.25px;

          cursor: pointer;

          isolation: isolate;

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.035),
            0 5px 15px rgba(0, 0, 0, 0.25);

          transition:
            color 0.35s ease,
            border-color 0.35s ease,
            transform 0.25s ease,
            box-shadow 0.35s ease;
        }

        .mv-social-button::before {
          content: "";

          position: absolute;

          z-index: -1;

          width: 230px;
          height: 230px;

          left: -250px;
          top: 50%;

          transform: translateY(-50%);

          border-radius: 50%;

          background:
            var(--social-color);

          transition:
            left 0.55s
            cubic-bezier(.16, 1, .3, 1);
        }

        .mv-social-button:hover::before {
          left: -20px;
        }

        .mv-social-button:hover {
          color: #090909;

          border-color:
            var(--social-color);

          transform:
            translateX(-4px);

          box-shadow:
            0 0 22px
            rgba(var(--social-rgb), 0.18);
        }

        .mv-social-button:active {
          transform:
            translateX(-4px)
            scale(0.97);
        }

        .mv-social-button svg {
          position: relative;

          z-index: 2;

          width: 19px;
          height: 19px;

          flex-shrink: 0;
        }

        .mv-social-button span {
          position: relative;

          z-index: 2;
        }

        /* Instagram */

        .mv-social-button.instagram {
          --social-color: #dfb45d;
          --social-rgb: 223, 180, 93;
        }

        /* WhatsApp
           Mesmo efeito, levemente diferente no dourado */

        .mv-social-button.whatsapp {
          --social-color: #c9963e;
          --social-rgb: 201, 150, 62;
        }

        /* =====================================================
           LINHA INFERIOR
        ===================================================== */

        .mv-footer-bottom-line {
          position: absolute;

          z-index: 8;

          bottom: 0;
          left: 50%;

          transform: translateX(-50%);

          width: 65%;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(220, 178, 90, 0.5),
              transparent
            );

          box-shadow:
            0 0 12px
            rgba(220, 178, 90, 0.13);
        }

        /* =====================================================
           RESPONSIVO
        ===================================================== */

        @media (max-width: 760px) {
          .mv-footer {
            height: auto;
            min-height: 420px;
            max-height: 500px;
          }

          .mv-footer-content {
            width: calc(100% - 30px);

            padding: 25px 0;

            grid-template-columns:
              1fr 125px;

            grid-template-areas:
              "face socials"
              "message message";

            gap: 15px 20px;
          }

          .mv-face-container {
            grid-area: face;

            height: 230px;
          }

          .mv-face {
            width: 92px;
          }

          .mv-socials {
            grid-area: socials;

            align-items: flex-end;
          }

          .mv-social-button {
            width: 145px;
            height: 45px;

            padding: 0 13px;

            font-size: 11px;
          }

          .mv-footer-message {
            grid-area: message;

            justify-content: center;

            text-align: center;
          }

          .mv-footer-message p {
            max-width: 330px;
          }
        }

        @media (max-width: 430px) {
          .mv-footer {
            min-height: 440px;
          }

          .mv-footer-content {
            grid-template-columns:
              105px 1fr;

            gap: 10px;
          }

          .mv-face {
            width: 78px;
          }

          .mv-social-button {
            width: 142px;
          }
        }

        /* acessibilidade */

        @media (prefers-reduced-motion: reduce) {
          .mv-footer-background::before,
          .mv-face-container::before,
          .mv-face *,
          .mv-social-button::before {
            animation: none !important;
          }
        }

      `}</style>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="mv-footer">

        {/* FUNDO */}

        <div
          className="mv-footer-background"
          aria-hidden="true"
        />

        <div className="mv-footer-content">

          {/* ================================================
              MENSAGEM
          ================================================= */}

          <div className="mv-footer-message">

            <p>
              Seu estilo começa nos detalhes.
              <br />
              <strong>Vista o que representa você.</strong>
            </p>

          </div>

          {/* ================================================
              ROSTO ANIMADO
          ================================================= */}

          <div
            className="mv-face-container"
            aria-hidden="true"
          >

            <svg
              className="mv-face"
              viewBox="0 0 320 380"
            >

              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="25"
              >

                <g
                  className="face__eyes"
                  transform="translate(0,112.5)"
                >

                  {/* OLHO ESQUERDO */}

                  <g transform="translate(15,0)">

                    <polyline
                      className="face__eye-lid"
                      points="37,0 0,120 75,120"
                    />

                    <polyline
                      className="face__pupil"
                      points="55,120 55,155"
                      strokeDasharray="35 35"
                    />

                  </g>

                  {/* OLHO DIREITO */}

                  <g transform="translate(230,0)">

                    <polyline
                      className="face__eye-lid"
                      points="37,0 0,120 75,120"
                    />

                    <polyline
                      className="face__pupil"
                      points="55,120 55,155"
                      strokeDasharray="35 35"
                    />

                  </g>

                </g>

                {/* NARIZ */}

                <rect
                  className="face__nose"
                  x="132.5"
                  y="112.5"
                  width="55"
                  height="155"
                  rx="4"
                  ry="4"
                />

                {/* BOCA */}

                <g
                  transform="translate(65,334)"
                  strokeDasharray="102 102"
                >

                  <path
                    className="face__mouth-left"
                    d="M 0 30 C 0 30 40 0 95 0"
                  />

                  <path
                    className="face__mouth-right"
                    d="M 95 0 C 150 0 190 30 190 30"
                  />

                </g>

              </g>

            </svg>

          </div>

          {/* ================================================
              REDES SOCIAIS
          ================================================= */}

          <div className="mv-socials">

            {/* INSTAGRAM */}

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mv-social-button instagram"
              aria-label="Abrir Instagram"
            >

              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0H8Zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045ZM12.271 2.77a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92ZM8.001 3.892a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217Zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334Z" />
              </svg>

              <span>
                Instagram
              </span>

            </a>

            {/* WHATSAPP */}

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mv-social-button whatsapp"
              aria-label="Abrir WhatsApp"
            >

              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.59 5.95L.06 24l6.29-1.65a11.9 11.9 0 0 0 5.71 1.45h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.23-6.16-3.46-8.41ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.88 9.88 0 0 1-1.52-5.27c0-5.46 4.44-9.9 9.91-9.9a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.9 7c-.01 5.45-4.45 9.89-9.91 9.89Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>

              <span>
                WhatsApp
              </span>

            </a>

          </div>

        </div>

        <div
          className="mv-footer-bottom-line"
        />

      </footer>
    </>
  );
}