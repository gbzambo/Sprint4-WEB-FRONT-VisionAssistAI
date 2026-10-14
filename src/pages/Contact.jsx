
import { useState } from "react";

import {
  CodeXml,
  Mail,
  Send,
} from "lucide-react";

import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSent(true);
    event.currentTarget.reset();
  }

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
      <div
        className="
          mx-auto
          grid
          max-w-[1160px]
          gap-10
          lg:grid-cols-2
        "
      >
        <div>
          <SectionHeader
            eyebrow="Fale com a gente"
            title="Vamos conversar sobre o Vision Assist"
          >
            Dúvidas, sugestões ou interesse em
            colaborar com a validação do produto?
            Envie uma mensagem ou encontre a
            equipe nos canais abaixo.
          </SectionHeader>

          <div className="space-y-5">
            <a
              href="mailto:grupobughunters@fiap.com"
              className="
                flex
                items-center
                gap-3
                font-semibold
                text-amberStrong
                hover:underline
              "
            >
              <Mail size={19} />
              grupobughunters@fiap.com
            </a>

            <a
              href="https://github.com/JulianoGalhardo9"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-3
                font-semibold
                text-amberStrong
                hover:underline
              "
            >
              <CodeXml size={19} />
              github.com/JulianoGalhardo9
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
            grid
            gap-5
            rounded-3xl
            border
            border-black/[.08]
            bg-white
            p-7
            shadow-sm
          "
        >
          <div>
            <label
              htmlFor="nome"
              className="mb-2 block text-sm font-semibold"
            >
              Nome
            </label>

            <input
              id="nome"
              name="nome"
              type="text"
              required
              className="
                w-full
                rounded-xl
                border
                border-black/15
                bg-[#ECEEF2]
                px-4
                py-3
                outline-none
                focus:border-amber
              "
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold"
            >
              E-mail
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="
                w-full
                rounded-xl
                border
                border-black/15
                bg-[#ECEEF2]
                px-4
                py-3
                outline-none
                focus:border-amber
              "
            />
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="mb-2 block text-sm font-semibold"
            >
              Mensagem
            </label>

            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              required
              className="
                w-full
                resize-y
                rounded-xl
                border
                border-black/15
                bg-[#ECEEF2]
                px-4
                py-3
                outline-none
                focus:border-amber
              "
            />
          </div>

          <Button type="submit">
            <Send size={17} className="mr-2" />
            Enviar mensagem
          </Button>

          {sent && (
            <p
              role="status"
              className="
                rounded-xl
                bg-teal/10
                px-4
                py-3
                text-sm
                font-semibold
                text-[#236E67]
              "
            >
              Mensagem enviada!
              Formulário demonstrativo —
              nenhum backend foi conectado.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}