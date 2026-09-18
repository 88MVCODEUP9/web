import React from "react";
import { useSiteConfig } from "../context/SiteConfigContext.jsx";
import { safeLink } from "../lib/catalog.js";
import "../styles/Footer.css";

export default function Footer() {
  const { config } = useSiteConfig();
  const socialLinks = config.social;

  return (
    <>
      

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

            <p>{config.footer.message.split("\n").map((line, index) => <React.Fragment key={index}>{index > 0 && <br />}{index > 0 ? <strong>{line}</strong> : line}</React.Fragment>)}</p>

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

            {safeLink(socialLinks.instagram) && (<a
              href={safeLink(socialLinks.instagram)}
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

            </a>)}

            {/* WHATSAPP */}

            {safeLink(socialLinks.whatsapp) && (<a
              href={safeLink(socialLinks.whatsapp)}
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

            </a>)}

          {Object.entries(socialLinks).filter(([name, url]) => !["instagram", "whatsapp"].includes(name) && safeLink(url)).map(([name, url]) => <a key={name} href={safeLink(url)} target="_blank" rel="noopener noreferrer" className="mv-social-button"><span>{name}</span></a>)}
          </div>
        </div>
        <div
          className="mv-footer-bottom-line"
        />

      </footer>
    </>
  );
}