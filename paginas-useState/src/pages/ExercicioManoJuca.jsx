import { useState } from 'react'
import './ExercicioManoJuca.css'
import Titulo from '../components/Titulo'

function ExercicioManoJuca() {

  let precoDiariaAteCincoDias = 100
  let precoDiariaAteDezDias = 90
  let precoDiariaAcimaDeDezDias = 80
  let danosMaterias = 150
  let totalValores, descontoTotal, pagamentoFinal, diasDigitado
  let descontoAmor = 10, descontoCarteirinha = 15

    const [numeroDeDias, setNumeroDedias ] = useState ()
    const [valorFinal, setValorFinal] = useState ()
    const [composicaoConta, setComposicaoConta] = useState (null)
    const [informacoesValidas, setinformacoesValidas] = useState (false)
    const [mensagemErro, setMensagemErro] = useState ()

    function atualizarNumero(event) {

        setNumeroDedias(event.target.value)
        
    }

    function calcularValor() {

      diasDigitado = Number(numeroDeDias)
      
      if (isNaN(diasDigitado)) {
        setinformacoesValidas(false)
        setMensagemErro("Digite um numero que corresponde a dias, caractere inválido!")
        return;

      }else{

      setinformacoesValidas(true)

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
    }

  return (
    <div className='container-pagina'>

      <Titulo texto={"Programa para calular estadia em um albergue"} emoji={"🏠"}/>

      <div className="informacoes">
        <p> Valor da diária até 5 dias: $R100 / <mark>Valor da diária de 6 até 10 diárias: $R90</mark> / Valor da diária a partir de 11 diárias: $R80</p>
      </div>

    <div className="div-subititle">
      <h2>Quantos dias tu vai ficar no albergue MANU JUCA?</h2>
    </div>

        <input className='inptDigitado' type="text"
        
        value={numeroDeDias}
        placeholder='Digite a quantidade de dias'
        onChange={atualizarNumero}
        />

        <button className="btnCalcular-Valor" onClick={calcularValor}>Calcular valor</button>

        
        {informacoesValidas ? ( 

          <div className="resultado">
           
          <h3>Detalhes da Conta:</h3>
          <p>Total sem desconto: <strong>R${composicaoConta.totalSemDesconto}</strong></p>
          <p>Desconto por ter envolvimento emocional de (10%): <strong>-R${composicaoConta.descontoAmor}</strong></p>
          <p>Desconto por possuir carteirinha de motorista (15%): <strong>-R${composicaoConta.descontoCarteirinha}</strong></p>
          <p>Multa por danos materiais: <strong>+R${composicaoConta.danosMateriais}</strong></p>
          <h4>Valor final: <strong>R${composicaoConta.valorFinal}</strong></h4>

          </div>

        ) : <p>{mensagemErro}</p>
        }
        

      
    </div>
  )
}

export default ExercicioManoJuca
