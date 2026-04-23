const BASE_URL = "https://rickandmortyapi.com/api";

export const obtenerPersonajes = async () => {
    
  try {
    const res = await fetch(`${BASE_URL}/character`);
    
    if (!res.ok) {
      throw new Error("Error en la petición");
    }

    const data = await res.json();
    return data.results;

  } catch (error) {
    console.error("Error API:", error);
    return [];
  }
};