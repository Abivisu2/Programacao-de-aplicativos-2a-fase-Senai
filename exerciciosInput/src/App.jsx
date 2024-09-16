
import React, { useState } from 'react'
import Arcondicionado from './pages/Arcondicionado'
import PorquinhoInput from './PorquinhoInput'
import './App.css'

function App() {

  const [pagina, setPagina] = useState ()
  return (
    <div>

    <nav className='nav-bar'>

      <button className='btn527' onClick={() => setPagina(<Arcondicionado/>)}>5.27</button>
      <button className='btn525' onClick={() => setPagina(<PorquinhoInput/>)}>5.25</button>
    
    </nav>
      {/* <Arcondicionado/> */}

      {pagina}
      
    </div>
  )
}

export default App
