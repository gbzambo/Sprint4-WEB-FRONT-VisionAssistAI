import {
  Check,
  X,
} from "lucide-react";

import SectionHeader from "../components/SectionHeader";

const mvp = [
  "Reconhecimento contextual do ambiente",
  "Leitura de placas e sinalização (OCR)",
  "Detecção de obstáculos relevantes",
  "Consulta por voz",
  "Feedback de áudio curto e contextual",
];

const future = [
  "Localização precisa em tempo real",
  "Cálculo completo de rotas",
  "Navegação indoor passo a passo",
];

export default function Solution() {

  return (
    <section
      className="
        bg-[#ECEEF2]
        px-5
        py-16
        md:px-8
        md:py-20
      "
    >

      <div className="
        mx-auto
        max-w-[1160px]
      ">

        <SectionHeader
          eyebrow="A Challenge"
          title="O problema não é enxergar. É acessar a informação."
        >
          O Vision Assist transforma percepção
          visual em informações sonoras relevantes
          para apoiar a autonomia de estudantes
          com deficiência visual em ambientes
          universitários.
        </SectionHeader>

        <div className="
          grid
          gap-6
          md:grid-cols-3
        ">

          {[
            [
              "Perceber",
              "Obstáculos, portas, escadas, placas, salas e objetos relevantes.",
            ],

            [
              "Identificar",
              "OCR para leitura de números de salas, nomes e sinalizações.",
            ],

            [
              "Orientar",
              "Confirma destinos e responde solicitações sem narrar continuamente.",
            ],

          ].map(
            ([title, text], index) => (

              <article
                key={title}
                className="
                  rounded-2xl
                  bg-white
                  p-7
                "
              >

                <span className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-amberStrong
                ">
                  0{index + 1}
                </span>

                <h3
                  className="
                    mt-3
                    font-display
                    text-2xl
                    font-semibold
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-3
                    leading-7
                    text-[#4B5262]
                  "
                >
                  {text}
                </p>

              </article>

            )
          )}

        </div>

        <div className="
          mt-10
          grid
          gap-6
          md:grid-cols-2
        ">

          <article
            className="
              rounded-2xl
              bg-white
              p-7
            "
          >

            <h3
              className="
                font-display
                text-2xl
                font-semibold
              "
            >
              No MVP
            </h3>

            <ul className="
              mt-5
              space-y-4
            ">

              {mvp.map((item) => (

                <li
                  key={item}
                  className="
                    flex
                    gap-3
                    text-[#4B5262]
                  "
                >

                  <Check
                    className="
                      mt-1
                      shrink-0
                      text-teal
                    "
                    size={18}
                  />

                  {item}

                </li>

              ))}

            </ul>

          </article>

          <article
            className="
              rounded-2xl
              border
              border-dashed
              border-black/20
              p-7
            "
          >

            <h3
              className="
                font-display
                text-2xl
                font-semibold
              "
            >
              Fora do MVP
            </h3>

            <ul className="
              mt-5
              space-y-4
            ">

              {future.map((item) => (

                <li
                  key={item}
                  className="
                    flex
                    gap-3
                    text-[#4B5262]
                  "
                >

                  <X
                    className="
                      mt-1
                      shrink-0
                      text-[#8B8F99]
                    "
                    size={18}
                  />

                  {item}

                </li>

              ))}

            </ul>

            <p
              className="
                mt-6
                text-sm
                text-[#4B5262]
              "
            >
              Capacidades reservadas para a
              evolução futura do produto.
            </p>

          </article>

        </div>

      </div>

    </section>
  );
}