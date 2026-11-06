export interface Calificacion {
  id: number;
  inscripcionId: number;
  descripcion: string;
  nota: number;
  fecha: string;
}

interface Estudiante {
  id: number;
  username: string;
  nombre: string;
  apellido: string;
  fotoUrl: string | null;
}

interface Curso {
  id: number;
  codigo: string;
  nombre: string;
  creditos: number;
}

export interface Inscripcion {
  id: number;
  estado: "ACTIVA" | "INACTIVA";
  fecha: string;
  estudiante: Estudiante;
  curso: Curso;
  calificaciones: Calificacion[];
  promedio: number | null;
}
