import { useState } from 'react'
import './ExercicioManoJuca.css'

function ExercicioManoJuca() {

  let precoDiariaAteCincoDias = 100
  let precoDiariaAteDezDias = 90
  let precoDiariaAcimaDeDezDias = 80
  let danosMaterias = 150
  let totalValores, descontoTotal, pagamentoFinal, diasDigitado
  let descontoAmor = 10, descontoCarteirinha = 15

    const [numeroDeDias, setNumeroDedias ] = useState ()
    const [valorFinal, setValorFinal] = useState ()
    const [composicaoConta, setComposicaoConta] = useState ()

    function atualizarNumero(event) {

        setNumeroDedias(event.target.value)
        
    }

    function calcularValor() {

      if (isNaN (numeroDeDias) || numeroDeDias === "" ) {
          setValorFinal(`Digite um numero que corresponde a dias, caractere inválido!`)
          return
      }

      diasDigitado = Number(numeroDeDias)

      if (diasDigitado <= 5 ) {

       totalValores =  precoDiariaAteCincoDias * diasDigitado

      }else if(diasDigitado > 5 && diasDigitado <= 10 ){

       totalValores =  precoDiariaAteDezDias * diasDigitado

      }else if(diasDigitado >= 11 ){

       totalValores =  precoDiariaAcimaDeDezDias * diasDigitado
      
      }
      
      descontoTotal = ( totalValores * descontoAmor) / 100 + (totalValores * descontoCarteirinha) / 100

      pagamentoFinal = totalValores - descontoTotal + danosMaterias
      setValorFinal(pagamentoFinal.toFixed(2))

      setComposicaoConta({
         totalSemDesconto: totalValores.toFixed(2),
         descontoAmor: ((totalValores * descontoAmor) / 100 ).toFixed(2),
         descontoCarteirinha: ((totalValores * descontoCarteirinha) / 100 ).toFixed(2),
         danosMateriais: danosMaterias.toFixed(2),
         valorFinal: pagamentoFinal.toFixed(2),
        });
        
    }

  return (
    <div>

    <div className="div-subititle">
      <h2>Calcular o valor da estádia do MANU JUCA!</h2>
    </div>

        <input type="text"
        
        value={numeroDeDias}
        placeholder='Digite um número'
        onChange={atualizarNumero}
        />

        <button className="btnCalcular-Valor" onClick={calcularValor}>Calcular valor</button>

        
        {valorFinal && ( 

          <div className="resultado">

          <h3>Detalhes da Conta:</h3>
          <p>Total sem desconto: R${composicaoConta.totalSemDesconto}</p>
          <p>Desconto por ter envolvimento emocional de (10%): -R${composicaoConta.descontoAmor}</p>
          <p>Desconto por possuir carteirinha de motorista (15%): -R${composicaoConta.descontoCarteirinha}</p>
          <p>Multa por danos materiais: +R${composicaoConta.danosMateriais}</p>
          <h4>Valor final: R${composicaoConta.valorFinal}</h4>

          </div>

        )}
        

      
    </div>
  )
}

export default ExercicioManoJuca
