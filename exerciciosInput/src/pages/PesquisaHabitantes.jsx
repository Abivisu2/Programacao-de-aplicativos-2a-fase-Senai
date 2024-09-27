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
let menorAltura = 0
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


if(listaDados.length < 3){
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
  console.log(somaAlturasMulheres)
  console.log(totalMulheres)

    mediaAlturasMulher = somaAlturasMulheres / totalMulheres
    mediaAlturaPopulacao = somaAlturasPopulacao / listaDados.length
    percentualHomens = (totalHomens / listaDados.length ) * 100

    setRelatorio("Media de altura das mulheres: " + mediaAlturasMulher + ' Media altura Pupulação' + mediaAlturaPopulacao + ' Percentual de Homens' + percentualHomens + 'Menor altura' + menorAltura + 'maior altura' + maiorAltura)   

  }


}

  return (

    <div>

        <h1>7.10 - Pesquisa habitantes</h1>

        <div className="dadosDigitados">
            <label htmlFor="inptAltura">Altura</label>
            <input type="number" 
            id='inptAltura'
            value={altura}
            onChange={(event) => setAltura(event.target.value)}
            />

            <label htmlFor="inptGenero">Gênero</label>
            <input type="number" 
            id='inptGenero'
            value={genero}
            onChange={(event) => setGenero(event.target.value)}
            />
    
        </div>

        <button className='btn710Page' onClick={adicionarDados}>Adicionar dados</button>
        <button onClick={calcularDados}>calculcular dados</button>

        {relatorio}

    </div>
  )
}

export default PesquisaHabitantes
