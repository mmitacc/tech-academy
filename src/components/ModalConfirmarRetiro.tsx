import { XCircle } from "lucide-react";

interface ModalConfirmarRetiroProps {
  isOpen: boolean;
  nombreCurso: string;
  onClose: () => void;
  onConfirm: () => void;
}

export function ModalConfirmarRetiro({
  isOpen,
  nombreCurso,
  onClose,
  onConfirm,
}: ModalConfirmarRetiroProps) {
  // Si el estado controlado por el padre es falso, no renderiza absolutamente nada
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 p-4 backdrop-blur-xs">
      {/* Contenedor principal del cuadro de diálogo */}
      <div className="w-full max-w-sm bg-(--color-marca-50) border border-(--color-marca-200) rounded-2xl p-6 text-center shadow-lg animate-in fade-in zoom-in-95 duration-150">
        {/* Icono de Alerta */}
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600 border border-red-100">
          <XCircle size={24} />
        </div>

        {/* Textos Informativos */}
        <h3 className="mt-4 font-bold text-stone-900 text-lg tracking-tight">
          ¿Retirarte del curso?
        </h3>
        <p className="mt-2 text-sm text-stone-500 leading-relaxed">
          Dejarás de estar inscrito en el curso{" "}
          <strong className="text-stone-700 font-semibold">
            {nombreCurso}
          </strong>
          . Esta acción cambia tu inscripción a{" "}
          <strong className="text-stone-700 font-semibold">RETIRADA</strong>.
        </p>

        {/* Botones de Acción Nativos */}
        <div className="mt-6 flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center border border-(--color-marca-200) bg-(--color-marca-50) hover:bg-(--color-marca-100) text-stone-700 font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            Sí, retirarme
          </button>
        </div>
      </div>
    </div>
  );
}
