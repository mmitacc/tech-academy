export type EstadoInscripcion = "ACTIVA" | "RETIRADA" | "FINALIZADA";

export interface Calificacion {
  id: number;
  descripcion: string;
  nota: number;
  fecha: string;
}

export interface Inscripcion {
  id: number;
  cursoId: number;
  curso: string;
  docente: string;
  fecha: string;
  estado: EstadoInscripcion;
  promedio: number | null;
}
