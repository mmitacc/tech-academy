import React from "react";
import { NavLink, useNavigate } from "react-router"; // O 'react-router-dom'
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpenCheck,
  Settings,
  LogOut,
  ClipboardCheck,
} from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";

export const BarraLateral: React.FC = () => {
  const navigate = useNavigate();
  const cerrarSesion = useAuthStore((s) => s.cerrarSesion || s.cerrarSesion); // Ajusta según tu store

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", to: "/inicio" },
    { icon: GraduationCap, label: "Cursos", to: "/cursos" },
    { icon: Users, label: "Estudiantes", to: "/estudiantes" },
    { icon: ClipboardCheck, label: "Inscripciones", to: "/inscripciones" },
    { icon: BookOpenCheck, label: "Certificaciones", to: "/certificaciones" },
    { icon: Settings, label: "Configuración", to: "/perfil" },
  ];

  const handleLogout = () => {
    // 1. Limpiar estado de Zustand
    cerrarSesion();
    // 2. Redireccionar al login
    navigate("/login", { replace: true });
  };

  return (
    <aside className="w-64 bg-(--color-marca-50) border-r border-(--color-marca-200) flex flex-col h-[calc(100vh-4rem)] sticky top-16">
      {/* Enlaces de Navegación Dinámicos */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) => `
                w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group
                ${
                  isActive
                    ? "bg-(--color-marca-500) text-white shadow-xs"
                    : "text-stone-600 hover:bg-(--color-marca-100) hover:text-(--color-marca-700)"
                }
              `}
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 transition-colors 
                      ${isActive ? "text-white" : "text-stone-400 group-hover:text-(--color-marca-600)"}`}
                  />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Sección Inferior: Botón Cerrar Sesión */}
      <div className="p-4 border-t border-(--color-marca-200) bg-(--color-marca-100)/40">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer group"
        >
          <LogOut className="w-4 h-4 text-red-500 group-hover:text-red-600 transition-colors" />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
};
