import { Link } from "react-router-dom";

import Brand from "./Brand";

export default function Footer() {

  return (
    <footer
      className="
        border-t
        border-white/[.08]
        bg-dark
        px-5
        py-12
        md:px-8
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-[1160px]
          gap-6
          text-center
          md:grid-cols-3
          md:items-center
          md:text-left
        "
      >

        <Brand />

        <p className="
          text-sm
          italic
          text-paperSoft
        ">
          Informação visual
          transformada em autonomia.
        </p>

        <nav
          aria-label="Navegação do rodapé"
        >

          <ul
            className="
              flex
              flex-wrap
              justify-center
              gap-x-5
              gap-y-2
              text-sm
              text-paperSoft
              md:justify-end
            "
          >

            <li>
              <Link
                to="/solucao"
                className="hover:text-amber"
              >
                Solução
              </Link>
            </li>

            <li>
              <Link
                to="/publico"
                className="hover:text-amber"
              >
                Público
              </Link>
            </li>

            <li>
              <Link
                to="/equipe"
                className="hover:text-amber"
              >
                Equipe
              </Link>
            </li>

            <li>
              <Link
                to="/contato"
                className="hover:text-amber"
              >
                Contato
              </Link>
            </li>

          </ul>

        </nav>

        <p className="
          text-xs
          text-paperSoft/70
          md:col-span-3
        ">
          Projeto acadêmico — FIAP Challenge,
          em parceria com JOVI Smartphone.
        </p>

      </div>

    </footer>
  );
}