import React from "react";
import { Bell, User } from "lucide-react";

export const BarraSuperior: React.FC = () => {
  return (
    <header className="h-16 bg-(--color-marca-50) border-b border-(--color-marca-200) flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Área del Logo */}
      <div className="flex items-center gap-3">
        <svg
          viewBox="0 0 600 120"
          className="h-9 w-auto"
          fill="none"
          xmlns="http://w3.org"
        >
          <defs>
            <linearGradient
              id="goldGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#BF953F" />
              <stop offset="25%" stopColor="#FCF6BA" />
              <stop offset="50%" stopColor="#B38728" />
              <stop offset="75%" stopColor="#FBF5B7" />
              <stop offset="100%" stopColor="#AA771C" />
            </linearGradient>
          </defs>
          <g>
            <polygon
              points="50,5 90,25 90,75 50,95 10,75 10,25"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path
              d="M50,20 L50,45 M35,35 L50,45 L65,35"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="20" r="5" fill="url(#goldGradient)" />
            <circle cx="35" cy="35" r="5" fill="url(#goldGradient)" />
            <circle cx="65" cy="35" r="5" fill="url(#goldGradient)" />
            <path
              d="M30,65 L50,75 L70,65 L50,55 Z"
              fill="url(#goldGradient)"
              opacity="0.8"
            />
            <text
              x="120"
              y="65"
              fontFamily="'Inter', sans-serif"
              fontSize="55"
              fontWeight="800"
              fill="url(#goldGradient)"
              letterSpacing="1"
            >
              TECH
            </text>
            <rect
              x="275"
              y="45"
              width="20"
              height="6"
              rx="2"
              fill="url(#goldGradient)"
            />
            <text
              x="315"
              y="65"
              fontFamily="'Inter', sans-serif"
              fontSize="55"
              fontWeight="300"
              fill="url(#goldGradient)"
              letterSpacing="2"
            >
              ACADEMY
            </text>
          </g>
        </svg>
      </div>

      {/* Acciones de la derecha */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-stone-600 hover:text-(--color-marca-600) hover:bg-(--color-marca-100) rounded-full transition-colors cursor-pointer">
          <Bell className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 pl-2 border-l border-stone-200">
          <div className="w-8 h-8 rounded-full bg-(--color-marca-600) flex items-center justify-center text-(--color-marca-50)">
            <User className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium text-stone-700 hidden sm:inline">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
};
