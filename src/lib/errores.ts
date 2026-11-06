import axios from "axios";

export function mensajeError(error: unknown, porDefecto: string) {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      return "No hay conexion con el servidor";
    }

    const datos = error.response.data;
    const detalle = datos?.details?.[0]?.mensaje;

    return detalle ?? datos?.message ?? porDefecto;
  }
}
