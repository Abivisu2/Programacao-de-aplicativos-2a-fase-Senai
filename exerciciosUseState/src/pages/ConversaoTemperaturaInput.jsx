import { useState } from 'react'
import './ConversaoTemperaturaInput.css'
import Titulo from '../components/Titulo'

function ConversaoTemperaturaInput() {

  const [inputCelsius, setinputCelsius] = useState ()
  const [resultadoFinal, setResultadoFinal] = useState ()

  function mudouCelsius(event) {
    setinputCelsius(event.target.value)
  }

  function converterTemperatura() {

    let temperaturaConvertida = (inputCelsius) * 1.8 + 32;
    setinputCelsius(`${inputCelsius}`);
    setResultadoFinal(
      `O valor digitado, ${inputCelsius} Celsius, convertidos em Fahrenheit é: ${temperaturaConvertida.toFixed(0)} F`
    );
    
  }

  return (
    <div className='div-container'>

      <Titulo texto={"Ar condicionado, versão input!"} emoji={"🥶"}/>
      
    <div className="div-input">
      <label className='subtitlePage'>Digite a temperatura em graus Celsius: </label>

      <input type="text" className='input-entrada' 
      value={inputCelsius}
      onChange={mudouCelsius}
      />
    </div>

      <div className="btnConversor">
      <button className='btnConverter' onClick={converterTemperatura}>Converter</button>
      </div>

      <div className="div-valorDigitado">
        <p className="valorDigitado">Valor digitado: {inputCelsius}</p>
      </div>

      <div className="resultadoDaConversao">{resultadoFinal}</div>

    </div>
  )
}

export default ConversaoTemperaturaInput
