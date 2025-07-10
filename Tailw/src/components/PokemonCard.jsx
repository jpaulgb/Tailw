import {Link} from "react-router-dom"
export default function PokemonCard({pokemon}){
    return(
        
        <Link to={`/pokemon/${pokemon.name}`}>
        <div className="bg-amber-600 hover:bg-red-600 border-2 rounded-md border-solid shadow-md rotate-lg overflow-hidden text-center p-4 transition hover:scale-105 hover:shadow-xd">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-50 h-50 mx-auto"/>        
        </div>
        <h2 className="font-bold mt-2">{pokemon.name}</h2>
        </Link>
    )
}
