import { useState } from 'react'
import './ConversaoTemperaturaInput.css'

function ConversaoTemperaturaInput() {

  const [inputCelsius, setinputCelsius] = useState ()
  return (
    <div>
      <label>Digite a temperatura em graus Celsius: </label>
      <input type="text" className='entrada' 
      value={inputCelsius}
      onChange={mudouCelsius}

      
      />

      <button>Converter</button>

    </div>
  )
}

export default ConversaoTemperaturaInput
