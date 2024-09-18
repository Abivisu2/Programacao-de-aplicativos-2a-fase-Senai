import { useState } from 'react'
import './Comerciante.css'

function Comerciante() {

  const [inputValor, setInputValor] = useState ("")
  const [valorVenda, setValorVenda] = useState ("")

  function calcularValor() {

    let valorCompra = Number(inputValor)
    let valorDoLucro
    let valorFinal

    if(valorCompra < 20){

      valorDoLucro = valorCompra * 0.45

    }else{

      valorDoLucro = valorCompra * 0.30

    }

     valorFinal = valorCompra + valorDoLucro

     setValorVenda(valorFinal.toFixed(2))
    
  }

  return (

    <div className='container-pagina'>

      <h1>5.23 - Comerciante</h1>

      <p>Um comerciante comprou um produto e quer vendê-lo com lucro de 
        45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
        será de 30%. Faça um programa que entre com o valor do produto e mostre 
        o valor de venda.</p>

        <div className="forms-container">

          <div className="input-container">

            <label htmlFor="inputValorProduto">Valor do produto</label>

            <input type="number" 
            id='inputValorProduto'
            value={inputValor}
            onChange={(event) => setInputValor(event.target.value)}
            />

          </div>

        </div>

        <div className="div-dados">
            <button className='btnComercio' onClick={calcularValor}>Calcular</button>
            {valorVenda && (
             <p>valor da venda será de : R${valorVenda}</p>
            )}
          </div>
      
    </div>
  )
}

export default Comerciante
