import SectionHeader from "../components/SectionHeader";

const experiences = [

  [
    "Modo automático",
    '"Bloco de Laboratórios identificado."',
    "A câmera analisa o ambiente e localiza uma referência conhecida do campus.",
  ],

  [
    "Alerta de obstáculo",
    '"Obstáculo à frente."',
    "O sistema evita apresentar interpretações com baixa confiança como certezas.",
  ],

  [
    "Leitura de sinalização",
    '"Laboratório de Sistemas — segundo andar."',
    "O estudante aponta a câmera para uma placa e recebe a leitura via OCR.",
  ],

  [
    "Modo consulta",
    '"O que tem na minha frente?"',
    "O estudante pergunta diretamente ao sistema quando precisar.",
  ],

  [
    "Confirmação de destino",
    '"Sala 204 — Laboratório de Informática."',
    "A câmera identifica o destino final e confirma a chegada.",
  ],

];

export default function Experience() {

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
          eyebrow="Na prática"
          title="A experiência, momento a momento"
        >
          Sem telas para olhar — o Vision Assist
          responde por áudio. Estes são exemplos
          de interações durante o deslocamento
          de um estudante até um laboratório
          desconhecido.
        </SectionHeader>

        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {experiences.map(
            ([tag, audio, desc]) => (

              <article
                key={tag}
                className="
                  rounded-2xl
                  border-l-4
                  border-amber
                  bg-white
                  p-6
                "
              >

                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-widest
                    text-amberStrong
                  "
                >
                  {tag}
                </p>

                <p
                  className="
                    mt-3
                    font-display
                    text-xl
                  "
                >
                  {audio}
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-[#4B5262]
                  "
                >
                  {desc}
                </p>

              </article>

            )
          )}

          <article
            className="
              rounded-2xl
              border-l-4
              border-teal
              bg-dark
              p-6
              text-paper
            "
          >

            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-widest
                text-teal
              "
            >
              Princípio de design
            </p>

            <p
              className="
                mt-3
                font-display
                text-2xl
              "
            >
              Menos informação ≠ menos
              inteligência.
            </p>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-paperSoft
              "
            >
              Informação certa, no momento
              certo. O Vision Assist não narra
              continuamente o ambiente.
            </p>

          </article>

        </div>

      </div>

    </section>
  );
}