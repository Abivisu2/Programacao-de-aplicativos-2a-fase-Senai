import React, { useState } from 'react'
import './ExercicioManoJuca.css'

function ExercicioManoJuca() {

    const [numeroDeDias, setNumeroDedias ] = useState ()
    const [valorFinal, setValorFinal] = useState ()

    function atualizarNumero(event) {

        setNumeroDedias(event.target.value)
        
    }

    function calcularVALOR() {

        
        
    }

  return (
    <div>

        <input type="text"
        
        value={numeroDeDias}
        onChange={atualizarNumero}
        />

        <button className="btnCalcular-Valor" onClick={calcularVALOR}>Calcular valor</button>
      
    </div>
  )
}

export default ExercicioManoJuca
