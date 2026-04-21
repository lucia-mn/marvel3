import { Link } from "react-router-dom";
import React from 'react';
import { TarjetaHeroe } from "../components/TarjetaHeroe";
import {obtenerComics} from "../services/comicVineApi";


export const Inicio = ({nextPage, more}) => {

    console.log(obtenerComics);

    return (
        <>
            <TarjetaHeroe />

            {/* {more &&
                <button className='boton' onClick={nextPage}>
                    Ver más personajes
                </button>
            } */}
        </>

    );
}
