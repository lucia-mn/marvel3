import { useState, useEffect } from "react";
import { obtenerPersonajes } from "../services/api";
import { ListaHeroes } from "../components/ListaHeroes";
import { BarraBusqueda } from "../layout/BarraBusqueda";

export const Inicio = () => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);

    const cargarPersonajes = async () => {
            try {
                setLoading(true);
                const data = await obtenerPersonajes();
                setPersonajes(data);

            } catch (error) {
                console.error("Error cargando personajes:", error);
                setPersonajes([]);

            } finally {
                setLoading(false);
            }
    };

    useEffect(() => {
        cargarPersonajes();
    }, []);


    const buscar = async (texto) => {
    try {
        setLoading(true);

        const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${texto}`
        );

        const data = await res.json();
        setPersonajes(data.results || []);

    } catch (error) {
        console.error("Error buscando:", error);
        setPersonajes([]);

    } finally {
        setLoading(false);
    }
};

    return (
    <>
        <BarraBusqueda onBuscar={buscar} />
        {loading && <p>Cargando...</p>}

        <ListaHeroes characters={personajes} />
    </>
    );
};