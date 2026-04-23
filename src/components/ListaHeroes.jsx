import { TarjetaHeroe } from "./TarjetaHeroe";

export const ListaHeroes = ({ characters }) => {

  return (

    <div className="lista-heroes">
      {characters.map((heroe) => (
        <TarjetaHeroe key={heroe.id} character={heroe} />
      ))}
    </div>

  );
};