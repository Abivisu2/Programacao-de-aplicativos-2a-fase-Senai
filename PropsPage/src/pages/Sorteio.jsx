import Titulo from '../components/Titulo'
import './Sorteio.css'

let sorteador
let tamanhoDinossoura = 5
function Sorteio() {


    function sortear(){

    sorteador = Math.floor (Math.random() * 101)

        if(sorteador == tamanhoDinossoura){
            alert(`Acertou, parabéns!\nO sorteador é: :  ${sorteador}`)
        }else{
            alert(`Número errado!\nO sorteador é:  ${sorteador}`)
        }

    
    }
  return (

    <div className='container-sorteio'>
        <Titulo texto={"Sortedor de número de 1 a 100"} emoji={"🎲"}/>
        <button className='btnSortear' onClick={sortear}>Sortear número</button>
    </div>
  )
}

export default Sorteio
