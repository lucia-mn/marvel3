import React from 'react';
import {createContext, useContext, useState} from "react";
import {useEffect} from "react";

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);


  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(guardados);
  }, []);


  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const agregarFavorito = (personaje) => {
    if (!favoritos.find((p) => p.id === personaje.id)) {
      setFavoritos([...favoritos, personaje]);
    }
  };

  const quitarFavorito = (id) => {
    setFavoritos(favoritos.filter((p) => p.id !== id));
  };

  return (
    <FavoritosContext.Provider
      value={{ favoritos, agregarFavorito, quitarFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoritosContext);
