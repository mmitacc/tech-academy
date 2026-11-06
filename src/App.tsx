import { LoginPage } from "./pages/LoginPage";
import { CursosPage } from "./pages/CursosPage";
import { Navigate, Routes, Route } from "react-router";
import { RegistroPage } from "./pages/RegistroPage";
import { InicioPage } from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";
import { NoEncontradaPage } from "./components/NoEncontradaPage";
import { RutaProtegida } from "./components/RutaProtegida";
import { EstudiantesPage } from "./pages/EstudiantesPage";
import { LayoutApp } from "./components/Layout/LayoutApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inicio" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegistroPage />} />

      {/* Rutas con Layout Base */}
      <Route element={<LayoutApp />}>
        <Route path="/inicio" element={<InicioPage />} />
        <Route path="/perfil" element={<PerfilPage />} />

        {/* Rutas protegidas por Rol ADMIN */}
        <Route element={<RutaProtegida roles={["ADMIN"]} />}>
          <Route path="/estudiantes" element={<EstudiantesPage />} />
        </Route>

        {/* Rutas protegidas por Rol ESTUDIANTE */}
        <Route element={<RutaProtegida roles={["ESTUDIANTE"]} />}>
          <Route path="/cursos" element={<CursosPage />} />
        </Route>
      </Route>

      {/* 👈 CORREGIDO: Se cambia path="" por path="*" para capturar cualquier error 404 */}
      <Route path="*" element={<NoEncontradaPage />} />
    </Routes>
  );
}

export default App;
