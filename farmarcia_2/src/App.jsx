
import { useState } from 'react'
import './App.css'



function App() {

  const [fila, setFila] = useState([])
  const [filaPreferencial, setFilaPreferencial] = useState([])
  const [contador, setContador] = useState (1)

  
function gerarSenha(){

  let senha = {

    numero : contador,
    tipo : "Normal",

  }

  setContador(contador + 1)

  setFila([...fila, senha])

  }

  function gerarSenhaPreferencial() {

    let senha_preferecial = {
      numero : contador,
      tipo : "Preferencial"

    }

    setContador(contador + 1)

    setFilaPreferencial([...filaPreferencial, senha_preferecial])
    
  }

  function atender() {

    if (filaPreferencial.length) {
      
        alert(filaPreferencial[0].numero)
        setFilaPreferencial(filaPreferencial.slice(1))  
      
    }else if(fila.length){

      alert(fila[0].numero)
      setFila(fila.slice(1))

    }else{

      alert("Não tem ninguém na fila!")

    }
    
  }


  return (

    <div>

      <button onClick={atender}>atender</button>

      <button onClick={gerarSenha}>Senha normal</button>

      <button onClick={gerarSenhaPreferencial}>Senha Preferencial</button>

     

      {filaPreferencial.map((senha_preferecial) => (


        <div key={senha_preferecial.numero}>
          <p>{senha_preferecial.numero}</p>
          <p>{senha_preferecial.tipo}</p>

        </div>

      ))}

       {fila.map((senha) => (

        <div key={senha.numero}>
          <p>{senha.numero}</p>
          <p>{senha.tipo}</p>

        </div>

      ))}
      
    </div>
  )
}

export default App
