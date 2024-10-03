
import { useState } from 'react'
import './App.css'
import Camisetas from './Camisetas.jsx'



function App() {

  const [fila, setFila] = useState([])
  const [filaPreferencial, setFilaPreferencial] = useState([])
  const [contador, setContador] = useState(1)
  const [mostrarCamisetas, setMostrarCamisetas] = useState(false)
  const [pessoaEmAtendimento, setPessoaEmAtendimento] = useState(0)

  
function gerarSenha(){

  let senha = {

    numero : contador,
    tipo : "Normal",

  }

  setContador(contador + 1)

  setFila([...fila, senha])

  }

  function gerarSenhaPreferencial() {

    let senha_preferecial = {
      numero : contador,
      tipo : "Preferencial"

    }

    setContador(contador + 1)

    setFilaPreferencial([...filaPreferencial, senha_preferecial])
    
  }

  function atender() {

    if (filaPreferencial.length) {
      
      setPessoaEmAtendimento(filaPreferencial[0].numero)
        setFilaPreferencial(filaPreferencial.slice(1))  
      
    }else if(fila.length){

      setPessoaEmAtendimento(fila[0].numero)
      setFila(fila.slice(1))

    }else{

      setPessoaEmAtendimento("Não tem ninguém na fila!")

    }
    
  }


  return (

    <div className='div-container'>

      <div className='div-titulo'>
        <img className='imgLogoPequena' src="public/images/farmarcia-logo-pq.PNG.png" alt="" />
        <h1 className='titulo-pagina'>Farmárcia mais saúde</h1>
        <img className='imgPlaca' src="public/images/farmarcia-placa.PNG.png" alt="" />
      </div>

      <div className='div-texto'>
        <p className='paragrafo'>A <strong>Farmárcia</strong> é a mais nova opção de farmácia da cidade, criada com o compromisso de oferecer saúde e bem-estar para toda a comunidade. Nosso foco é garantir um atendimento de qualidade, produtos farmacêuticos de excelência e um ambiente acolhedor para nossos clientes. Cuidamos da sua saúde, oferecemos orientação especializada e outros produtos como: camisetas. Venha nos conhecer e descubra uma nova experiência em farmácia!</p>
      </div>

    <div>
      <img className="imagem-maior" src="public/images/farmarcia.PNG.png" alt="imagem_principal" />
    </div>
      
    <div className='div-btns'>

      <button className='btns' onClick={gerarSenha}>Senha normal</button>
      <button className='btns' onClick={gerarSenhaPreferencial}>Senha Preferencial</button>
      <button className='btns' onClick={atender}>Atender</button>

    </div>

    <div className="pessoaEmAtendimento">
      {'Pessoa em Atendimento: '+pessoaEmAtendimento}
    </div>

    <div className="senhas-apresentadas">

      {filaPreferencial.map((senha_preferecial) => (


        <div key={senha_preferecial.numero}>
          <p>{senha_preferecial.numero} ---- {senha_preferecial.tipo}</p>
        </div>

      ))}

       {fila.map((senha) => (

        <div key={senha.numero}>

          <p>{senha.numero} ---- {senha.tipo}</p>
          {/* <p>{senha.numero}</p>
          <p>{senha.tipo}</p> */}

        </div>

      ))}
  
    </div>

    <div className="produtos">

      <button className='btnCamisetas' onClick={() => setMostrarCamisetas(!mostrarCamisetas)}>
        {mostrarCamisetas ? 'Esconder Camisetas ' : 'Mostrar Camisetas'}
      </button>

    </div>

    <div className='camisetasPromo'>
    {mostrarCamisetas && <Camisetas/>}
    </div>

    <div className='rodape'>

      <p className='texto-contato'>  
        <u>Contatos</u><br />
      <img className='redes' src="public/icons/devicon--facebook.svg" alt="" />
      <img className='redes' src="public/icons/skill-icons--instagram.svg" alt="" />

      <a href="https://www.linkedin.com/in/ab%C3%ADlio-alfredo-francisco/">
      <img className='redes' src="public/icons/skill-icons--linkedin.svg" alt="" />
      </a>
      
      </p>

      <img className='cartoes' src="public/images/farmarcia-cartoes.PNG.png" alt="" />

    </div>

    
    </div>
  )
}

export default App
