import React from 'react';
import { useFavoritos } from '../context/FavoritosProvider';
import { ListaHeroes } from '../components/ListaHeroes';
import { BarraBusqueda } from "../layout/BarraBusqueda";

import "../styles/Favoritos.css";

import { useState, useEffect } from 'react';
import { obtenerPersonajes } from "../services/api";

export const Favoritos = () => {
  
  const { favoritos } = useFavoritos();
  const [personajes, setPersonajes] = useState([]);

  // console.log("FAVORITOS:", favoritos);

  useEffect(() => {
    setPersonajes(favoritos);
  }, [favoritos]);

  const buscar = (texto) => {
    const filtrados = favoritos.filter((personaje) =>
      personaje.name.toLowerCase().includes(texto.toLowerCase())
    );

    setPersonajes(filtrados);
  };


  return (
    <>
      <h3 className='fav'>favoritos</h3>

      <BarraBusqueda onBuscar={buscar} />
      <ListaHeroes characters={personajes} />
    </>

  );
};
