import { Link } from "react-router-dom";
import React from 'react';
import { TarjetaHeroe } from "../components/TarjetaHeroe";


export const Inicio = ({nextPage, more}) => {

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
