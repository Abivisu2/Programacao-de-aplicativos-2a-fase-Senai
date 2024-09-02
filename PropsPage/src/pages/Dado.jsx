import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa6";
import React, { useState } from 'react'
import Titulo from '../components/Titulo'
import './Dado.css'

let numero

const dados = [<FaDiceOne />, <FaDiceTwo />, <FaDiceThree />, <FaDiceFour />, <FaDiceFive />, <FaDiceSix />]

function Dado() {

    // const [numeroSorteado, setNumeroSorteado] = useState()
    const [dado, setDado] = useState()

    function jogarDado(){

        numero = Math.floor (Math.random() * 6 )
        // setNumeroSorteado(numero)
        setDado(dados[numero])

        
        // if(numero == 1){
        //     setNumeroSorteado(<FaDiceOne />)
        // }
        // else if(numero == 2){
        //     setNumeroSorteado(<FaDiceTwo />)
        // }
        // else if(numero == 3){
        //     setNumeroSorteado(<FaDiceThree />)
        // }
        // else if(numero == 4){
        //     setNumeroSorteado(<FaDiceFour />)
        // }
        // else if(numero == 5){
        //     setNumeroSorteado(<FaDiceFive />)
        // }
        // else if(numero == 6){
        //     setNumeroSorteado(<FaDiceSix /> )
        // }


    }

  return (
    <div className='div-containerJogarDado'>

    <Titulo texto={"Dado"} emoji={"🎲"}/>

     <div className="dados">
        <FaDiceOne />
        <FaDiceTwo />
        <FaDiceThree />
        <FaDiceFour />
        <FaDiceFive />
        <FaDiceSix /> 
        </div>    

    <button className='btnJogarDado' onClick={jogarDado}>jogar Dado</button>

    <div className="div-dadoSorteado">
        {/* {numeroSorteado} */}
        {dado}

    </div>
      
    </div>
  )
}

export default Dado
