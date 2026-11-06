import { Camera, Lock, Mail, Trash2, User } from "lucide-react";

// Interfaces de ejemplo para tipado estricto
interface Usuario {
  nombre: string;
  email: string;
  rol: string;
  fotoUrl?: string;
}

// Simulador de datos (Sustituir por tu importación real de ../data/mock)
const usuarioActual: Usuario = {
  nombre: "Ana García",
  email: "ana.garcia@tech.com",
  rol: "Estudiante",
};

export function PerfilPage() {
  return (
    <div className="space-y-6">
      {/* Encabezado Nativo de la Página */}
      <div>
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
          Mi perfil
        </h1>
        <p className="text-sm text-stone-500 mt-1">
          Tus datos personales y seguridad de la cuenta.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Sección: Foto de Perfil */}
        <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl p-6 text-center shadow-xs h-fit">
          <div className="relative mx-auto w-fit">
            {/* Avatar Nativo */}
            <div className="w-24 h-24 rounded-full bg-(--color-marca-600) text-(--color-marca-50) font-bold text-2xl flex items-center justify-center tracking-wider uppercase shadow-inner border-4 border-(--color-marca-50)">
              {usuarioActual.nombre.slice(0, 2)}
            </div>
            <button
              className="absolute right-0 bottom-0 rounded-full border-2 border-(--color-marca-50) bg-(--color-marca-600) p-2 text-white hover:bg-(--color-marca-700) transition-colors cursor-pointer shadow-sm"
              aria-label="Cambiar foto"
            >
              <Camera size={14} />
            </button>
          </div>

          <h2 className="mt-4 font-bold text-stone-900 text-lg tracking-tight">
            {usuarioActual.nombre}
          </h2>
          <p className="text-sm text-stone-500">{usuarioActual.email}</p>

          {/* Insignia de Rol Nativa */}
          <div className="mt-3">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
              {usuarioActual.rol}
            </span>
          </div>

          {/* Botones de Acción de Foto */}
          <div className="mt-6 flex flex-col gap-2">
            <button className="inline-flex items-center justify-center gap-2 border border-(--color-marca-200) bg-(--color-marca-50) hover:bg-(--color-marca-100) text-stone-700 font-medium text-sm px-4 py-2 rounded-xl transition-colors cursor-pointer">
              <Camera size={16} className="text-stone-500" />
              <span>Subir nueva foto</span>
            </button>
            <button className="inline-flex items-center justify-center gap-2 border border-transparent bg-red-50 hover:bg-red-100 text-red-700 font-medium text-sm px-4 py-2 rounded-xl transition-colors cursor-pointer">
              <Trash2 size={16} className="text-red-500" />
              <span>Eliminar foto</span>
            </button>
          </div>
        </div>

        {/* Sección de Formularios */}
        <div className="space-y-6 lg:col-span-2">
          {/* Formulario: Datos Personales (Solo Lectura) */}
          <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl p-6 shadow-xs">
            <h2 className="font-bold text-stone-900 text-base tracking-tight">
              Datos personales
            </h2>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {/* Campo Nombre */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Nombre
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute top-1/2 left-3.5 -translate-y-1/2 text-stone-400"
                  />
                  <input
                    type="text"
                    disabled
                    defaultValue={usuarioActual.nombre}
                    className="w-full rounded-xl border border-(--color-marca-200) bg-stone-100/50 py-2.5 pr-4 pl-10 text-sm text-stone-500 cursor-not-allowed outline-none"
                  />
                </div>
              </div>

              {/* Campo Correo */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Correo
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute top-1/2 left-3.5 -translate-y-1/2 text-stone-400"
                  />
                  <input
                    type="email"
                    disabled
                    defaultValue={usuarioActual.email}
                    className="w-full rounded-xl border border-(--color-marca-200) bg-stone-100/50 py-2.5 pr-4 pl-10 text-sm text-stone-500 cursor-not-allowed outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Formulario: Cambiar Contraseña */}
          <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl p-6 shadow-xs">
            <h2 className="font-bold text-stone-900 text-base tracking-tight">
              Cambiar contraseña
            </h2>

            <form className="mt-5 space-y-4">
              {/* Contraseña Actual */}
              <div className="space-y-1.5">
                <label
                  htmlFor="actual"
                  className="text-xs font-semibold text-stone-700 uppercase tracking-wider"
                >
                  Contraseña actual
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute top-1/2 left-3.5 -translate-y-1/2 text-stone-400"
                  />
                  <input
                    id="actual"
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2.5 pr-4 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Nueva Contraseña */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="nueva"
                    className="text-xs font-semibold text-stone-700 uppercase tracking-wider"
                  >
                    Nueva contraseña
                  </label>
                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute top-1/2 left-3.5 -translate-y-1/2 text-stone-400"
                    />
                    <input
                      id="nueva"
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2.5 pr-4 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Repetir Contraseña */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="repetir"
                    className="text-xs font-semibold text-stone-700 uppercase tracking-wider"
                  >
                    Repite la nueva
                  </label>
                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute top-1/2 left-3.5 -translate-y-1/2 text-stone-400"
                    />
                    <input
                      id="repetir"
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2.5 pr-4 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Botón Guardar */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-(--color-marca-500) hover:bg-(--color-marca-600) text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Guardar contraseña
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
