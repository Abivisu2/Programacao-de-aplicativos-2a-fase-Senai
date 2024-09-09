import { useState } from 'react'
import './NumeroParEpositivo.css'

//5.30 - Dois copos meio cheios: Faça um programa para ler um número e imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo tempo.

let numeroDigitado

function NumeroParEpositivo() {

  const [numeroDig, setNumeroDig] = useState (null)
  const [resultado, setResultado] = useState ("")

  function consultarNumero() {

  numeroDigitado = Number(prompt('Digite um número: '))
    
  if (isNaN(numeroDigitado)) {
    setResultado(`O caractere digitado não é um número!`)
    setNumeroDig(null)
    return
  }

  setNumeroDig (`Número digitado: ${numeroDigitado}`)

  if (numeroDigitado % 2 === 0 && numeroDigitado > 0){
    setResultado (`O número digitado ${numeroDigitado}, é par e positivo!`)
    
  }else if(numeroDigitado < 0){
    setResultado (`O número digitado ${numeroDigitado}, é negativo!`)

  }else if(numeroDigitado === 0){
    setResultado (`O número digitado ${numeroDigitado}, é nulo!`)

  }else{
    setResultado (`O número digitado ${numeroDigitado}, é ímpar!`)
  }

  }



  return (
    <div className='div-Container'>

      <h1>Programa para saber se o número é par e positivo</h1>

      <div className="divBtn">
        <button className="btnConsultar" onClick={consultarNumero}>Consultar número</button>
      </div>

      <div className="numeroDigitado">
        {numeroDig}
      </div>

      <div className="resultado">
        {resultado}
      </div>
      
    </div>
  )
}

export default NumeroParEpositivo
