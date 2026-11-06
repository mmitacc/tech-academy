import { useNavigate } from "react-router";
import { Home } from "lucide-react";

export function NoEncontradaPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center p-6 text-center">
      {/* Código de Error con el color verde principal */}
      <p className="text-8xl font-black text-(--color-marca-600) tracking-tight">
        404
      </p>

      {/* Mensaje de Error */}
      <h1 className="mt-4 text-3xl font-bold text-stone-900 tracking-tight">
        Página no encontrada
      </h1>
      <p className="mt-2 text-sm text-stone-500 max-w-md">
        La dirección que buscas no existe, ha sido eliminada o fue movida
        temporalmente de lugar.
      </p>

      {/* Botón HTML nativo con estilos de marca */}
      <button
        onClick={() => navigate("/")}
        className="mt-8 inline-flex items-center justify-center gap-2 bg-(--color-marca-500) hover:bg-(--color-marca-600) text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
      >
        <Home size={16} />
        <span>Volver al inicio</span>
      </button>
    </div>
  );
}
