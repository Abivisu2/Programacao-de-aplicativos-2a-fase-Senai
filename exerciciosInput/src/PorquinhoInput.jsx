import React, { useState } from 'react'
import './PorquinhoInput.css'
import TemDinheiro from './components/TemDinheiro'
import FaltaDinheiro from './components/FaltaDinheiro'

function PorquinhoInput() {

    const [preco, setInputPreco] = useState ("")
    const [input1Real, setInput1real] = useState ("")
    const [input50cent, setInput50cent] = useState ("")
    const [input25cent, setInput25cent] = useState ("")
    const [input10cent, setInput10cent] = useState ("")
    const [input5cent, setInput5cent] = useState ("")

    const [sobrou, setSobrou] = useState (false)
    const [faltou, setFaltou] = useState (false)


    function quebrarPorco() {

        let dinheiro = Number(input1Real ) + input50cent * 0.5  + input25cent * 0.25 + input10cent * 0.1 + input5cent * 0.05

        if(dinheiro >= preco){
            setSobrou(true)
            setFaltou(false)
        }else{
            setFaltou(true)
            setSobrou(false)
        }
        
    }

  return (
    <div className='container-pagina'>

      <h1>5.25 - Porquinho </h1>

      <div className="div-paragrafo">
          <p className='paragrafo'>5.25 - O porco: Faça um programa que leia o valor de um produto X e leia a quantidade de moedas de um cofrinho que contenha: N moedas de 1 real; N moedas de 50 centavos; N moedas de 25 centavos; N moedas de 10 centavos; N moedas de 5 centavos; O programa deverá verificar se o total de reais que contem no cofrinho é o bastante para compra o produto X.</p>
      </div>

      <div className="container-preco">
          <label htmlFor="preco">Preço</label>
          <input type="number"
          id='preco'
          value={preco}
          onChange={(event) => setInputPreco(event.target.value) }
          />
      </div>

      <div className="forms-container">


        <div className="input-container">
        <label htmlFor="inpt1Real">R$1,00</label>
        <input type="number" 
        id='inpt1Real'
        value={input1Real}
        onChange={(event) => setInput1real(event.target.value)}
        />
        </div>


        <div className="input-container">
        <label htmlFor="inpt50Cent">R$0,50</label>
        <input type="number" 
        id='inpt50Cent'
        value={input50cent}
        onChange={(event) => setInput50cent(event.target.value)}
        />
        </div>

        <div className="input-container">
        <label htmlFor="inpt25Cent">R$0,25</label>
        <input type="number" 
        id='inpt25Cent'
        value={input25cent}
        onChange={(event) => setInput25cent(event.target.value)}
        />
        </div>

        <div className="input-container">
        <label htmlFor="inpt10Cent">R$0,10</label>
        <input type="number" 
        id='inpt10Cent'
        value={input10cent}
        onChange={(event) => setInput10cent(event.target.value)}
        />
        </div>

        <div className="input-container">
        <label htmlFor="inpt5Cent">R$0,05</label>
        <input type="number" 
        id='inpt5Cent'
        value={input5cent}
        onChange={(event) => setInput5cent(event.target.value)}
        />
        </div>

      </div>

      <button className='btn-porco' onClick={quebrarPorco}>Quebrar porco</button>

      {sobrou && <TemDinheiro/>}
      {faltou && <FaltaDinheiro/>}


    </div>
  )
}

export default PorquinhoInput
