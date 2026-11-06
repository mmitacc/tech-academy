import { Eye, Plus, XCircle, RefreshCw } from "lucide-react";
import { inscripcionesService } from "../services/inscripciones";
import { useApi } from "../hooks/useApi";
import { useState } from "react";
import { ModalConfirmarRetiro } from "../components/ModalConfirmarRetiro";
import { ModalNotas } from "../components/ModalNotas";
// import { misInscripciones } from "../data/mock";

const pestanas = ["Todas", "Activas", "Retiradas", "Finalizadas"];

export function MisInscripcionesPage() {
  const {
    data: misInscripciones,
    cargando,
    error,
    recargar,
  } = useApi(() => inscripcionesService.getTodos());

  // const [busqueda, setBusqueda] = useState("");

  // const cursosFiltrados = cursos?.filter((curso) => {
  //   const termino = busqueda.toLowerCase().trim();
  //   if (!termino) return true;

  //   const coincideNombre = curso.nombre?.toLowerCase().includes(termino);
  //   const coincideCodigo = curso.codigo?.toLowerCase().includes(termino);

  //   return coincideNombre || coincideCodigo;
  // });
  // Estados para controlar que inscripcion ver en el modal de notas
  const [inscripcionSeleccionada, setInscripcionSeleccionada] = useState<
    any | null
  >(null);

  // Estados nativos para controlar el flujo del modal
  const [modalAbierto, setModalAbierto] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState<{
    id: number;
    nombre: string;
  } | null>(null);

  const handleSolicitarRetiro = (
    idInscripcion: number,
    nombreCurso: string,
  ) => {
    setCursoSeleccionado({ id: idInscripcion, nombre: nombreCurso });
    setModalAbierto(true);
  };

  const handleEjecutarRetiro = () => {
    if (cursoSeleccionado) {
      console.log(
        `Retirando de forma definitiva del curso ID: ${cursoSeleccionado.id}`,
      );
      // Aquí ejecutas la llamada a tu API o backend
    }
    setModalAbierto(false);
  };

  return (
    <div className="space-y-6">
      {/* Encabezado Nativo de la Página */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
            Mis inscripciones
          </h1>
          <p className="text-sm text-stone-500 mt-1">
            Cursos en los que te inscribiste y su estado.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 bg-(--color-marca-500) hover:bg-(--color-marca-600) text-white font-medium text-sm px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer">
          <Plus size={16} />
          <span>Nueva inscripción</span>
        </button>
      </div>

      {/* Pestañas Tradicionales HTML */}
      <div className="flex gap-1 overflow-x-auto border-b border-(--color-marca-200)">
        {pestanas.map((pestana, i) => (
          <button
            key={pestana}
            className={`border-b-2 px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              i === 0
                ? "border-(--color-marca-500) text-(--color-marca-700)"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            {pestana}
          </button>
        ))}
      </div>

      {/* Control de estados de la API */}
      {cargando && (
        <div className="py-16 text-center text-stone-500 font-medium animate-pulse text-sm">
          Cargando lista de cursos inscritos...
        </div>
      )}

      {error && (
        <div className="p-6 rounded-2xl bg-red-50 border border-red-200 text-center max-w-md mx-auto shadow-xs space-y-3">
          <p className="text-sm font-semibold text-red-700">{error}</p>
          <button
            onClick={recargar}
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <RefreshCw size={14} className={cargando ? "animate-spin" : ""} />
            <span>Reintentar cargar</span>
          </button>
        </div>
      )}

      {!cargando && !error && (
        <div className="bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-(--color-marca-100)/50 text-xs text-stone-500 uppercase tracking-wider border-b border-(--color-marca-200)">
                <tr>
                  <th className="px-6 py-3.5 font-semibold">Curso</th>
                  <th className="px-6 py-3.5 font-semibold">Fecha</th>
                  <th className="px-6 py-3.5 font-semibold">Estado</th>
                  <th className="px-6 py-3.5 font-semibold">Promedio</th>
                  <th className="px-6 py-3.5 text-right font-semibold">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-(--color-marca-200)">
                {misInscripciones?.map((inscripcion) => (
                  <tr
                    key={inscripcion.id}
                    className="hover:bg-(--color-marca-100)/20 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <p className="font-bold text-stone-900 text-base leading-snug">
                        {inscripcion.curso.codigo}
                      </p>
                      <p className="font-bold text-stone-900 text-base leading-snug">
                        {inscripcion.curso.nombre}
                      </p>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {inscripcion.estudiante.username}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-stone-600 font-medium">
                      {inscripcion.fecha
                        ? new Date(inscripcion.fecha).toLocaleDateString()
                        : "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* Insignia de Estado Nativa */}
                      {inscripcion.estado === "ACTIVA" ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          Activa
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-600 border border-stone-200">
                          {inscripcion.estado}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 font-bold text-stone-800">
                      {inscripcion.promedio ?? "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() =>
                            setInscripcionSeleccionada(inscripcion)
                          }
                          className="inline-flex items-center justify-center gap-1.5 border border-(--color-marca-200) bg-(--color-marca-50) hover:bg-(--color-marca-100) text-stone-700 font-semibold text-xs px-3 py-2 rounded-xl transition-colors cursor-pointer"
                        >
                          <Eye size={14} className="text-stone-500" />
                          <span>Notas</span>
                        </button>
                        {inscripcion.estado === "ACTIVA" && (
                          <button
                            onClick={() =>
                              handleSolicitarRetiro(
                                inscripcion.id,
                                inscripcion.curso.nombre,
                              )
                            }
                            className="inline-flex items-center justify-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-700 font-semibold text-xs px-3 py-2 rounded-xl transition-colors cursor-pointer"
                          >
                            <XCircle size={14} className="text-red-500" />
                            <span>Retirarme</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Contenedor de Tabla Nativo (Tarjeta) */}

      {/* Ventana de confirmación de retiro del curso (modal)*/}
      <ModalConfirmarRetiro
        isOpen={modalAbierto}
        nombreCurso={cursoSeleccionado?.nombre || ""}
        onClose={() => setModalAbierto(false)}
        onConfirm={handleEjecutarRetiro}
      />
      {/* Modal para mostrar las notas del curso seleccionado */}
      <ModalNotas
        abierto={inscripcionSeleccionada !== null}
        onClose={() => setInscripcionSeleccionada(null)}
        cursoNombre={inscripcionSeleccionada?.curso?.nombre || ""}
        calificaciones={inscripcionSeleccionada?.calificaciones || []}
        promedio={inscripcionSeleccionada?.promedio}
      />
    </div>
  );
}
