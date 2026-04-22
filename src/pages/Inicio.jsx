import { Link } from "react-router-dom";
import React from 'react';
import { TarjetaHeroe } from "../components/TarjetaHeroe";
import {obtenerPersonajes} from "../services/comicVineApi";

import {useState} from "react";
import { BarraBusqueda } from "../layout/BarraBusqueda";
import { ListaHeroes } from "../components/ListaHeroes";


export const Inicio = () => {
    const [personajes, setPersonajes] = useState([]);

    const buscar = async (texto) => {
        const data = await obtenerPersonajes(texto);
        setPersonajes(data);
    }


    //
    const [loading, setLoading] = useState(false);

    const buscar2 = async(texto) => {
        try {
            setLoading(true);
            const data = await obtenerPersonajes (texto);
            setPersonajes(data);

        } catch (error) {
            console.error(error);

        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <BarraBusqueda onBuscar={buscar}>
                <ListaHeroes personajes={personajes} />
            </BarraBusqueda>

            {loading && <p>Cargando...</p>}
        </>
    )
};
