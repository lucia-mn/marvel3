import { TarjetaHeroe } from "./TarjetaHeroe";
import "../styles/ListaHeroes.css";

export const ListaHeroes = ({ characters }) => {

  return (

    <div className="lista-heroes">
      {characters.map((heroe) => (
        <TarjetaHeroe key={heroe.id} character={heroe} />
      ))}
    </div>

  );
};