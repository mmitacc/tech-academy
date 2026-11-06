import React from "react";
import { BarraSuperior } from "./BarraSuperior";
import { BarraLateral } from "./BarraLateral";
import { Outlet } from "react-router";

export const LayoutApp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-(--color-marca-50)/30">
      {/* Barra superior */}
      <BarraSuperior />

      <div className="flex flex-1">
        {/* Barra lateral */}
        <BarraLateral />

        {/* Contenedor Principal */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
