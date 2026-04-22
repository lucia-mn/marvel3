import React from 'react';
import {createContext, useContext, useState} from "react";

const FavoritosContext = createContext();

export const FavoritosProvider = ({children}) => {
    const [favoritos, setFavoritos] = useState([]);

    const anadirFavorito = (personaje) => {
        if (!favoritos.find((p) => p.id === personaje.id)) {
            setFavoritos([...favoritos, personaje]);
        }
    };

    const quitarFavorito = (id) => {
        setFavoritos(favoritos.filter((p) => p.id !== id));
    }

    return (
        <FavoritosContext.Provider value={{favoritos, anadirFavorito, quitarFavorito}} >
            {children}
        </FavoritosContext.Provider>
    );

};

export const useFavoritos = () => useContext(FavoritosContext);


