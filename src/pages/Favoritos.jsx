import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';
import { ListaHeroes } from '../components/ListaHeroes';

export const Favoritos = () => {
  
  const { favoritos } = useFavoritos();

  return (
    <>
      <BarraBusqueda onBuscar={() => {}} />
      <ListaHeroes characters={favoritos} />
    </>
    
  );
};