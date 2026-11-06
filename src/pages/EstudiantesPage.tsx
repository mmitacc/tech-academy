import {
  Search,
  UserPlus,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Estudiante {
  id: string;
  nombre: string;
  email: string;
  rol: string;
  activo: boolean;
}

const estudiantes: Estudiante[] = [
  {
    id: "1",
    nombre: "Ana García",
    email: "ana.garcia@tech.com",
    rol: "Estudiante",
    activo: true,
  },
  {
    id: "2",
    nombre: "Carlos Mendoza",
    email: "c.mendoza@tech.com",
    rol: "Estudiante",
    activo: false,
  },
  {
    id: "3",
    nombre: "Lucía Torres",
    email: "l.torres@tech.com",
    rol: "Estudiante",
    activo: true,
  },
];

export function EstudiantesPage() {
  return (
    <div className="space-y-6">
      {/* Encabezado de la Página */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
            Estudiantes
          </h1>
          <p className="text-sm text-stone-500 mt-1">
            Gestión de estudiantes registrados (solo ADMIN).
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 bg-(--color-marca-500) hover:bg-(--color-marca-600) text-white font-medium text-sm px-4 py-2.5 rounded-xl shadow-sm transition-colors cursor-pointer">
          <UserPlus size={16} />
          <span>Nuevo estudiante</span>
        </button>
      </div>

      {/* Tarjeta de Contenido Principal */}
      <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl overflow-hidden shadow-xs">
        {/* Barra de Filtros */}
        <div className="flex flex-col gap-3 border-b border-(--color-marca-200) p-4 sm:flex-row sm:items-center bg-(--color-marca-100)/30">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-stone-400"
            />
            <input
              type="text"
              placeholder="Buscar por nombre o correo..."
              className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2 pr-3 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
            />
          </div>
          <select className="rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) px-3 py-2 text-sm text-stone-700 focus:border-(--color-marca-500) focus:outline-none cursor-pointer">
            <option>Todos los estados</option>
            <option>Activos</option>
            <option>Inactivos</option>
          </select>
        </div>

        {/* Tabla Responsiva */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-(--color-marca-100)/50 text-xs text-stone-500 uppercase tracking-wider border-b border-(--color-marca-200)">
              <tr>
                <th className="px-6 py-3.5 font-semibold">Estudiante</th>
                <th className="px-6 py-3.5 font-semibold">Rol</th>
                <th className="px-6 py-3.5 font-semibold">Estado</th>
                <th className="px-6 py-3.5 text-right font-semibold">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--color-marca-200)">
              {estudiantes.map((estudiante) => (
                <tr
                  key={estudiante.id}
                  className="hover:bg-(--color-marca-100)/20 transition-colors"
                >
                  {/* Avatar + Info */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-(--color-marca-600) text-(--color-marca-50) font-bold text-xs flex items-center justify-center tracking-wider uppercase">
                        {estudiante.nombre.slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-medium text-stone-900">
                          {estudiante.nombre}
                        </div>
                        <div className="text-xs text-stone-500">
                          {estudiante.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Rol (Insignia nativa) */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                      {estudiante.rol}
                    </span>
                  </td>

                  {/* Estado (Insignia nativa dinámicos) */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    {estudiante.activo ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                        Activo
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">
                        Inactivo
                      </span>
                    )}
                  </td>

                  {/* Botones de acción HTML */}
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        className="rounded-lg p-1.5 text-stone-500 hover:bg-(--color-marca-100) hover:text-(--color-marca-700) transition-colors cursor-pointer"
                        title="Editar estudiante"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        className="rounded-lg p-1.5 text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                        title="Eliminar estudiante"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="flex items-center justify-between border-t border-(--color-marca-200) px-6 py-4 text-sm text-stone-500 bg-(--color-marca-100)/30">
          <span>
            Mostrando 1 - {estudiantes.length} de {estudiantes.length}
          </span>
          <div className="flex gap-1">
            <button
              className="rounded-lg border border-(--color-marca-200) bg-(--color-marca-50) p-1.5 text-stone-600 hover:bg-(--color-marca-100) transition-colors cursor-pointer"
              aria-label="Página anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="rounded-lg border border-(--color-marca-200) bg-(--color-marca-50) p-1.5 text-stone-600 hover:bg-(--color-marca-100) transition-colors cursor-pointer"
              aria-label="Página siguiente"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
