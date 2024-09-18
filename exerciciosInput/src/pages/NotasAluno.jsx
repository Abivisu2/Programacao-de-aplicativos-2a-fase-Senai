import { useState } from 'react'
import './NotasAluno.css'

function NotasAluno() {

  const [notaUm, setNotaUm] = useState ("")
  const [notaDois, setNotaDois] = useState ("")
  const [resultadoMedia, setResultadoMedia] = useState ("")
  const [relatorio, setRelatorio] = useState ("")
  
function calcularMedia() {

  let nota1 = Number(notaUm)
  let nota2 = Number(notaDois)

  if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    setRelatorio("Notas inválidas. Insira valores entre 0 e 10.")
    setResultadoMedia("")
    return
  }
  
  let media = (nota1 + nota2) / 2

  if (media > 9 && media <= 10) {
    setRelatorio(media)
    setResultadoMedia(`A`)
  }
  else if(media > 7.5 && media <= 9){
    setRelatorio(media)
    setResultadoMedia(`B`)
  }
  else if(media > 6 && media <= 7.5){
    setRelatorio(media)
    setResultadoMedia(`C`)
  }
  else if(media > 4 && media <= 6){
    setRelatorio(media)
    setResultadoMedia(`D`)
  }
  else if(media >= 0 && media <= 4){
    setRelatorio(media)
    setResultadoMedia(`E`)
  }

}

  return (

    <div>

    <h1>5.24 - Média aluno</h1>

    <p>Faça um programa que leia duas notas parciais obtidas por um 
    aluno qualquer numa disciplina qualquer ao longo de um semestre 
    qualquer, e calcule a sua média. De posse da média, esta deve ser 
    convertida em conceito que é o novo hype do momento na educação!
    A conversão deve seguir a regra descrita abaixo: <br />
    Nota Conceito <br />
    Entre ]9.0[ e [10.0] A <br />
    Entre ]7.5[ e [9.0] B  <br />
    Entre ]6.0[ e [7.5] C <br />
    Entre ]4.0[ e [6.0] D <br />
    Entre [0.0] e [4.0] E <br />
    O resultado deste programa deve ser um relatório contendo as notas do 
    aluno, sua média e o conceito atingido. </p>

    <div className="forms-container">

      <div className="container-input">
        <label htmlFor="inputNotaUm">Nota 1</label>
        <input type="number" 
        id='inputNotaUm'
        value={notaUm}
        onChange={(event) => setNotaUm(event.target.value)}
        />

        <label htmlFor="inputNotaDois">Nota 2</label>
        <input type="number" 
        id='inputNotaDois'
        value={notaDois}
        onChange={(event) => setNotaDois(event.target.value)}
        />
      </div>

    </div>
    
<div className="resultados">
  
      <button className='btn524' onClick={calcularMedia}>Calcular média</button>
  
      {relatorio && (
  
      <p>Notas do aluno: <br />
      Nota 1: {notaUm} e Nota 2: {notaDois} <br />
      Média do aluno: {relatorio} <br />
      O conceito atingido foi: {resultadoMedia}
      </p>
  
      )}
</div>
      
    </div>
  )
}

export default NotasAluno
