import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';
import {Link} from "react-router-dom";
import corazon from "../assets/corazon.png";
import corazonBlanco from "../assets/corazonBlanco.png";


/* export const TarjetaHeroe = ({personajes}) => {
    const {anadirFavoritos} = useFavoritos();

  return (
    <>
        <div className="contenedor">
            {personajes && personajes.map(personaje => {

            return (
                <article className="contenedor-tarjeta" key={personaje.id}>

                    <div className="personaje-img">

                        img
                        {personaje.image && (
                            <img 
                            src={personaje.image.original_url || personaje.image.screen_url} 
                            className="img" 
                            alt={personaje.name} 
                            />
                        )}
                    </div>

                        
                    <div className="personaje-name">
                    nombre
                    {personaje.real_name && (
                        <small className="name"> ({personaje.real_name})</small>
                    )}
                    </div>

                    // descripcion
                    // <div className="descripcion">
                    // <p>{personaje.deck || "Sin descripción"}</p>
                    // </div>
                </article>
            );
            })}
        </div>

    </>
  )
} */
 

export const TarjetaHeroe = ({character}) => {
    // const {anadirFavorito} = use();

    const {favoritos, anadirFavorito, quitarFavorito} = useFavoritos();

    const esFavorito = favoritos.some((c) => c.id === character.id);

    return (
        <div className='tarjeta-heroe'>
            <img src={character.image?.small_url} />
            <h3>{obtenerPersonajes.name}</h3>

            <button onClick={() =>
                esFavorito ? quitarFavorito(character.id) : anadirFavorito(character)
            }>

                <img src={corazon} alt="icono-corazon" className="favoritos" />
                {esFavorito ? <img src={corazon} alt="icono-corazon" className="favoritos" /> 
                : 
                <img src={corazonBlanco} alt="icono-corazon-blanco" className="favoritos" />}

            </button>

            <Link to={`/detalle/${character.id}`}>Ver más?</Link>
        </div>
    )
}
