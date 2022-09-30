import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home /> }/>
          <Route element={<ProtectedRoutes />}>
              <Route path='/pokedex' element={<Pokedex />} />
              <Route path='/pokedex/:name' element={<PokemonDetails />} />
              
          </Route> 

        
      </Routes>
    </div>
  )
}

export default App
