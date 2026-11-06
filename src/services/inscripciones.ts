import { api } from "../lib/axios";
import type { RespuestaApi } from "../types/api";
import type { Inscripcion } from "../types/inscripcion";

export const inscripcionesService = {
  getTodos: async (): Promise<Inscripcion[]> => {
    const result = await api.get<RespuestaApi<Inscripcion[]>>("/inscripciones");
    return result.data.data;
  },
};
