import React from 'react'
import './ExercicioAula.css'
import { useState } from 'react'
import Titulo from '../components/Titulo'

let preco
let moedasUm

function ExercicioAula() {

    
    const [resultado, setResultado] = useState()

    function rodar525(){

        preco = Number(prompt("Qual é o valor do produto?"))        
        moedasUm = Number(prompt("Quantas moedas de R$1,00?")) 
               

    }


  return (

    <div> 

        <Titulo texto={"Exercícios"} emoji={"💡"}/>
        <button onClick={rodar525}>Exercício 5.25</button>

    </div>
  )
}

export default ExercicioAula
