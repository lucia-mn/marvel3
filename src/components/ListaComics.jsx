import React from 'react';

export const ListaComics = ({comics}) => {

  return (
    <div>
        {comics.map((comic) => (
            <div key={comic.id}>
                <img src={comic.image?.small_url} />
                <p>{comic.name}</p>
            </div>
        ))}
    </div>
  )
}
