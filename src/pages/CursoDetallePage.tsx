import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  GraduationCap,
  User,
  Users,
} from "lucide-react";
import { useApi } from "../hooks/useApi";
import { cursosService } from "../services/cursos";

const temas = [
  "Componentes y props",
  "useState y eventos",
  "useEffect y consumo de APIs",
  "Rutas con React Router",
  "Autenticación con token",
  "Proyecto final",
];

export function CursoDetallePage() {
  const { id } = useParams<{ id: string }>();
  const {
    data: curso,
    cargando,
    error,
  } = useApi(() => cursosService.getPorId(Number(id)));

  if (cargando) {
    return (
      <div className="py-20 text-center text-stone-500 font-medium animate-pulse text-sm">
        Cargando detalles de la asignatura...
      </div>
    );
  }

  if (error || !curso) {
    return (
      <div className="p-6 rounded-2xl bg-red-50 border border-red-200 text-center text-red-600 text-sm font-medium shadow-xs max-w-md mx-auto mt-10">
        {error || "No se pudo encontrar la información del curso solicitado."}
      </div>
    );
  }

  const porcentajeCupos = Math.min((curso.inscritos / curso.cupo) * 100, 100);

  return (
    <div className="space-y-6">
      {/* Botón de retorno nativo */}
      <Link
        to="/cursos"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-500 hover:text-stone-800 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Volver a cursos</span>
      </Link>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Bloque Izquierdo: Información principal */}
        <div className="space-y-6 lg:col-span-2">
          {/* Tarjeta 1: Banner Informativo */}
          <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl overflow-hidden shadow-xs">
            <div className="bg-gradient-to-r from-(--color-marca-700) to-(--color-marca-500) p-6 text-white sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold tracking-wide backdrop-blur-xs">
                  {curso.nombre || "Tecnología"}
                </span>
                <span className="font-mono text-xs text-(--color-marca-100) font-medium">
                  {curso.codigo}
                </span>
              </div>
              <h1 className="mt-3 text-2xl font-black sm:text-3xl tracking-tight leading-snug">
                {curso.nombre}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-(--color-marca-50) opacity-90 leading-relaxed">
                {curso.descripcion ||
                  "Sin descripción detallada por el momento."}
              </p>
            </div>

            {/* Ficha técnica cuadriculada nativa */}
            <div className="grid grid-cols-2 divide-(--color-marca-200) border-t border-(--color-marca-200) sm:grid-cols-4 sm:divide-x bg-(--color-marca-100)/20">
              {[
                {
                  icono: User,
                  etiqueta: "Docente",
                  valor: curso.docente?.username || "Por asignar",
                },
                {
                  icono: Clock,
                  etiqueta: "Horario",
                  valor: curso.codigo || "Codigo",
                },
                {
                  icono: GraduationCap,
                  etiqueta: "Créditos",
                  valor: `${curso.creditos || 0} créditos`,
                },
                {
                  icono: Users,
                  etiqueta: "Cupos",
                  valor: `${curso.inscritos} de ${curso.cupo}`,
                },
              ].map(({ icono: Icono, etiqueta, valor }) => (
                <div key={etiqueta} className="p-4">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-stone-400 uppercase tracking-wider">
                    <Icono size={14} className="text-stone-400" /> {etiqueta}
                  </p>
                  <p className="mt-1 text-sm font-bold text-stone-800 truncate">
                    {valor}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta 2: Temario */}
          <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl p-6 shadow-xs">
            <h2 className="font-bold text-stone-900 text-base tracking-tight">
              Contenido del curso
            </h2>
            <ol className="mt-4 space-y-3">
              {temas.map((tema, i) => (
                <li key={tema} className="flex items-center gap-3 group">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-(--color-marca-100) text-xs font-bold text-(--color-marca-700) border border-(--color-marca-200)">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-stone-600 group-hover:text-stone-900 transition-colors">
                    {tema}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tarjeta 3: Alumnos Matriculados (Vista Privada) */}
          <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl overflow-hidden shadow-xs">
            <div className="flex items-center justify-between border-b border-(--color-marca-200) px-6 py-4 bg-(--color-marca-100)/30">
              <h2 className="font-bold text-stone-900 text-base tracking-tight">
                Estudiantes inscritos
              </h2>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                Solo admin / docente
              </span>
            </div>
            {/* Listado nativo de estudiantes inscritos reales o simulados */}
            {/* <ul className="divide-y divide-(--color-marca-200)">
              {curso.estudiantesInscritos && curso.estudiantesInscritos.length > 0 ? (
                curso.estudiantesInscritos.map((estudiante: any) => (
                  <li key={estudiante.id} className="flex items-center gap-3 px-6 py-3.5 hover:bg-(--color-marca-100)/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-(--color-marca-600) text-(--color-marca-50) font-bold text-xs flex items-center justify-center uppercase">
                      {estudiante.nombre?.slice(0, 2)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-stone-800">{estudiante.nombre}</p>
                      <p className="truncate text-xs text-stone-400 font-medium">{estudiante.email}</p>
                    </div>
                  </li>
                ))
              ) : (
                <li className="px-6 py-8 text-center text-xs text-stone-400 font-medium">
                  Aún no hay alumnos matriculados en este semestre.
                </li>
              )}
            </ul> */}
          </div>
        </div>

        {/* Bloque Derecho: Panel Lateral Fijo de Inscripción */}
        <div>
          <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl p-6 lg:sticky lg:top-24 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-(--color-marca-100) p-2.5 text-(--color-marca-600)">
                <BookOpen size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                  Inscripciones abiertas
                </p>
                <p className="font-bold text-stone-800 text-sm mt-0.5">
                  Hasta el 30/11/2026
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium text-stone-500">
                <span>Cupos ocupados</span>
                <span className="font-bold text-stone-700">
                  {curso.inscritos}/{curso.cupo}
                </span>
              </div>
              {/* Barra de progreso construida nativamente con divs */}
              <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-(--color-marca-500) rounded-full transition-all duration-300"
                  style={{ width: `${porcentajeCupos}%` }}
                />
              </div>
              <p className="text-[11px] text-stone-400 font-medium">
                Quedan {curso.cupo - curso.inscritos} cupos disponibles.
              </p>
            </div>

            <button className="w-full inline-flex items-center justify-center bg-(--color-marca-500) hover:bg-(--color-marca-600) disabled:bg-stone-200 disabled:text-stone-400 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer disabled:cursor-not-allowed">
              Inscribirme en este curso
            </button>

            <p className="text-center text-[11px] text-stone-400 font-medium">
              Puedes retirarte de la materia en cualquier momento si lo
              requieres.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
