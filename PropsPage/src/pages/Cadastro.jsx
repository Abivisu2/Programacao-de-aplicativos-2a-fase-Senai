import './Cadastro.css'
import Titulo from '../components/Titulo'



function Cadastro() {

    function cadastrar(){
        alert("Bom dia")
    }
  return (
    <div className='Container-cadastro'>

      <Titulo texto={"Cadastro"} emoji={"👀"}/>

      <label className='labels'>Nome</label>  
      <input className='inputs' type="text" />

      <label className='labels'>Altura</label>  
      <input className='inputs' type="text" />

      <button className='btnCadastrar' onClick={cadastrar}>Cadastrar</button>
    </div>

    
  )
}

export default Cadastro
