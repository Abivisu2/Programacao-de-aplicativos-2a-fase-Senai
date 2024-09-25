import React, { useState } from 'react'

function Crescimento() {


  const [alturaUm, setAlturaUm] = useState ("")
  const [alturaDois, setAlturaDois] = useState ("")
  const [resultado, setResultado] = useState ("")



function coneferirDados() {
  
  let cont = 0

  while (alturaDois <= alturaUm) {

    alturaDois = alturaDois + 2
    alturaUm = alturaUm + 3
    cont ++
  }

  setResultado(cont)

}

    
  return (
    <div>


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
      
      <button onClick={coneferirDados}>conferir dados</button>

      {resultado}

    </div>
  )
}

export default Crescimento
