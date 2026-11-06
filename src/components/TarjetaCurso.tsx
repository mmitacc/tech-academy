import { Clock, User } from "lucide-react";
import type { Curso } from "../types/curso";
import { Link } from "react-router";

interface Props {
  curso: Curso;
  inscrito?: boolean;
}

export function TarjetaCurso({ curso, inscrito = false }: Props) {
  const lleno = curso.inscritos >= curso.cupo;
  const porcentaje = Math.min((curso.inscritos / curso.cupo) * 100, 100);

  return (
    <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl flex flex-col overflow-hidden shadow-xs transition-shadow hover:shadow-md group">
      {/* Línea decorativa superior con el gradiente de marca */}
      <div className="h-1.5 bg-gradient-to-r from-(--color-marca-500) to-(--color-marca-700)" />

      <div className="flex flex-1 flex-col p-5">
        {/* Identificadores */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-(--color-marca-700) bg-(--color-marca-100) px-2 py-0.5 rounded-md">
            {curso.nombre || "Tecnología"}
          </span>
          <span className="font-mono text-xs text-stone-400 font-medium">
            {curso.codigo}
          </span>
        </div>

        {/* Información Principal */}
        <h3 className="mt-3 text-base font-bold text-stone-900 group-hover:text-(--color-marca-600) transition-colors line-clamp-1 leading-snug">
          {curso.nombre}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-stone-500 leading-relaxed">
          {curso.descripcion}
        </p>

        {/* Metadatos (Docente y Horario) */}
        <div className="mt-4 space-y-2 text-xs text-stone-600">
          <p className="flex items-center gap-2">
            <User size={14} className="text-stone-400 flex-shrink-0" />
            <span className="truncate">
              {curso.docente?.username || "Instructor"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Clock size={14} className="text-stone-400 flex-shrink-0" />
            <span className="truncate">
              {curso.docente.nombre || "Profesor Estrella"}
            </span>
          </p>
        </div>

        {/* Sección de Cupos con Barra de Progreso Nativa */}
        <div className="mt-5 space-y-1.5">
          <div className="flex justify-between text-xs text-stone-500">
            <span>Cupos ocupados</span>
            <span className="font-semibold text-stone-700">
              {curso.inscritos}/{curso.cupo}
            </span>
          </div>
          {/* Barra de progreso construida con divs tradicionales */}
          <div className="h-2 w-full bg-stone-200/70 rounded-full overflow-hidden">
            <div
              className="h-full bg-(--color-marca-500) rounded-full transition-all duration-300"
              style={{ width: `${porcentaje}%` }}
            />
          </div>
        </div>

        {/* Botones de Acción HTML Tradicionales */}
        <div className="mt-6 flex gap-2 pt-1">
          <Link
            to={`/cursos/${curso.id}`}
            className="flex-1 inline-flex items-center justify-center border border-(--color-marca-200) bg-(--color-marca-50) hover:bg-(--color-marca-100) text-stone-700 font-semibold text-xs py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            Ver detalle
          </Link>
          {/* <button className="flex-1 inline-flex items-center justify-center border border-(--color-marca-200) bg-(--color-marca-50) hover:bg-(--color-marca-100) text-stone-700 font-semibold text-xs py-2.5 rounded-xl transition-colors cursor-pointer">
            Ver detalle
          </button> */}

          {inscrito ? (
            <button
              disabled
              className="flex-1 inline-flex items-center justify-center bg-emerald-50 text-emerald-700 text-xs font-bold py-2.5 rounded-xl border border-emerald-200 disabled:opacity-100"
            >
              Inscrito
            </button>
          ) : (
            <button
              disabled={lleno}
              className={`flex-1 inline-flex items-center justify-center font-semibold text-xs py-2.5 rounded-xl shadow-xs transition-colors
                ${
                  lleno
                    ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                    : "bg-(--color-marca-500) hover:bg-(--color-marca-600) text-white cursor-pointer"
                }`}
            >
              {lleno ? "Sin cupos" : "Inscribirme"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
