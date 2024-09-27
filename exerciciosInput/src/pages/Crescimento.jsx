import React, { useState } from 'react'
import './Crescimento.css'

function Crescimento() {


  const [alturaUm, setAlturaUm] = useState ("")
  const [alturaDois, setAlturaDois] = useState ("")
  const [resultado, setResultado] = useState ("")


  
  function coneferirDados() {
    
    let cont = 0
    let valorUm = Number(alturaUm)
    let valorDois = Number(alturaDois)

 while(valorDois <= valorUm){

    valorUm += 2
    valorDois += 3
    cont++
}

  setResultado(`Enzo será mais alto que Valentina em ${cont} anos.`)

}

    
  return (
    <div className='div-container'>


      <label htmlFor="InptAlturaUm">Altura Valentina</label>
      <input type="number" 
      id='InptAlturaUm'
      value={alturaUm}
      onChange={(event) => setAlturaUm(event.target.value)}
      />

      <label htmlFor="InptAlturaDois">Altura Enzo</label>
      <input type="number" 
      id='InptAlturaDois'
      value={alturaDois}
      onChange={(event) => setAlturaDois(event.target.value)}
      />
      
      <button className='' onClick={coneferirDados}>conferir dados</button>

      {resultado}

    </div>
  )
}

export default Crescimento
