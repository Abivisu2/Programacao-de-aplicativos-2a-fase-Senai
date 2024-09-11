
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Contato from './pages/Contato'
import MeusLegos from './pages/MeusLegos'
import ExercicioManoJuca from './pages/ExercicioManoJuca'

function App() {
 
  const [pagina, setPagina] = useState (<Home/>)

  return (
    <>

      <ExercicioManoJuca/>

    {/* <nav className='container-nav'>

      <button onClick={() => setPagina(<Home/>)}>Home</button>
      <button onClick={() => setPagina(<Contato/>)}>Contato</button>
      <button onClick={() => setPagina(<MeusLegos/>)}>Meus Legos</button>

    </nav>

     {pagina} */}
     

    </>
  )
}

export default App
