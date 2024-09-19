import React, { useState } from 'react'
import './Arcondicionado.css'

function Arcondicionado() {

    const [inputCelsius, setInputCelsius] = useState ("")
    const [inputFahrenheit, setinputFahrenheit] = useState ("")

    function mudarCelsius(event) {
        setInputCelsius(event.target.value)
        let f = event.target.value * 1.8 + 32
        setinputFahrenheit(f.toFixed(1))
    }

    function mudarFahrenheit(event) {
        setinputFahrenheit(event.target.value)
        let c = (event.target.value - 32) / 1.8 
        setInputCelsius(c.toFixed(1))
        
    }

  return (

    <div className='container-pagina'>

        <h1>Exercícios 5.27</h1>
    
        <p>5.27 - Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a ecolha, faça uma leitura e converta para a unidade escolhida.</p>

        <div className="forms-container">

            <div className="input-container">
                <label htmlFor="inputCel">Celsisus</label>
            
                    <input type="number"
                    id='inputCel'
                    value={inputCelsius}
                    onChange={mudarCelsius}
                />
            </div>
                <p>b</p>
            <div className="input-container">
                <label htmlFor="inputFah">Fahrenheit</label>
                    <input type="number"
                    id='inputFah'
                    value={inputFahrenheit}
                    onChange={mudarFahrenheit}
                    />
            </div>

        </div>
       
      
    </div>
  )
}

export default Arcondicionado
