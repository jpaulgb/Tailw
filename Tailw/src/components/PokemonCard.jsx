export default function PokemonCard({pokemon}){
    //<img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 mx-auto" />
    // <img className="card-img-top p-3" src={pokemon.sprites.front_default} alt={pokemon.name} />
    return(
        <div className="bg-white shadow-md rotate-lg overflow-hidden text-center p-4 transition hover:scale-105">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 mx-auto"/>        
           <h1>{pokemon.name}</h1>
           <h2>{pokemon.habilities}</h2>
        </div>
    )
}
