import { useState } from 'react'
import './PesquisaHabitantes.css'

function PesquisaHabitantes() {

    const [altura, setAltura] = useState()
    const [genero, setGenero] = useState()
    const [listaDados, setListaDados] = useState([])

let maiorAltura = 0
let menorAltura = 0
let masculino = 0 
let feminino = 1
let somaAlturasMulheres = 0
let totalMulheres = 0
let totalHomens = 0
let somaAlturasPopulacao = 0
let percentualHomens = 0

  

function adicionarDados() {

    
let alturaDigitada = Number(altura)
let generoDigitado = Number(genero)

if(listaDados.length < 10){
  setListaDados([...listaDados, {altura: alturaDigitada, genero: generoDigitado}])

  setAltura('')
  setGenero('')

}else{
  alert("Já foram adicionados os 10 habitantes!")
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

    somaAlturasPopulacao += listaDados.altura

    if(listaDados.genero === 1){
      somaAlturasMulheres += listaDados.altura
      totalMulheres++
    }else if(listaDados.genero === 0){
      totalHomens++
    }
  
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

        {listaDados}

    </div>
  )
}

export default PesquisaHabitantes
