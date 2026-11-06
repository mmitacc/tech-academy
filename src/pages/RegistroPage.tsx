import { GraduationCap, Lock, Mail, User } from "lucide-react";
import { authService } from "../services/auth";
import { useAuthStore } from "../store/useAuthStore";
import { mensajeError } from "../lib/errores";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

export function RegistroPage() {
  const navigate = useNavigate();
  const iniciarSesion = useAuthStore((s) => s.iniciarSesion);

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    username: "",
    email: "",
    password: "",
    confirmar: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (formulario.password !== formulario.confirmar) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setEnviando(true);

    try {
      const sesion = await authService.registrar({
        nombre: formulario.nombre,
        apellido: formulario.apellido,
        username: formulario.username,
        email: formulario.email || undefined,
        password: formulario.password,
      });
      iniciarSesion(sesion.token, sesion.usuario);
      navigate("/inicio", { replace: true });
    } catch (err) {
      setError(mensajeError(err, "No se pudo realizar el registro"));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-(--color-marca-50) to-stone-100 p-6">
      <div className="w-full max-w-md">
        {/* Encabezado e Icono */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="rounded-2xl bg-(--color-marca-600) p-3 text-white shadow-xs">
            <GraduationCap size={28} />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-stone-900 tracking-tight">
            Crea tu cuenta
          </h1>
          <p className="mt-1 text-sm text-stone-500">
            El registro crea una cuenta de estudiante.
          </p>
        </div>

        {/* Tarjeta de Formulario Nativa */}
        <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl p-6 sm:p-8 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div className="space-y-1.5">
              <label
                htmlFor="nombre"
                className="text-xs font-semibold text-stone-700 uppercase tracking-wider"
              >
                Nombre
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-stone-400"
                />
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Ingresa tu nombre"
                  value={formulario.nombre}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2.5 pr-4 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Apellido */}
            <div className="space-y-1.5">
              <label
                htmlFor="apellido"
                className="text-xs font-semibold text-stone-700 uppercase tracking-wider"
              >
                Apellido
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-stone-400"
                />
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  required
                  placeholder="Ingresa tu apellido"
                  value={formulario.apellido}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2.5 pr-4 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold text-stone-700 uppercase tracking-wider"
              >
                Correo electrónico
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-stone-400"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu.nombre@academia.com"
                  value={formulario.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2.5 pr-4 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Nombre de Usuario */}
            <div className="space-y-1.5">
              <label
                htmlFor="username"
                className="text-xs font-semibold text-stone-700 uppercase tracking-wider"
              >
                Nombre de Usuario
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-stone-400"
                />
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  placeholder="Ingresa tu nombre de usuario"
                  value={formulario.username}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2.5 pr-4 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
                />
              </div>
              <p className="text-[11px] text-stone-400 pl-1">
                Mínimo 3 caracteres.
              </p>
            </div>

            {/* Contraseña */}
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
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formulario.password}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2.5 pr-4 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
                />
              </div>
              <p className="text-[11px] text-stone-400 pl-1">
                Mínimo 8 caracteres.
              </p>
            </div>

            {/* Confirmar Contraseña */}
            <div className="space-y-1.5">
              <label
                htmlFor="confirmar"
                className="text-xs font-semibold text-stone-700 uppercase tracking-wider"
              >
                Repite la contraseña
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-stone-400"
                />
                <input
                  id="confirmar"
                  name="confirmar"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formulario.confirmar}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2.5 pr-4 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Bloque de Error Nivel Formulario */}
            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-600">
                {error}
              </div>
            )}

            {/* Botón de Envíos Nativo */}
            <button
              type="submit"
              disabled={enviando}
              className="w-full mt-2 inline-flex items-center justify-center bg-(--color-marca-500) hover:bg-(--color-marca-600) disabled:bg-stone-300 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              {enviando ? "Creando cuenta..." : "Crear Cuenta"}
            </button>
          </form>
        </div>

        {/* Footer Enlace */}
        <p className="mt-6 text-center text-sm text-stone-500">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/login"
            className="font-semibold text-(--color-marca-600) hover:text-(--color-marca-700) transition-colors"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
