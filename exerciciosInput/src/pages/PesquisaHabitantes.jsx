import { useState } from 'react'
import './PesquisaHabitantes.css'

function PesquisaHabitantes() {

    const [altura, setAltura] = useState()
    const [genero, setGenero] = useState()
    const [listaDados, setListaDados] = useState([])

function conferirdados() {
    
let alturaDigitada = Number(altura)
let generoDigitado = Number(genero)
let maiorAltura = 0
let menorAltura = 0
let masculino = 0 
let feminino = 1

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

        <button className='btn710Page' onClick={conferirdados}>Conferir dados</button>

        {listaDados}

    </div>
  )
}

export default PesquisaHabitantes
