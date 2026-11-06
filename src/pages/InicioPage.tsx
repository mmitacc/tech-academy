import {
  Award,
  BookOpen,
  CalendarDays,
  ClipboardList,
  Clock,
} from "lucide-react";

// Interfaces básicas para simulación de datos tipados si lo requieres
interface Inscripcion {
  id: string;
  curso: string;
  docente: string;
  estado: "activo" | "completado" | "pendiente";
}

interface CursoCupo {
  id: string;
  nombre: string;
  horario: string;
}

// Simuladores de datos (Sustituir por tus importaciones reales de ../data/mock)
const misInscripciones: Inscripcion[] = [
  {
    id: "1",
    curso: "Desarrollo Web Frontend",
    docente: "Ing. Carlos Gómez",
    estado: "activo",
  },
  {
    id: "2",
    curso: "Bases de Datos con SQLite",
    docente: "Dra. Ana Martínez",
    estado: "completado",
  },
];

const cursos: CursoCupo[] = [
  {
    id: "4",
    nombre: "React con TypeScript Avanzado",
    horario: "Martes y Jueves · 19:00",
  },
  {
    id: "5",
    nombre: "Backend Node.js & REST APIs",
    horario: "Miércoles · 18:00",
  },
  {
    id: "6",
    nombre: "Estrategias de UI/UX Design",
    horario: "Sábados · 09:00",
  },
];

export function InicioPage() {
  return (
    <>
      {/* Banner de Bienvenida Estilizado */}
      <div className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-(--color-marca-700) to-(--color-marca-500) p-6 text-white sm:p-8 shadow-xs">
        <p className="text-xs font-semibold text-(--color-marca-100) uppercase tracking-wider">
          Semestre 2026 - II
        </p>
        <h1 className="mt-1 text-2xl font-bold sm:text-3xl tracking-tight">
          ¡Hola, Ana!
        </h1>
        <p className="mt-2 max-w-xl text-sm text-(--color-marca-50) opacity-90 leading-relaxed">
          Tienes 2 cursos activos. Revisa tus calificaciones y no olvides las
          fechas de inscripción vigentes.
        </p>
        <button className="mt-5 inline-flex items-center justify-center bg-(--color-marca-50) hover:bg-(--color-marca-100) text-(--color-marca-700) font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors cursor-pointer shadow-xs">
          Explorar cursos
        </button>
      </div>

      {/* Grid de Tarjetas Estadísticas Nativas */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Tarjeta: Cursos Activos */}
        <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl p-5 flex items-start justify-between shadow-xs">
          <div>
            <p className="text-xs font-medium text-stone-500 uppercase tracking-wider">
              Cursos activos
            </p>
            <p className="text-2xl font-bold text-stone-900 mt-1">2</p>
            <p className="text-xs text-stone-400 mt-1">
              De 4 inscripciones en total
            </p>
          </div>
          <div className="p-2.5 bg-(--color-marca-100) text-(--color-marca-600) rounded-xl">
            <BookOpen size={20} />
          </div>
        </div>

        {/* Tarjeta: Promedio General */}
        <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl p-5 flex items-start justify-between shadow-xs">
          <div>
            <p className="text-xs font-medium text-stone-500 uppercase tracking-wider">
              Promedio general
            </p>
            <p className="text-2xl font-bold text-stone-900 mt-1">85</p>
            <p className="text-xs text-stone-400 mt-1">Sobre 100 puntos</p>
          </div>
          <div className="p-2.5 bg-(--color-marca-100) text-(--color-marca-600) rounded-xl">
            <Award size={20} />
          </div>
        </div>

        {/* Tarjeta: Créditos */}
        <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl p-5 flex items-start justify-between shadow-xs">
          <div>
            <p className="text-xs font-medium text-stone-500 uppercase tracking-wider">
              Créditos
            </p>
            <p className="text-2xl font-bold text-stone-900 mt-1">7</p>
            <p className="text-xs text-stone-400 mt-1">Créditos en curso</p>
          </div>
          <div className="p-2.5 bg-(--color-marca-100) text-(--color-marca-600) rounded-xl">
            <ClipboardList size={20} />
          </div>
        </div>

        {/* Tarjeta: Próxima Clase */}
        <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl p-5 flex items-start justify-between shadow-xs">
          <div>
            <p className="text-xs font-medium text-stone-500 uppercase tracking-wider">
              Próxima clase
            </p>
            <p className="text-2xl font-bold text-stone-900 mt-1">18:00</p>
            <p className="text-xs text-stone-400 mt-1">Lunes · HTML y CSS</p>
          </div>
          <div className="p-2.5 bg-(--color-marca-100) text-(--color-marca-600) rounded-xl">
            <Clock size={20} />
          </div>
        </div>
      </div>

      {/* Bloques de Información Inferior */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Panel: Mis Inscripciones */}
        <div className="lg:col-span-2 bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl overflow-hidden shadow-xs">
          <div className="flex items-center justify-between border-b border-(--color-marca-200) px-5 py-4 bg-(--color-marca-100)/30">
            <h2 className="font-semibold text-stone-900">Mis inscripciones</h2>
            <a
              href="#"
              className="text-xs font-semibold text-(--color-marca-600) hover:text-(--color-marca-700) transition-colors"
            >
              Ver todas
            </a>
          </div>
          <ul className="divide-y divide-(--color-marca-200)">
            {misInscripciones.map((inscripcion) => (
              <li
                key={inscripcion.id}
                className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-(--color-marca-100)/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-(--color-marca-100) p-2 text-(--color-marca-600)">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-900">
                      {inscripcion.curso}
                    </p>
                    <p className="text-xs text-stone-500">
                      {inscripcion.docente}
                    </p>
                  </div>
                </div>

                {/* Badge/Insignia Nativa Dinámica */}
                {inscripcion.estado === "activo" && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Activo
                  </span>
                )}
                {inscripcion.estado === "completado" && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200">
                    Completado
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Panel: Cursos con Cupos */}
        <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl overflow-hidden shadow-xs">
          <div className="border-b border-(--color-marca-200) px-5 py-4 bg-(--color-marca-100)/30">
            <h2 className="font-semibold text-stone-900">Cursos con cupos</h2>
          </div>
          <ul className="space-y-1 p-3">
            {cursos.map((curso) => (
              <li
                key={curso.id}
                className="rounded-xl p-3 hover:bg-(--color-marca-100)/30 transition-colors cursor-pointer group"
              >
                <p className="text-sm font-medium text-stone-900 group-hover:text-(--color-marca-700) transition-colors">
                  {curso.nombre}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-stone-400">
                  <CalendarDays size={13} className="text-stone-400" />
                  <span>{curso.horario}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
