import SectionHeader from "../components/SectionHeader";
import TeamCard from "../components/TeamCard";

const team = [

  [
    "JG",
    "Juliano Galhardo",
    "Desenvolvimento Full Stack",
    "Construção da solução e integração das frentes técnicas do projeto.",
  ],

  [
    "HS",
    "Hiago Silva de Oliveira",
    "Desenvolvimento Full Stack",
    "Construção da solução e integração das frentes técnicas do projeto.",
  ],

  [
    "OM",
    "Octávio Mello Covre de Souza",
    "UX/UI & Pesquisa",
    "Validação e experiência do usuário.",
  ],

  [
    "GT",
    "Gabriel Torres Zambo",
    "UX/UI & Pesquisa",
    "Validação e experiência do usuário.",
  ],

];

export default function Team() {

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
          eyebrow="Quem construiu"
          title="Nossa equipe"
        >
          Grupo responsável pela concepção e
          desenvolvimento do Vision Assist AI
          para a Challenge FIAP.
        </SectionHeader>

        <ul
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {team.map((member) => (

            <TeamCard
              key={member[1]}
              initials={member[0]}
              name={member[1]}
              role={member[2]}
              bio={member[3]}
            />

          ))}

        </ul>

      </div>

    </section>
  );
}