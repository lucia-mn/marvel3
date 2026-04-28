import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/DetalleHeroe.css";

export const DetalleHeroe = () => {
  const { id } = useParams();

  const [personaje, setPersonaje] = useState(null);
  const [episodios, setEpisodios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPersonaje = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );

        const data = await res.json();
        setPersonaje(data);

      } catch (error) {
        console.error(error);

      } finally {
        setLoading(false);
      }
    };

    getPersonaje();
  }, [id]);


  useEffect(() => {
    const fetchEpisodios = async () => {
      if (!personaje) return;

      try {
        const data = await Promise.all(
          personaje.episode.map((url) =>
            fetch(url).then((res) => res.json())
          )
        );

        setEpisodios(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEpisodios();
  }, [personaje]);


  if (loading || !personaje) return <p>Cargando...</p>;

  return (
    <div className="detalle-container">

      <div className="detalle-card">
        <img
          src={personaje.image}
          alt={personaje.name}
          className="detalle-img"
        />

        <div className="detalle-info">
          <h2>{personaje.name}</h2>
          <p><b>Estado:</b> {personaje.status}</p>
          <p><b>Especie:</b> {personaje.species}</p>
          <p><b>Origen:</b> {personaje.origin.name}</p>
        </div>
      </div>

      {/* episodios */}
      <div className="episodios">
        <h3>episodios</h3>

        <div className="slider">
          {episodios.map((ep) => (
            <div key={ep.id} className="card-ep">
              <h4>{ep.name}</h4>
              <p>{ep.episode}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};