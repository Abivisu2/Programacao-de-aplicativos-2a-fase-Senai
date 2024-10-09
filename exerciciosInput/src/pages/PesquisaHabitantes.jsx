import { useEffect, useState } from 'react'
import './PesquisaHabitantes.css'

function PesquisaHabitantes() {

  
  
  const [altura, setAltura] = useState('')
  const [genero, setGenero] = useState('')
  const [listaDados, setListaDados] = useState([])
  const [relatorio, setRelatorio] = useState("")
  
  useEffect( () => {
    console.log(listaDados);
  } ,[listaDados])
  
let maiorAltura = 0
let menorAltura = 1000
let masculino = 0 
let feminino = 1
let somaAlturasMulheres = 0
let somaAlturasPopulacao = 0
let totalMulheres = 0
let totalHomens = 0
let percentualHomens 
let mediaAlturasMulher
let mediaAlturaPopulacao



function adicionarDados() {

let alturaDigitada = Number(altura)
let generoDigitado = Number(genero)


if(listaDados.length < 2){
  setListaDados([...listaDados , {altura: alturaDigitada , genero: generoDigitado}])

  setAltura('')
  setGenero('')

}else{
  alert("Já foram adicionados os 10 habitantes!")
  calcularDados()
}

}

function calcularDados() {
  
  for(let i = 0; i < listaDados.length; i++){
  
    if (listaDados[i].altura > maiorAltura) {
      maiorAltura = listaDados[i].altura
     
    }
    if(listaDados[i].altura < menorAltura){
      menorAltura = listaDados[i].altura
    }

    somaAlturasPopulacao += listaDados[i].altura

    if(listaDados[i].genero === feminino){
      somaAlturasMulheres += listaDados[i].altura
      totalMulheres++
    }else if(listaDados[i].genero === masculino){
      totalHomens++
    }

    mediaAlturasMulher = somaAlturasMulheres / totalMulheres
    mediaAlturaPopulacao = Number(somaAlturasPopulacao / listaDados.length).toFixed(2)
    percentualHomens = (totalHomens / listaDados.length ) * 100


    setRelatorio(`Média de altura das mulheres: ${mediaAlturasMulher}
    Media da altura da população: ${mediaAlturaPopulacao}
    Percentual de homens na população: ${percentualHomens} %
    Menor altura: ${menorAltura}
    Maior altura: ${maiorAltura}
    `)

  }


}

  return (

    <div className='div-container'>

        <h1 className='title-page'>7.10 - Pesquisa habitantes</h1>

      <div className="inpts">

        <div className="dadosDigitados">
            <label htmlFor="inptAltura" className='title-inpt'>Altura</label>
            <input className='inputs' type="number" 
            id='inptAltura'
            value={altura}
            onChange={(event) => setAltura(event.target.value)}
            />
        </div>

        <div className="dadosDigitados2">
            <label htmlFor="inptGenero" className='title-inpt'>Gênero</label>
            <input className='inputs' type="number" 
            id='inptGenero'
            value={genero}
            onChange={(event) => setGenero(event.target.value)}
            />
        </div>

      </div>
    
      <div className="div-btns">
        <button className='btn710Page' onClick={adicionarDados}>Adicionar dados</button>
        <button className='btn710Page' onClick={calcularDados}>calculcular dados</button>
      </div>

        {relatorio}

    </div>
  )
}

export default PesquisaHabitantes
