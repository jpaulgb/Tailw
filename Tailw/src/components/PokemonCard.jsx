export default function PokemonCard({pokemon}){
    //<img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 mx-auto" />
    // <img className="card-img-top p-3" src={pokemon.sprites.front_default} alt={pokemon.name} />

    /*
stench
           nombre de tipo
           stack, back stack 48
           
           array
           recorrer con map

grass
poison
Array.prototype.map() 
*/

//api



    return(
        <div className="bg-amber-600 hover:bg-red-600 border-2 rounded-md border-solid shadow-md rotate-lg overflow-hidden text-center p-4 transition hover:scale-105 hover:shadow-xd">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-50 h-50 mx-auto"/>        
           <h1 className="font-mono">{pokemon.name}</h1>
           <h3 className="font-mono">Id: {pokemon.id}</h3>
           <h3>{pokemon.forms.name}</h3>
           <div></div>
           <button class="bg-amber-300 p-6 m-0.5 border-2 rounded-md shadow-lg hover:scale-105 hover:bg-amber-400 shadow-amber-500/50">Click</button>
            <button class="bg-amber-300 p-6 m-0.5 border-2 rounded-md shadow-lg hover:scale-105 hover:bg-amber-400 shadow-amber-500/50">boton 2</button>
        </div>
    )
}
