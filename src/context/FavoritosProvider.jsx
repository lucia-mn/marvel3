import React from 'react';
import {createContext, useContext, useState} from "react";
import {useEffect} from "react";

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    const data = localStorage.getItem("favoritos");

    return data ? JSON.parse(data) : [];
  });

  // useEffect(() => {
  //   const guardados = JSON.parse(localStorage.getItem("favoritos")) || [];
  //   setFavoritos(guardados);
  // }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const anadirFavoritos = (personaje) => {
    if (!favoritos.find((p) => p.id === personaje.id)) {
      setFavoritos([...favoritos, personaje]);
    }
  };

  const quitarFavoritos = (id) => {
    setFavoritos(favoritos.filter((p) => p.id !== id));
  };

  return (
    
    <FavoritosContext.Provider
      value={{ favoritos, anadirFavoritos, quitarFavoritos }}>

      {children}
      
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoritosContext);
