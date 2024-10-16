import React, { useState } from 'react'
import './Crescimento.css'

function Crescimento() {


  const [alturaUm, setAlturaUm] = useState ("")
  const [alturaDois, setAlturaDois] = useState ("")
  const [resultado, setResultado] = useState ("")
  const [nomeUm, setNomeUm] = useState ("")
  const [nomeDois, setNomeDois] = useState ("")


  
  function coneferirDados() {
    
    let cont = 0
    let valorUm = Number(alturaUm)
    let valorDois = Number(alturaDois)
    let primeiroNome = nomeUm
    let segundoNome = nomeDois

 while(valorDois <= valorUm){

    valorUm += 0.02
    valorDois += 0.03
    cont++
  }

  setNomeUm(primeiroNome)
  setNomeDois(segundoNome)
  setResultado(`${segundoNome} será mais alto que ${primeiroNome} em ${cont} anos.`)

}

    
  return (
    <div className='div-container'>

        <div className="conteudo-exercicio">
          <p>Valentina, a irmã do Mano Juca tem 1.50m e cresce 2 centímetros por ano, 
            enquanto Enzo, o irmão mais novo, tem 1.40m e cresce 3 centímetros por 
            ano. Crie um programa/script/algoritmo que mostre quando Enzo será mais 
            alto que Valentina.
          </p>
        </div>

      <div className="dados-PrimeiraPessoa">

        <div className="divDadosPessoas">

          <label htmlFor="LabelNome1">Digite o primeiro nome</label>
          <input type="text"
          className='inpt' 
          id='LabelNome1'
          value={nomeUm}
          onChange={(event) => setNomeUm(event.target.value)}
          />

        </div>

        <div className="divDadosPessoas">

          <label htmlFor="InptAlturaUm">Altura 1</label>
          <input type="number" 
          className='inpt'
          id='InptAlturaUm'
          value={alturaUm}
          onChange={(event) => setAlturaUm(event.target.value)}
          />

        </div>

      </div>


      <div className="dados-segundaPessoa">


        <div className="divDadoPessoa2">
          <label htmlFor="LabelNome2">Digite o segundo nome</label>
          <input type="text"
          className='inpt'
          id='LabelNome2'
          value={nomeDois}
          onChange={(event) => setNomeDois(event.target.value)}
          />
        </div>

        <div className="divDadoPessoa2">
          <label htmlFor="InptAlturaDois">Altura 2</label>
          <input type="number"
          className='inpt'
          id='InptAlturaDois'
          value={alturaDois}
          onChange={(event) => setAlturaDois(event.target.value)}
          />
        </div>

      </div>
        
      <div className="div-button">
        <button className='button' onClick={coneferirDados}>conferir dados</button>
      </div>

      {resultado}

    </div>
 
  )
}

export default Crescimento
