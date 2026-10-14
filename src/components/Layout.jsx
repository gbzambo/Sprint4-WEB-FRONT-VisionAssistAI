import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {

  return (
    <div className="min-h-screen bg-[#ECEEF2]">

      <Navbar />

      <main id="conteudo-principal">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}