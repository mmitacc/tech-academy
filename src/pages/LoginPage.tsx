import { GraduationCap, Lock, User, Eye, EyeOff } from "lucide-react";
import { Navigate, useNavigate, Link } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";
import { authService } from "../services/auth";
import { mensajeError } from "../lib/errores";

export function LoginPage() {
  const navigate = useNavigate();
  const token = useAuthStore((s) => s.token);
  const iniciarSesion = useAuthStore((s) => s.iniciarSesion);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  if (token) {
    return <Navigate to="/inicio" replace />;
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setEnviando(true);

    try {
      const sesion = await authService.login({ username, password });
      iniciarSesion(sesion.token, sesion.usuario);
      navigate("/inicio", { replace: true });
    } catch (err) {
      setError(mensajeError(err, "Datos incorrectos"));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2 bg-stone-50">
      {/* Lado izquierdo: Bienvenida (Oculto en móviles) */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-(--color-marca-900) p-12 text-white lg:flex">
        {/* Luces/Efectos de Fondo usando los verdes de marca */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-(--color-marca-600)/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-(--color-marca-500)/15 blur-3xl" />

        {/* Logo / Nombre de la Academia */}
        <div className="relative flex items-center gap-2.5">
          <div className="rounded-xl bg-(--color-marca-500) p-2 shadow-xs">
            <GraduationCap size={26} />
          </div>
          <span className="text-lg font-bold tracking-tight">Tech-Academy</span>
        </div>

        {/* Mensaje de Valor */}
        <div className="relative max-w-md space-y-4">
          <h2 className="text-4xl font-bold tracking-tight leading-[1.15]">
            Aprende, inscríbete y sigue tu progreso en un solo lugar.
          </h2>
          <p className="text-sm text-(--color-marca-100) opacity-90 leading-relaxed">
            Consulta los cursos disponibles, revisa tus calificaciones y
            gestiona tus inscripciones en tiempo real.
          </p>
        </div>

        {/* Estadísticas Rápidas */}
        <div className="relative flex gap-8 text-sm">
          <div>
            <p className="text-3xl font-black tracking-tight text-white">+40</p>
            <p className="text-xs text-(--color-marca-200) font-medium uppercase tracking-wider mt-0.5">
              Cursos
            </p>
          </div>
          <div>
            <p className="text-3xl font-black tracking-tight text-white">
              +1.200
            </p>
            <p className="text-xs text-(--color-marca-200) font-medium uppercase tracking-wider mt-0.5">
              Estudiantes
            </p>
          </div>
          <div>
            <p className="text-3xl font-black tracking-tight text-white">35</p>
            <p className="text-xs text-(--color-marca-200) font-medium uppercase tracking-wider mt-0.5">
              Docentes
            </p>
          </div>
        </div>
      </div>

      {/* Lado derecho: Formulario */}
      <div className="flex items-center justify-center p-6 sm:p-12 bg-(--color-marca-50)/10">
        <div className="w-full max-w-sm">
          {/* Cabecera Responsiva para Celulares */}
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <div className="rounded-xl bg-(--color-marca-600) p-2 text-white shadow-xs">
              <GraduationCap size={22} />
            </div>
            <span className="font-bold text-stone-900 tracking-tight">
              Tech-Academy
            </span>
          </div>

          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
            Iniciar sesión
          </h1>
          <p className="mt-1 text-sm text-stone-500">
            Ingresa con tus credenciales de la academia.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {/* Input Nativo: Usuario */}
            <div className="space-y-1.5">
              <label
                htmlFor="username"
                className="text-xs font-semibold text-stone-700 uppercase tracking-wider"
              >
                Usuario
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-stone-400"
                />
                <input
                  id="username"
                  type="text"
                  required
                  placeholder="Ingresa el nombre de usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2.5 pr-4 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Input Nativo: Contraseña */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="text-xs font-semibold text-stone-700 uppercase tracking-wider"
              >
                Contraseña
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-stone-400"
                />
                <input
                  id="password"
                  type={mostrarPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2.5 pr-11 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                  className="absolute top-1/2 right-3.5 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
                  title={
                    mostrarPassword
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }
                >
                  {mostrarPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Alerta de error integrada */}
            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-600">
                {error}
              </div>
            )}

            {/* Preferencias / Enlace de olvido */}
            <div className="flex items-center justify-between text-xs font-medium pt-1">
              <label className="flex items-center gap-2 text-stone-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded-md border-stone-300 accent-(--color-marca-600) cursor-pointer"
                />
                <span>Recordarme</span>
              </label>
              <a
                href="#"
                className="text-(--color-marca-600) hover:text-(--color-marca-700) transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón Submit HTML Nativo */}
            <button
              type="submit"
              disabled={enviando}
              className="w-full mt-2 inline-flex items-center justify-center bg-(--color-marca-500) hover:bg-(--color-marca-600) disabled:bg-stone-300 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              {enviando ? "Ingresando..." : "Ingresar"}
            </button>
          </form>

          {/* Enlace de Registro Alterno */}
          <p className="mt-8 text-center text-sm text-stone-500">
            ¿No tienes cuenta?{" "}
            <Link
              to="/registro"
              className="font-semibold text-(--color-marca-600) hover:text-(--color-marca-700) transition-colors"
            >
              Regístrate como estudiante
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
