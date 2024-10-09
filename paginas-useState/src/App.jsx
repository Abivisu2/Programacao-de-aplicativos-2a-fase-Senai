
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Contato from './pages/Contato'
import MeusLegos from './pages/MeusLegos'
import ExercicioManoJuca from './pages/ExercicioManoJuca'
import Login from './Login'
import Cadastro from './Cadastro'
import HomeCadastro from './HomeCadastro'

function App() {
 
  const [pagina, setPagina] = useState (<Home/>)
  const [PaginaInicial, setPaginaInicial] = useState(<HomeCadastro/>)

  return (
    <>

     {/* <ExercicioManoJuca/> */}

    {/* <nav className='container-nav'>

      <button onClick={() => setPagina(<Home/>)}>Home</button>
      <button onClick={() => setPagina(<Contato/>)}>Contato</button>
      <button onClick={() => setPagina(<MeusLegos/>)}>Meus Legos</button>

    </nav>

      {pagina} */}

      {/* <nav className='nav-btns'>

      <button onClick={() => setPaginaInicial(<HomeCadastro/>)}>Home Cadastro</button>
      <button onClick={() => setPaginaInicial(<Login/>)}>Logar</button>
      <button onClick={() => setPaginaInicial(<Cadastro/>)}>Cadastrar</button>

      </nav>

     {PaginaInicial}
      */}

    </>
  )
}

export default App
