import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';
import { ListaHeroes } from '../components/ListaHeroes';
import { createContext, useContext, useState, useEffect } from 'react';

const FavoritosContext = createContext();

export const Favoritos = () => {

  const {favoritos} = useFavoritos();

  return (

    <ListaHeroes characters={favoritos}/>
  )
}
