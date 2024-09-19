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
let mediaAlturasMulheres = 0
let mediaAlturasPopulacao = 0
let percentualHomens = 0

function adicionarDados() {
    
let alturaDigitada = Number(altura)
let generoDigitado = Number(genero)


maiorAltura = alturaDigitada
menorAltura = alturaDigitada

if (maiorAltura > altura) {

    setListaDados(maiorAltura)
    
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

        {listaDados}

    </div>
  )
}

export default PesquisaHabitantes
