
import { useState } from 'react'
import Titulo from '../components/Titulo'
import './Sorteio.css'

let sorteador
// let tamanhoDinossoura = 5

function Sorteio() {

const [numero, setNumero] = useState(0)

    function sortear(){

        sorteador = Math.floor (Math.random() * 101)
        setNumero(sorteador)

    }

        function aumentar(){

            setNumero(numero + 1)
            
        }

        function diminuir(){
            setNumero(numero - 1)
        }

        // if(sorteador == tamanhoDinossoura){
        //     alert(`Acertou, parabéns!\nO sorteador é: :  ${sorteador}`)
        // }else{
        //     alert(`Número errado!\nO sorteador é:  ${sorteador}`)
        // }

    

  return (

    <div className='container-sorteio'>
        <Titulo texto={"Sortedor de número de 1 a 100"} emoji={"🎲"}/>

        <button className='btnSortear' onClick={sortear}>Sortear número</button>
        
        <button className='aumentar' onClick={aumentar}>+</button>

        <div className="numeroSorteado">
        {numero}
        </div>

        <button className='diminuir' onClick={diminuir}>-</button>
        
        

    </div>
  )
}

export default Sorteio
