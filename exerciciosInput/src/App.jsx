
import React, { useState } from 'react'
import Arcondicionado from './pages/Arcondicionado'
import PorquinhoInput from './PorquinhoInput'
import './App.css'
import Comerciante from './pages/Comerciante'
import NotasAluno from './pages/NotasAluno'
import PesquisaHabitantes from './pages/PesquisaHabitantes'
import Crescimento from './pages/Crescimento'

function App() {

  const [pagina, setPagina] = useState ()
  return (
    <div>

    <nav className='nav-bar'>

      <button className='btn527' onClick={() => setPagina(<Arcondicionado/>)}>5.27</button>
      <button className='btn525' onClick={() => setPagina(<PorquinhoInput/>)}>5.25</button>
      <button className='btn523' onClick={() => setPagina(<Comerciante/>)}>5.23</button>
      <button className='btn524' onClick={() => setPagina(<NotasAluno/>)}>5.24</button>
      <button className='btn710' onClick={() => setPagina(<PesquisaHabitantes/>)}>7.10</button>
      <button className='btn711' onClick={() => setPagina(<Crescimento/>)}>7.11</button>
    
    </nav>

      {pagina}
      
    </div>
  )
}

export default App
