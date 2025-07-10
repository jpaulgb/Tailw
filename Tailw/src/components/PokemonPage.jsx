import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, } from "react"; 
import { getPokemonByName } from "../services/pokeapi";
export default function PokemonPage(){
    const { name } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState("carga");
    let types = ""
    useEffect(()=>{
        async function fetchData() {
            const data = await getPokemonByName(name)
            setPokemon(data)
        }
        fetchData()
    }, [name])
    if(!pokemon){
        return(
             <div className="text-center">
               404 Pokemon no encontrado
               <button onClick={()=>navigate(-1)} className="mt-6 bg-red-600 hover:bg-red-700 text-black">volver</button>
        </div>
        )
    } else if (pokemon == "carga") {
        return <div className="text-center">cargando</div>
    } else if (pokemon != "carga"){
        for(let i=0;i<pokemon.types.length;i++){
            types = types + pokemon.types[i].type.name + " "
            console.log(pokemon.stats[0].stat.name)
        }
    }
       return(
        <div className="max-w-md mx-auto p-4 text-center">
            <h1 className="text-3x1  mx-auto p-4 text-center">{pokemon.name}</h1>
            <h3>{types}</h3>
                <button onClick={()=>navigate(-1)} className="mt-6 bg-red-600 hover:bg-red-700 text-black">volver</button>
        </div>
       )
    }

