import React from 'react';
import { useFavoritos } from '../context/FavoritosProvider';
import {Link} from "react-router-dom";
import corazon from "../assets/corazon.png";
import corazonVerde from "../assets/corazon-verde.png";
import corazonBlanco from "../assets/corazonBlanco.png";
import "../styles/TarjetaHeroe.css";
 

export const TarjetaHeroe = ({character}) => {

    const {favoritos, anadirFavoritos, quitarFavoritos} = useFavoritos();
    const esFavorito = favoritos.some((c) => String(c.id) === String(character.id));

    return (

        <div className='tarjeta-heroe'>
            <Link to={`/characters/${character.id}`} className='detalles'>

                <img src={character.image} alt={character.name} className='imagen-personaje' />
                <div className='linea'></div>

                <div className='verde'>
                    <div className='nombre'>
                        <h3>{character.name}</h3>

                        {/* <p>{character.species}</p>
                        <p>{character.status}</p> */}

                        <button type='button' onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();

                            esFavorito ? quitarFavoritos(character.id) : anadirFavoritos(character) 
                        }}>
                            
                            <img src={esFavorito ? corazonVerde : corazonBlanco} alt="favorito" className="favoritos" />
                        </button>
                    </div>
                </div> 

            </Link>
        </div>
    );
}
