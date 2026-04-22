import { TarjetaHeroe } from "./TarjetaHeroe";

export const ListaHeroes = ({characters}) => {

    return (
        <div>
            {ListaHeroes.map((heroe) => (
                <TarjetaHeroe key={heroe.id} character={heroe} />
            ))}
        </div>
    )

}