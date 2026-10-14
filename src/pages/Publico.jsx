import SectionHeader from "../components/SectionHeader";

export default function Publico() {

  return (
    <section
      className="
        bg-dark
        px-5
        py-16
        text-paper
        md:px-8
        md:py-20
      "
    >

      <div className="
        mx-auto
        max-w-[1160px]
      ">

        <SectionHeader
          dark
          eyebrow="Para quem é"
          title="Estudantes universitários com deficiência visual"
        >
          Especialmente quem transita por diferentes
          áreas do campus, precisa se deslocar entre
          salas, laboratórios e bibliotecas, enfrenta
          ambientes novos ou modificados e quer
          depender menos de pedir ajuda para tarefas
          de orientação.
        </SectionHeader>

        <div className="
          grid
          gap-6
          lg:grid-cols-[1.1fr_.9fr]
        ">

          <article
            className="
              rounded-3xl
              border
              border-white/[.08]
              bg-darkSoft
              p-8
            "
          >

            <p className="
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-teal
            ">
              Persona inicial
            </p>

            <h3
              className="
                mt-3
                font-display
                text-3xl
                text-amber
              "
            >
              João
            </h3>

            <p className="
              mt-1
              text-paperSoft
            ">
              Estudante universitário
              com deficiência visual
            </p>

            <dl className="
              mt-8
              grid
              gap-5
            ">

              {[
                [
                  "Contexto",
                  "Conhece algumas áreas do campus, mas precisa acessar diferentes salas e espaços.",
                ],

                [
                  "Problema",
                  "Em áreas desconhecidas, precisa de informações sobre placas, portas, corredores e obstáculos.",
                ],

                [
                  "Necessidade",
                  "Obter informações ambientais relevantes sem interromper o deslocamento para procurar auxílio.",
                ],

                [
                  "Objetivo",
                  "Chegar aos locais do campus com maior independência.",
                ],

              ].map(([term, desc]) => (

                <div key={term}>

                  <dt className="
                    font-bold
                    text-paper
                  ">
                    {term}
                  </dt>

                  <dd
                    className="
                      mt-1
                      text-sm
                      leading-6
                      text-paperSoft
                    "
                  >
                    {desc}
                  </dd>

                </div>

              ))}

            </dl>

          </article>

          <article
            className="
              flex
              flex-col
              justify-center
              rounded-3xl
              border
              border-white/[.08]
              bg-darkSoft
              p-8
            "
          >

            <p className="
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-teal
            ">
              Job to Be Done
            </p>

            <blockquote
              className="
                mt-5
                font-display
                text-2xl
                leading-relaxed
                text-paper
              "
            >
              "Quando estou em uma área do
              campus que não conheço, quero
              compreender o que existe ao meu
              redor e receber informações
              relevantes sobre meu caminho,
              para conseguir decidir como
              prosseguir."
            </blockquote>

            <p
              className="
                mt-6
                font-semibold
                text-amber
              "
            >
              Mais informação para que você
              precise de menos ajuda.
            </p>

          </article>

        </div>

      </div>

    </section>
  );
}