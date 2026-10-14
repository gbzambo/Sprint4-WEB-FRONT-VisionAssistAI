import { useState } from "react";

import {
  Link,
  NavLink,
} from "react-router-dom";

import {
  Menu,
  X,
  LogIn,
  LayoutDashboard,
} from "lucide-react";

import Brand from "./Brand";

import useAuth from "../hooks/useAuth";

const links = [
  {
    label: "A Solução",
    to: "/solucao",
  },

  {
    label: "Público-Alvo",
    to: "/publico",
  },

  {
    label: "Experiência",
    to: "/experiencia",
  },

  {
    label: "Equipe",
    to: "/equipe",
  },

  {
    label: "Contato",
    to: "/contato",
  },
];

export default function Navbar() {

  const [open, setOpen] =
    useState(false);

  const {
    isAuthenticated,
  } = useAuth();

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/[.08]
        bg-dark/90
        backdrop-blur
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-[1160px]
          items-center
          justify-between
          gap-6
          px-5
          py-4
          md:px-8
        "
      >

        <Brand />

        {/* Desktop */}

        <nav
          className="hidden lg:block"
          aria-label="Navegação principal"
        >

          <ul className="
            flex
            items-center
            gap-7
          ">

            {links.map((link) => (

              <li key={link.to}>

                <NavLink
                  to={link.to}
                  className={({
                    isActive,
                  }) =>
                    `
                    text-sm
                    font-semibold
                    transition

                    ${
                      isActive
                        ? "text-amber"
                        : "text-paperSoft hover:text-amber"
                    }
                    `
                  }
                >
                  {link.label}
                </NavLink>

              </li>

            ))}

            <li>

              <NavLink
                to={
                  isAuthenticated
                    ? "/dashboard"
                    : "/login"
                }
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-amber
                "
              >

                {isAuthenticated ? (
                  <LayoutDashboard size={16} />
                ) : (
                  <LogIn size={16} />
                )}

                {isAuthenticated
                  ? "Painel"
                  : "Entrar"}

              </NavLink>

            </li>

          </ul>

        </nav>

        {/* Mobile */}

        <button
          type="button"
          onClick={() =>
            setOpen((value) => !value)
          }
          className="
            rounded-lg
            border
            border-white/20
            p-2
            text-paper
            lg:hidden
          "
          aria-expanded={open}
          aria-label={
            open
              ? "Fechar menu"
              : "Abrir menu"
          }
        >

          {open ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}

        </button>

      </div>

      {open && (

        <nav
          className="
            border-t
            border-white/[.08]
            px-5
            pb-5
            lg:hidden
          "
          aria-label="Menu mobile"
        >

          <ul className="mx-auto max-w-[1160px]">

            {links.map((link) => (

              <li key={link.to}>

                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className="
                    block
                    border-b
                    border-white/[.08]
                    py-3
                    font-semibold
                    text-paperSoft
                    hover:text-amber
                  "
                >
                  {link.label}
                </Link>

              </li>

            ))}

            <li>

              <Link
                to={
                  isAuthenticated
                    ? "/dashboard"
                    : "/login"
                }
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  gap-2
                  py-3
                  font-semibold
                  text-amber
                "
              >

                {isAuthenticated ? (
                  <LayoutDashboard size={17} />
                ) : (
                  <LogIn size={17} />
                )}

                {isAuthenticated
                  ? "Painel privado"
                  : "Entrar"}

              </Link>

            </li>

          </ul>

        </nav>

      )}

    </header>
  );
}