
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Solution from "./pages/Solution";
import Publico from "./pages/Publico";
import Experience from "./pages/Experience";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />

          <Route
            path="/solucao"
            element={<Solution />}
          />

          <Route
            path="/publico"
            element={<Publico />}
          />

          <Route
            path="/experiencia"
            element={<Experience />}
          />

          <Route
            path="/equipe"
            element={<Team />}
          />

          <Route
            path="/contato"
            element={<Contact />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          {/* Rota privada */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* Página não encontrada */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}