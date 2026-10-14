import { Link } from "react-router-dom";

export default function NotFound() {

  return (
    <section
      className="
        bg-dark
        px-5
        py-24
        text-center
        text-paper
      "
    >

      <p
        className="
          text-xs
          font-bold
          uppercase
          tracking-widest
          text-amber
        "
      >
        404
      </p>

      <h1
        className="
          mt-3
          font-display
          text-5xl
        "
      >
        Página não encontrada
      </h1>

      <p
        className="
          mx-auto
          mt-4
          max-w-lg
          text-paperSoft
        "
      >
        O endereço acessado não existe
        nesta versão do Vision Assist.
      </p>

      <Link
        to="/"
        className="
          mt-8
          inline-block
          rounded-full
          bg-amber
          px-6
          py-3
          font-semibold
          text-[#191204]
        "
      >
        Voltar ao início
      </Link>

    </section>
  );
}