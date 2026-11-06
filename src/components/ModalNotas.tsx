import { X, Award } from "lucide-react";
import type { Calificacion } from "../types/inscripcion";

interface ModalNotasProps {
  abierto: boolean;
  onClose: () => void;
  cursoNombre: string;
  calificaciones: Calificacion[];
  promedio: number | null;
}

export function ModalNotas({
  abierto,
  onClose,
  cursoNombre,
  calificaciones,
  promedio,
}: ModalNotasProps) {
  if (!abierto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 p-4 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-md bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl p-6 shadow-xl relative animate-scale-in">
        {/* Botón cerrar esquina superior derecha */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-600 hover:bg-(--color-marca-100) rounded-lg transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Encabezado */}
        <div className="mb-4 pr-6">
          <h3 className="font-bold text-stone-900 text-lg tracking-tight">
            Desglose de Calificaciones
          </h3>
          <p className="text-xs text-stone-500 font-medium mt-0.5 truncate">
            {cursoNombre}
          </p>
        </div>

        {/* Contenido / Listado de Notas */}
        <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
          {calificaciones && calificaciones.length > 0 ? (
            <div className="border border-(--color-marca-200) rounded-xl overflow-hidden bg-white">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-(--color-marca-100)/50 text-stone-500 font-bold uppercase tracking-wider border-b border-(--color-marca-200)">
                  <tr>
                    <th className="px-4 py-2.5">Evaluación</th>
                    <th className="px-4 py-2.5 text-right">Nota</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-(--color-marca-200) text-stone-700 font-medium">
                  {calificaciones.map((c, index) => (
                    <tr key={index} className="hover:bg-(--color-marca-100)/10">
                      <td className="px-4 py-3">
                        {c.descripcion || `Evaluación ${index + 1}`}
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-stone-900">
                        {c.nota} pts
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-8 text-center text-stone-400 text-xs font-medium border border-dashed border-(--color-marca-200) rounded-xl">
              No hay calificaciones registradas aún en este curso.
            </div>
          )}
        </div>

        {/* Sección de Promedio Final */}
        <div className="mt-5 pt-4 border-t border-(--color-marca-200) flex items-center justify-between bg-(--color-marca-100)/30 p-3 rounded-xl">
          <div className="flex items-center gap-2 text-stone-600 text-xs font-bold uppercase tracking-wide">
            <Award size={16} className="text-(--color-marca-600)" />
            <span>Promedio Final</span>
          </div>
          <span className="text-lg font-black text-stone-900">
            {promedio !== null && promedio !== undefined
              ? `${promedio} / 100`
              : "—"}
          </span>
        </div>

        {/* Botón de cierre inferior */}
        <button
          onClick={onClose}
          className="w-full mt-5 inline-flex items-center justify-center bg-(--color-marca-500) hover:bg-(--color-marca-600) text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors cursor-pointer shadow-xs"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
