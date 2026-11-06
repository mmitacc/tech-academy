import { Search } from "lucide-react";
import { TarjetaCurso } from "../components/TarjetaCurso";
import { cursosService } from "../services/cursos";
import { useApi } from "../hooks/useApi";

const categorias = [
  "Todos",
  "Desarrollo Web",
  "Frontend",
  "Backend",
  "Idiomas",
  "Desarrollo personal",
];

export function CursosPage() {
  const {
    data: cursos,
    cargando,
    error,
  } = useApi(() => cursosService.getTodos());

  return (
    <div className="space-y-6">
      {/* Encabezado Tradicional HTML */}
      <div>
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
          Cursos disponibles
        </h1>
        <p className="text-sm text-stone-500 mt-1">
          Elige un curso e inscríbete mientras haya cupos.
        </p>
      </div>

      {/* Buscador y filtros tradicionales */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="relative lg:w-80">
          <Search
            size={18}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-stone-400"
          />
          <input
            type="text"
            placeholder="Buscar por nombre o código..."
            className="w-full rounded-xl border border-(--color-marca-200) bg-(--color-marca-50) py-2.5 pr-3 pl-10 text-sm text-stone-800 placeholder-stone-400 focus:border-(--color-marca-500) focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categorias.map((categoria, i) => (
            <button
              key={categoria}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors cursor-pointer border ${
                i === 0
                  ? "bg-(--color-marca-600) text-white border-transparent shadow-xs"
                  : "border-(--color-marca-200) bg-(--color-marca-50) text-stone-600 hover:bg-(--color-marca-100) hover:text-stone-800"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      {/* Control de estados de la API */}
      {cargando && (
        <div className="py-16 text-center text-stone-500 font-medium animate-pulse text-sm">
          Cargando cursos disponibles...
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium text-center shadow-xs">
          {error}
        </div>
      )}

      {!cargando && !error && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4-custom">
          {cursos?.map((curso) => (
            <TarjetaCurso
              key={curso.id}
              curso={curso}
              inscrito={curso.id === 1 || curso.id === 3}
            />
          ))}
        </div>
      )}
    </div>
  );
}
