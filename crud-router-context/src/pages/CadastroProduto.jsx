import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import './CadastroProduto.css'

function CadastroProduto() {

    // Importar/baixar o conteúdo dessas variáveis no GlobalContext
    const {produtos, setProdutos} = useContext(GlobalContext) 
    const [inputNome, setInputNome] = useState('')
    const [inputPreco, setInputPreco] = useState('')

    useEffect(() => {
        console.log(produtos);
    }, [produtos])

        function cadastrarProduto() {
            let produto = {
                id: Date.now(),
                nome: inputNome,
                preco: inputPreco
            }

        setProdutos([...produtos, produto])

        }

  return (

    <div>

        <Navbar/>

        <h1>Cadastro de produtos</h1>

        <div className="input-container">
            <label htmlFor="">Nome: </label>
            <input type="text" 
            value={inputNome}
            onChange={(event) => setInputNome(event.target.value)}
            />
        </div>

        <div className="input-container">
            <label htmlFor="">Preço: </label>
            <input type="text" 
            value={inputPreco}
            onChange={(event) => setInputPreco(event.target.value)}
            />
        </div>

            <button onClick={cadastrarProduto}>Cadastrar</button>

            <div className="produtos">
                {produtos.map((p) => (
                    <div key={p.id} className='produto-container'>
                        <p>{p.nome}</p>
                        <p>{p.preco}</p>
                        <p>{p.id}</p>
                    </div>
                
                ))}
            </div>

        {/* {inputNome} {inputPreco} */}
      
    </div>
  )
}

export default CadastroProduto
