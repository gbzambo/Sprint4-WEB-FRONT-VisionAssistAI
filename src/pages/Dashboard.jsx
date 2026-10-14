import {
  useMemo,
} from "react";

import {
  LogOut,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import SectionHeader from "../components/SectionHeader";

import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";

export default function Dashboard() {

  const {
    user,
    logout,
  } = useAuth();

  const {
    data,
    loading,
    error,
  } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  const relevantPosts =
    useMemo(() => {

      if (!data) {
        return [];
      }

      return data.map((post) => ({

        ...post,

        title:
          post.title.charAt(0).toUpperCase() +
          post.title.slice(1),

      }));

    }, [data]);

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
          max-w-[1160px]
        "
      >

        {/* USUÁRIO */}

        <div
          className="
            mb-10
            flex
            flex-col
            justify-between
            gap-5
            rounded-3xl
            bg-dark
            p-7
            text-paper
            md:flex-row
            md:items-center
          "
        >

          <div>

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-teal
              "
            >
              Rota privada
            </p>

            <h1
              className="
                mt-2
                font-display
                text-3xl
                md:text-4xl
              "
            >
              Olá, {user.name}.
            </h1>

            <p
              className="
                mt-2
                text-paperSoft
              "
            >
              {user.email}
            </p>

          </div>

          <button
            onClick={logout}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-white/20
              px-5
              py-3
              font-semibold
              hover:border-amber
              hover:text-amber
            "
          >

            <LogOut size={17} />

            Sair

          </button>

        </div>

        <SectionHeader
          eyebrow="Integração com API"
          title="Dados externos dentro da área autenticada"
        >
          Esta seção consulta uma API pública
          de terceiros para demonstrar o consumo
          de dados com um hook customizado.
        </SectionHeader>

        {/* API */}

        <div
          className="
            rounded-3xl
            bg-white
            p-7
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <ShieldCheck
              className="text-teal"
            />

            <h2
              className="
                font-display
                text-2xl
                font-semibold
              "
            >
              API pública — JSONPlaceholder
            </h2>

          </div>

          {loading && (

            <div
              className="
                mt-7
                flex
                items-center
                gap-3
                text-[#4B5262]
              "
            >

              <RefreshCw
                className="animate-spin"
                size={18}
              />

              Consultando API...

            </div>

          )}

          {error && (

            <p
              className="
                mt-7
                rounded-xl
                bg-red-50
                px-4
                py-3
                text-sm
                text-red-700
              "
            >
              {error}
            </p>

          )}

          {!loading &&
            !error && (

              <div
                className="
                  mt-7
                  grid
                  gap-4
                  md:grid-cols-2
                  lg:grid-cols-3
                "
              >

                {relevantPosts.map(
                  (post) => (

                    <article
                      key={post.id}
                      className="
                        rounded-2xl
                        border
                        border-black/[.08]
                        p-5
                      "
                    >

                      <span
                        className="
                          text-xs
                          font-bold
                          text-amberStrong
                        "
                      >
                        POST #{post.id}
                      </span>

                      <h3
                        className="
                          mt-2
                          font-semibold
                          leading-6
                        "
                      >
                        {post.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-[#4B5262]
                        "
                      >
                        {post.body}
                      </p>

                    </article>

                  )
                )}

              </div>

            )}

        </div>

      </div>

    </section>
  );
}