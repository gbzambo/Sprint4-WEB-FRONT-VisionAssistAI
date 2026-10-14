import {
  ArrowRight,
  Mic,
  ScanEye,
  Volume2,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";

const features = [

  {
    index: "01 · Perceber",

    title:
      '"O que existe ao meu redor?"',

    description:
      "Identifica elementos relevantes para o deslocamento: obstáculos, portas, escadas, placas, salas e objetos no caminho.",
  },

  {
    index: "02 · Identificar",

    title:
      '"O que estou vendo?"',

    description:
      "Usa OCR para ler números de salas, nomes de ambientes, sinalizações e textos relevantes do campus.",
  },

  {
    index: "03 · Orientar",

    title:
      '"Isso é relevante agora?"',

    description:
      "Confirma destinos, alerta sobre obstáculos e responde a solicitações do usuário sem narrar tudo o tempo todo.",
  },

];

export default function Home() {

  return (
    <>

      {/* HERO */}

      <section
        className="
          overflow-hidden
          bg-[radial-gradient(120%_140%_at_85%_-10%,#22293A_0%,#10141C_55%)]
          px-5
          py-14
          text-paper
          md:px-8
          md:py-20
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1160px]
            items-center
            gap-12
            lg:grid-cols-[1.1fr_.9fr]
          "
        >

          <div>

            <p className="
              mb-4
              text-xs
              font-bold
              uppercase
              tracking-[.14em]
              text-amber
            ">
              FIAP Challenge · JOVI Smartphone
            </p>

            <h1
              className="
                max-w-3xl
                font-display
                text-4xl
                font-semibold
                leading-tight
                md:text-6xl
              "
            >
              Informação visual
              transformada em{" "}

              <em className="text-amber">
                autonomia
              </em>.
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-paperSoft
              "
            >
              O Vision Assist AI transforma
              a câmera do smartphone em um
              assistente de percepção contextual.
              Ele identifica o que é relevante no
              ambiente universitário e comunica
              por áudio, curto e no momento certo.
            </p>

            <div className="
              mt-7
              flex
              flex-wrap
              gap-4
            ">

              <Button to="/solucao">

                Conhecer a solução

                <ArrowRight
                  size={18}
                  className="ml-2"
                />

              </Button>

              <Button
                to="/experiencia"
                variant="ghost"
              >
                Ver a experiência
              </Button>

            </div>

            <blockquote
              className="
                mt-8
                max-w-xl
                border-l-2
                border-amber
                pl-4
                italic
                text-paperSoft
              "
            >
              "A IA não decide pelo usuário.
              Ela fornece as informações para
              que ele possa decidir por si mesmo."
            </blockquote>

          </div>

          {/* CELULAR */}

          <div className="
            relative
            flex
            justify-center
          ">

            <div
              className="
                relative
                z-10
                flex
                aspect-[9/18]
                w-[min(280px,78vw)]
                flex-col
                rounded-[34px]
                border
                border-white/10
                bg-darkSoft
                p-5
                shadow-phone
              "
            >

              <div
                className="
                  mx-auto
                  mb-7
                  h-1.5
                  w-12
                  rounded-full
                  bg-white/10
                "
              />

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  text-center
                "
              >

                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-teal
                    shadow-[0_0_0_6px_rgba(79,209,197,.15)]
                  "
                />

                <p className="
                  text-xs
                  text-paperSoft
                ">
                  Visualizando e detectando
                  o ambiente…
                </p>

                <div className="
                  flex
                  h-11
                  items-end
                  gap-1
                ">

                  {[30, 70, 45, 90, 55, 80, 35, 60].map(
                    (height, index) => (

                      <span
                        key={index}
                        className="
                          eq-bar
                          w-1
                          rounded
                          bg-amber
                        "
                        style={{
                          height: `${height}%`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                      />

                    )
                  )}

                </div>

                <p className="
                  font-display
                  text-lg
                  text-amber
                ">
                  "Porta à sua direita."
                </p>

              </div>

            </div>

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[340px]
                w-[340px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-amber/25
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[440px]
                w-[440px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-teal/15
              "
            />

          </div>

        </div>

      </section>

      {/* EQUALIZER */}

      <div
        className="
          flex
          h-11
          items-end
          justify-center
          gap-1
          bg-dark
          pb-3
        "
      >

        {Array.from({ length: 20 }).map(
          (_, i) => (

            <span
              key={i}
              className="
                eq-bar
                w-1
                rounded
                bg-amber/60
              "
              style={{
                height:
                  `${10 + ((i * 7) % 16)}px`,
                animationDelay:
                  `${i * 0.06}s`,
              }}
            />

          )
        )}

      </div>

      {/* PROBLEMA */}

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

          <div className="
            mb-12
            max-w-3xl
          ">

            <p className="
              mb-3
              text-xs
              font-bold
              uppercase
              tracking-[.14em]
              text-amberStrong
            ">
              A Challenge
            </p>

            <h2
              className="
                font-display
                text-3xl
                font-semibold
                leading-tight
                md:text-4xl
              "
            >
              O problema não é enxergar.
              É acessar a informação.
            </h2>

            <p
              className="
                mt-5
                text-base
                leading-7
                text-[#4B5262]
              "
            >
              Estudantes com deficiência visual
              enfrentam dificuldades para se
              orientar em ambientes universitários
              desconhecidos porque precisam acessar
              informações que uma pessoa vidente
              obtém apenas olhando.
            </p>

          </div>

          {/* FLUXO */}

          <div className="
            mb-12
            flex
            flex-wrap
            items-center
            gap-2
            text-sm
            font-semibold
          ">

            {[
              "Ambiente",
              "Câmera",
              "IA interpreta",
              "Seleciona o relevante",
              "Áudio contextual",
            ].map((item, i) => (

              <span
                key={item}
                className="
                  inline-flex
                  items-center
                  gap-2
                "
              >

                <span
                  className="
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    px-4
                    py-2
                  "
                >
                  {item}
                </span>

                {i < 4 && (
                  <span className="text-amberStrong">
                    →
                  </span>
                )}

              </span>

            ))}

            <span
              className="
                rounded-full
                bg-amber
                px-4
                py-2
                text-[#191204]
              "
            >
              Usuário decide
            </span>

          </div>

          {/* CARDS */}

          <div className="
            grid
            gap-6
            md:grid-cols-3
          ">

            {features.map((feature) => (

              <FeatureCard
                key={feature.index}
                {...feature}
              />

            ))}

          </div>

          {/* MVP */}

          <div className="
            mt-10
            grid
            gap-6
            md:grid-cols-2
          ">

            <div className="
              rounded-2xl
              bg-white
              p-7
            ">

              <h3 className="
                font-display
                text-xl
                font-semibold
              ">
                No MVP
              </h3>

              <ul className="
                mt-4
                space-y-3
                text-[#4B5262]
              ">

                {[
                  "Reconhecimento contextual do ambiente",
                  "Leitura de placas e sinalização (OCR)",
                  "Detecção de obstáculos relevantes",
                  "Consulta por voz",
                  "Feedback de áudio curto e contextual",
                ].map((item) => (

                  <li
                    key={item}
                    className="
                      flex
                      gap-3
                    "
                  >

                    <span
                      className="
                        mt-2
                        h-2
                        w-2
                        shrink-0
                        rounded-full
                        bg-teal
                      "
                    />

                    {item}

                  </li>

                ))}

              </ul>

            </div>

            <div className="
              rounded-2xl
              border
              border-dashed
              border-black/20
              p-7
            ">

              <h3 className="
                font-display
                text-xl
                font-semibold
              ">
                Evolução futura
              </h3>

              <ul className="
                mt-4
                space-y-3
                text-[#4B5262]
              ">

                {[
                  "Localização precisa em tempo real",
                  "Cálculo completo de rotas",
                  "Navegação indoor passo a passo",
                ].map((item) => (

                  <li
                    key={item}
                    className="
                      flex
                      gap-3
                    "
                  >

                    <span
                      className="
                        mt-2
                        h-2
                        w-2
                        shrink-0
                        rounded-full
                        border
                        border-[#B9BFCC]
                      "
                    />

                    {item}

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        className="
          bg-dark
          px-5
          py-16
          md:px-8
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1160px]
            gap-8
            md:grid-cols-3
          "
        >

          {[
            [
              ScanEye,
              "Percepção",
              "A câmera identifica referências relevantes do ambiente.",
            ],

            [
              Mic,
              "Consulta",
              "O usuário pode perguntar o que precisa saber.",
            ],

            [
              Volume2,
              "Áudio",
              "A resposta chega de forma curta e contextual.",
            ],

          ].map(
            ([Icon, title, text]) => (

              <div
                key={title}
                className="
                  rounded-2xl
                  border
                  border-white/[.08]
                  bg-darkSoft
                  p-7
                "
              >

                <Icon
                  className="text-amber"
                  size={28}
                />

                <h3
                  className="
                    mt-5
                    font-display
                    text-2xl
                    text-paper
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-2
                    leading-7
                    text-paperSoft
                  "
                >
                  {text}
                </p>

              </div>

            )
          )}

        </div>

        <div
          className="
            mx-auto
            mt-10
            max-w-[1160px]
            text-center
          "
        >

          <Link
            to="/dashboard"
            className="
              text-sm
              font-semibold
              text-amber
              hover:underline
            "
          >
            Ver demonstração da área privada →
          </Link>

        </div>

      </section>

    </>
  );
}