import { useState, useEffect } from "react"
import { getPokemon } from "../services/pokeapi"
import PokemonCard from "./PokemonCard"
export default function PokemonList(){
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        async function fetchData() {
            const data = await getPokemon(50)
            setPokemons(data)
        }
        fetchData()
    }
    ,[])
    return(
        <>
            <h3>Pokedex</h3>
             <>
            <h3>Pokedex</h3>
            <div className="row g-4">
                {pokemons.map(pokemon =>(
                    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                ))}
            </div>
        </>
        </>
    )
}