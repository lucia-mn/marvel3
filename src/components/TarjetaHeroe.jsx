import React from 'react';

export const TarjetaHeroe = ({ characters}) => {

  return (
    <>
        <div className="contenedor">
            {characters && characters.map(character => {

            return (
                <article className="contenedor-tarjeta" key={character.id}>

                    <div className="character-img">

                        {/* img */}
                        {character.image && (
                            <img 
                            src={character.image.original_url || character.image.screen_url} 
                            className="img" 
                            alt={character.name} 
                            />
                        )}
                    </div>

                        
                    <div className="character-name">
                    {/* nombre */}
                    {character.real_name && (
                        <small className="name"> ({character.real_name})</small>
                    )}
                    </div>

                    {/* descripcion */}
                    {/* <div className="descripcion">
                    <p>{character.deck || "Sin descripción"}</p>
                    </div> */}

                </article>
            );
            })}
        </div>

    </>
  )
}
