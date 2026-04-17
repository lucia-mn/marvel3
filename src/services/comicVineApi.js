const API_KEY = import.meta.env.VITE_API_KEY;

const BASE = "/api";

// personajes
export const obtenerPersonajes = async (nombre = "") => {
  let url = `${BASE}/characters/?api_key=${API_KEY}&format=json`;

  if (nombre) {
    url += `&filter=name:${nombre}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  return data.results;
};

// comics
export const obtenerComics = async () => {
  let url = `/api/volumes/?api_key=${API_KEY}&format=json`;

  const res = await fetch(url);
  const data = await res.json();

  return data.results;
};