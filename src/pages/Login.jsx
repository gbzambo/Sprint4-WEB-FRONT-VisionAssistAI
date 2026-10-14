import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Button from "../components/Button";

import useAuth from "../hooks/useAuth";

export default function Login() {

  const {
    login,
    isAuthenticated,
  } = useAuth();

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const destination =
    location.state?.from ||
    "/dashboard";

  useEffect(() => {

    if (isAuthenticated) {

      navigate(
        "/dashboard",
        {
          replace: true,
        }
      );

    }

  }, [
    isAuthenticated,
    navigate,
  ]);

  function handleSubmit(event) {

    event.preventDefault();

    const result =
      login(email, password);

    if (!result.success) {

      setError(
        result.message
      );

      return;
    }

    navigate(
      destination,
      {
        replace: true,
      }
    );
  }

  return (
    <section
      className="
        bg-dark
        px-5
        py-20
        text-paper
        md:px-8
      "
    >

      <div
        className="
          mx-auto
          max-w-md
        "
      >

        <div
          className="
            rounded-3xl
            border
            border-white/[.08]
            bg-darkSoft
            p-8
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
            Área privada
          </p>

          <h1
            className="
              mt-3
              font-display
              text-4xl
            "
          >
            Entrar no Vision Assist
          </h1>

          <p
            className="
              mt-3
              text-paperSoft
            "
          >
            Use a conta demonstrativa para
            acessar o dashboard.
          </p>

          <form
            onSubmit={handleSubmit}
            className="
              mt-8
              space-y-5
            "
          >

            <div>

              <label
                htmlFor="login-email"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                "
              >
                E-mail
              </label>

              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(
                    event.target.value
                  )
                }
                placeholder="aluno@fiap.com"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-dark
                  px-4
                  py-3
                  text-paper
                  outline-none
                  focus:border-amber
                "
              />

            </div>

            <div>

              <label
                htmlFor="login-password"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                "
              >
                Senha
              </label>

              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(
                    event.target.value
                  )
                }
                placeholder="fiap123"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-dark
                  px-4
                  py-3
                  text-paper
                  outline-none
                  focus:border-amber
                "
              />

            </div>

            {error && (

              <p
                className="
                  rounded-xl
                  bg-red-400/10
                  px-4
                  py-3
                  text-sm
                  text-red-200
                "
              >
                {error}
              </p>

            )}

            <Button
              type="submit"
              className="w-full"
            >
              Entrar
            </Button>

          </form>

          <Link
            to="/"
            className="
              mt-6
              block
              text-center
              text-sm
              text-paperSoft
              hover:text-amber
            "
          >
            Voltar para a página inicial
          </Link>

        </div>

      </div>

    </section>
  );
}