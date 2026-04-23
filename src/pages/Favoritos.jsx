import React from 'react';
import { useFavoritos } from '../context/FavoritosProvider';
import { ListaHeroes } from '../components/ListaHeroes';
import { BarraBusqueda } from "../layout/BarraBusqueda";

export const Favoritos = () => {
  
  const { favoritos } = useFavoritos();

  // console.log("FAVORITOS:", favoritos);

  return (
    <>
      <BarraBusqueda onBuscar={() => {}} />
      <ListaHeroes characters={favoritos} />
    </>

  );
};