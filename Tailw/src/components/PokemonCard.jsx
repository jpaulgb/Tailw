export default function PokemonCard({pokemon}){
    //<img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 mx-auto" />
    return(
        <div className="bg-white shadow-md rotate-lg overflow-hidden text-center p-4 transition hover:scale-105">
            
            <img className="card-img-top p-3" src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    )
}
