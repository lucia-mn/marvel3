import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';
import {Link} from "react-router-dom";
import corazon from "../assets/corazon.png";
import corazonBlanco from "../assets/corazonBlanco.png";
 

export const TarjetaHeroe = ({character}) => {
    // const {anadirFavorito} = use();

    const {favoritos, agregarFavorito, quitarFavorito} = useFavoritos();

    const esFavorito = favoritos.some((c) => c.id === character.id);

    return (
        <div className='tarjeta-heroe'>

            <div className="tarjeta-heroe">
                <img src={character.image} alt={character.name} />

                <h3>{character.name}</h3>

                <p>{character.species}</p>
                <p>{character.status}</p>
            </div>

            <button onClick={() =>
                esFavorito ? quitarFavorito(character.id) : agregarFavorito(character)
            }>

                <img src={corazon} alt="icono-corazon" className="favoritos" />
                {esFavorito ? <img src={corazon} alt="icono-corazon" className="favoritos" /> 
                : 
                <img src={corazonBlanco} alt="icono-corazon-blanco" className="favoritos" />}

            </button>

            <Link to={`/characters/${character.id}`}>Ver más?</Link>
        </div>
    )
}
