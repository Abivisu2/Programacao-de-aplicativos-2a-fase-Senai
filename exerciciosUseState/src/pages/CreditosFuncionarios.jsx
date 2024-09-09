import { useState } from 'react'
import './CreditosFuncionarios.css'

//5.31 - Não tem garçom de cara feia: Uma empresa abriu uma linha de crédito para os funcionários. O valor da prestação não pode ultrapassar 30% do salário. Faça um programa que receba o salário, o valor do empréstimo e o número de prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores informados pode ser zero ou negativo

let salarioDig, valorEmprestimoDig, numeroPrestacoesDig
let valorPrestacao, limitePrestacao

function CreditosFuncionarios() {

  const [salario, setSalario] = useState(null)
  const [valorEmprestimo, setvalorEmprestimo] = useState(null)
  const [prestacoes, setprestacoes] = useState(null)
  const [resultado, setResultado] = useState ("")

  function VerificarEmprestimo() {

    salarioDig = Number(prompt('Digite o valor do seu salário: '))
    valorEmprestimoDig = Number(prompt('Digite o valor do empréstimo: '))
    numeroPrestacoesDig = Number(prompt('Digite o número de prestações a pagar: '))

    if(salarioDig <= 0 || valorEmprestimoDig <= 0 || numeroPrestacoesDig <= 0){
      setResultado(`Nenhum dos valores pode ser zero ou negativo!`)
    return

    }

    valorPrestacao = Number(valorEmprestimoDig / numeroPrestacoesDig)
    limitePrestacao =Number(salarioDig * 0.3)

    if (valorPrestacao > limitePrestacao) {
      setResultado(`Empréstimo negado. O valor da prestação de R$${valorPrestacao.toFixed(2)} excede 30% do salário.`)
    }else{
      setResultado(`Empréstimo concedido! O valor da prestação é R$${valorPrestacao.toFixed(2)}, dentro do limite permitido.`)
    }

    setSalario (salarioDig)
    setvalorEmprestimo (valorEmprestimoDig)
    setprestacoes (numeroPrestacoesDig)
    
  }

  return (

    <div className='div-Container'>

      <h1>Verificador de Crédito para Funcionários</h1>

      <div className="div-btn"></div>
      <button className='btnConsultarNumero' onClick={VerificarEmprestimo}>verificar</button>

      <div className="valoresDigitados">
        <p>Salário: R${salario}</p>
        <p>Empréstimo: R${valorEmprestimo}</p>
        <p>Número de Prestações: {prestacoes}</p>

      </div>

      <div className="resultado">
        {resultado}
      </div>

    </div>
  )
}

export default CreditosFuncionarios
