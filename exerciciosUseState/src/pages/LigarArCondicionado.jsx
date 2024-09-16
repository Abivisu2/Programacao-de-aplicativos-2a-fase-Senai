import Titulo from "../components/Titulo";
import "./LigarArCondicionado.css/";
import { useState } from "react";

function LigarArCondicionado() {
  let temperaturaDigitada;
  let temperaturaConvertida;

  //5.27 - Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a ecolha, faça uma leitura e converta para a unidade escolhida.
  
  const [valorDigitado, setValorDigitado] = useState("");
  const [ResultadoDaConversao, setResultadoDaConversao] = useState("");

  function btnCeslsius() {
    temperaturaDigitada = Number(
      prompt("Digite o valor da temperatura em Celcius: ")
    );

    temperaturaConvertida = temperaturaDigitada * 1.8 + 32;
    setValorDigitado(`${temperaturaDigitada}`);
    setResultadoDaConversao(
      `O valor digitado convertido em Fahrenheit é: ${temperaturaConvertida.toFixed(0)} F`
    );
  }

  function btnFahreheit() {
    temperaturaDigitada = Number(
      prompt("Digite o valor da temperatura em Fahrenheit: ")
    );

    temperaturaConvertida = (temperaturaDigitada - 32) / 1.8;
    setValorDigitado(`${temperaturaDigitada}`);
    setResultadoDaConversao(
      `O valor digitado convertido em Celsius é: ${temperaturaConvertida.toFixed(0)} ℃`
    );
  }



  return (
    <div className="div-Container">

      <Titulo texto={'Ar condicionado'} emoji={'😀'}/>

      <div className="labels">
        <h1 className="titulo">Conversão de temperatura</h1>
      </div>

      <div className="divButtons">
        <button className="btnConverter" onClick={btnCeslsius}>
          Converter de Celsius para Fahrenheit
        </button>
        <button className="btnConverter" onClick={btnFahreheit}>
          Converter de Fahrenheit para Celsius
        </button>
      </div>

      <div className="div-valorDigitado">
        <p className="valorDigitado">Valor digitado: {valorDigitado}</p>
      </div>

      <div className="resultadoDaConversao">{ResultadoDaConversao}</div>
    </div>
  );
}

export default LigarArCondicionado;
