import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Navbar from '../components/Navbar'

function AlterarProduto() {

    const {produtoMagico, setProdutoMagico} = useContext(GlobalContext)
    const [inputProduto, setInputProduto] = useState('')

    // function atualizarProduto(){
    //     setProdutoMagico(inputProduto)
    // }
   // pode atualizar com a função do botão ou por uma HFuncion Como lá no botão.

  return (
    <div>
        <Navbar/>
        <h1>Alteração Mágica</h1>
        <p>Prduto atual: {produtoMagico}</p>

        <div className='input-container'>
            <label htmlFor="">Produto novo: </label>
             <input type="text" 
             value={inputProduto}
             onChange={(event) => setInputProduto(event.target.value)}
             />
        </div>

        <button onClick={() => setProdutoMagico(inputProduto)}>Alterar</button>
        {/* <button onClick={atualizarProduto}>Alterar</button> */}

       
    </div>
  )
}

export default AlterarProduto
