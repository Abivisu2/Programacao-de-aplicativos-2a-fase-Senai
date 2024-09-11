
import { useState } from 'react'
import './App.css'
import OiUsuario from './components/OiUsuario'
import AreaParaAdulto from './components/AreaParaAdulto';
import Login from './components/Login';

function App() {
 
  const [logado, setLogado] = useState (false);
  const [idade, setIdade] = useState (0)

  function logar() {

    setLogado(true)
    
  }

  return (
    <>

    <div className="render-container">      

      <button onClick={logar}>logar</button>
      <button onClick={ () => {setLogado(false)} }>Deslogar</button>
      <button onClick={ () => setLogado(!logado) }>Alternar</button>
       { logado && <OiUsuario/>}

    </div>

    <div className="render-container">

      

      <button onClick={() => setIdade(idade - 1)}>-</button>
      { idade}
      <button onClick={() => setIdade(idade + 1)}>+</button>

      { idade >= 18 && <AreaParaAdulto/>}

    </div>

    <div className="render-container">

      {/* Funciona como uma condição, se o usuário estiver logado, apresenta/lê o componente depois da interrogação no caso o OiUsuario e se não estiver logado, apresenta o que vem depois dos dois pontos :, no caso o componente Login. */}
      
      { logado === true ? <OiUsuario/> : <Login/>}

    </div>
      
    </>
  )
}

export default App
