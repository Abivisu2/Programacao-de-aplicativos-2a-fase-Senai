import { useState } from 'react'
import './ComparadorDeNumero.css'
import Titulo from '../components/Titulo'

let numeroDigitado

function ComparadorDeNumero() {

  const [resultado, setResultado] = useState("")
  const [numero, setNumero] = useState(null)

  function ConsultarNumero() {

    numeroDigitado = Number(prompt('Digite um número: '))
    
    if (isNaN(numeroDigitado)) {
      setResultado (`O caractere digitado não é um número!`)
      setNumero (null)
      return
    }
    
    setNumero (`Número digitado: ${numeroDigitado}`)
    
    if (numeroDigitado < 0) {
      setResultado (`O número digitado é um número negativo!`)
      
    }else if(numeroDigitado > 0){
      setResultado (`O número digitado é um número positivo!`)

    }else{
      setResultado (`O número digitado é um número nulo!`)
    }

  }

  return (
    <div className='div-Container'>

      
        <Titulo texto={"Programa que determina se um número é negativo, positivo ou nulo"} emoji={"2️⃣1️⃣0️⃣"}/>
     

      <h1>Acionar o botão abaixo ⬇⬇</h1>

      <div className="divBtnComparar">
      <button className='btnConsultarNumero' onClick={ConsultarNumero}>Consultar número</button>
      </div>

      <div className="numeroDigitado">
        {numero}
      </div>

      <div className="resultado">
        {resultado}
      </div>

    </div>
  )
}

export default ComparadorDeNumero
