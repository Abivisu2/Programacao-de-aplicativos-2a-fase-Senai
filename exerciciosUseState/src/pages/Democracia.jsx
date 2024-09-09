
import { useState } from 'react'
import './Democracia.css'

//5.28 - DEMOcracia: faça um programa que leia a idade dos candidatos à presidência e de seus vices e depois indique qual chapa acumula mais experiência. Considere que estamos no segundo turno, com duas chapas candidato+vice.

let idadeCandidatoUm, idadeCandidatoDois
let idadeViceUmDigitada, idadeViceDoisDigitada
let somaIdadesCanditadoUm, somaIdadesCanditadoDois

function Democracia() {
  
  const [resultado, setResultado] = useState ("")
  const [idadeCanditaUm, setIdadeCandidatoUm] = useState ("")
  const [idadeCanditaDois, setIdadeCandidatoDois] = useState ("")
  const [idadeViceUm, setIdadeViceUm] = useState ("")
  const [idadeViceDois, setIdadeViceDois] = useState ("")
  
  function consultarExperiencia() {
    
    idadeCandidatoUm = Number(prompt('Digite a idade do primeiro candidato: '))
    idadeViceUmDigitada = Number(prompt('Digite a idade do Vice do primeiro candidato: '))
    setIdadeCandidatoUm (idadeCandidatoUm)
    setIdadeViceUm (idadeViceUmDigitada)
  
    idadeCandidatoDois = Number(prompt('Digite a idade do segundo candidato: '))
    idadeViceDoisDigitada = Number(prompt('Digite a idade do Vice do segundo candidato: '))
    setIdadeCandidatoDois (idadeCandidatoDois)
    setIdadeViceDois (idadeViceDoisDigitada)
  
    somaIdadesCanditadoUm = (idadeCandidatoUm + idadeViceUmDigitada) / 2
    somaIdadesCanditadoDois = (idadeCandidatoDois + idadeViceDoisDigitada) / 2
  
    if (somaIdadesCanditadoUm > somaIdadesCanditadoDois) {
      
      setResultado (`A chapa que acumula mais experiência é a chapa 1`)
  
    }else if(somaIdadesCanditadoDois > somaIdadesCanditadoUm){
      setResultado (`A chapa que acumula mais experiência é a chapa 2`)
  
    }else{
      setResultado (`As duas chapas acumulam o mesmo tempo de experiência`)
    }

  }


  return (
    <div className='div-Container'>

      <h1>Democracia</h1>
      
<div className="conteudoInicial">
      <p>faça um programa que leia a idade dos candidatos à presidência e de seus vices e depois indique qual chapa acumula mais experiência. Considere que estamos no segundo turno, com duas chapas candidato+vice.</p>
</div>

      <button className='btnConsultar' onClick={consultarExperiencia}> Consultar experiência</button>

      <div className="idadesCandidatosUm">
        <p>Idade primeiro candidato: {idadeCanditaUm}</p> 
        <p>Idade do primeiro Vice: {idadeViceUm}</p> 
      </div>

      <div className="idadesCandidatosDois">
        <p>Idade do segundo canditado: {idadeCanditaDois}</p>  
        <p>Idade do segundo Vice: {idadeViceDois}</p> 
      </div>

        <h2 className='subtitulo'>Resultado da chapa com maior experiência</h2>

      <div className="resultado">
        {resultado}
      </div>
      
    </div>
  )
}

export default Democracia
