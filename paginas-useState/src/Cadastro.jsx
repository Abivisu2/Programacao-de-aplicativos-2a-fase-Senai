import { useState } from 'react'
import './Cadastro.css'
import Titulo from './components/Titulo'

function Cadastro() {

  let listaDados = [{}]

  const [nomeDigitado, setNomeDigitado] = useState()
  const [idadeDigitada, setIdadeDigitada] = useState()
  const [dados, setDados] = useState()


  function atualizarNome(event) {

    setNomeDigitado(event.target.value)
    
  }
  
  function atualizarIdade(event) {
    
    setIdadeDigitada(event.target.value)

  }

  function cadastarUsuario() {
    
    setDados(`Nome digitado: ${nomeDigitado}, idade: ${idadeDigitada}`)

  }

  return (

    <div>

      <Titulo texto={"Página que permite o usuário se cadastrar"} emoji={"🎈"}/>

      <div className="sub-title">
        <h1>Bora fazer seu cadastro 👻</h1>
      </div>

      <div className="div-dados">

      <label>Qual é o seu nome?</label>
      <input type="text" 
      value={nomeDigitado}
      placeholder='Digite seu nome'
      onChange={atualizarNome}
      />

      <label>Quantos anos você tem?</label>
      <input type="text" 
      value={idadeDigitada}
      placeholder='Digite sua idade'
      onChange={atualizarIdade}
      />

      </div>

      <div className="div-btn-cadastrar">

        <button className="btn-cadastrar" onClick={cadastarUsuario}>Cadastrar</button>

      </div>
      

      {dados}
    </div>
  )
}

export default Cadastro
