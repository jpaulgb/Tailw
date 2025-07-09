import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PokemonCard from './components/PokemonCard.jsx'
import PokemonList from './components/PokemonList.jsx'
import './index.css'
import App from './App.jsx'

/*
 
   
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
  </StrictMode>,
)
