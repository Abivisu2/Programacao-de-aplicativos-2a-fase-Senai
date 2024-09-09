import "./LigarArCondicionado.css/";
import { useState } from "react";

let temperaturaDigitada;
let temperaturaConvertida;

function LigarArCondicionado() {
  //5.27 - Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a ecolha, faça uma leitura e converta para a unidade escolhida.

  const [opcaoselecionada, setOpcaoSelecionda] = useState("");
  const [valorDigitado, setValorDigitado] = useState("");
  const [ResultadoDaConversao, setResultadoDaConversao] = useState("");

  function converter() {
    temperaturaDigitada = Number(prompt("Digite o valor da temperatura : "));

    if (opcaoselecionada === "opcaoUm") {
      temperaturaConvertida = temperaturaDigitada * 1.8 + 32;
      setValorDigitado(`${temperaturaDigitada}`);
      setResultadoDaConversao(
        `O valor digitado convertido em Fahrenheit é: ${temperaturaConvertida}`
      );
    } else if (opcaoselecionada === "opcaoDois") {
      temperaturaConvertida = (temperaturaDigitada - 32) / 1.8;
      setValorDigitado(`${temperaturaDigitada}`);
      setResultadoDaConversao(
        `O valor digitado convertido em Celsius é: ${temperaturaConvertida}`
      );
    } else {
      setResultadoDaConversao(`Seleciona uma opção válida!`);
    }
  }

  return (
    <div className="div-Container">
      <div className="labels">
        <h1 className="titulo">Conversão de temperatura</h1>

        <select className="select" value={opcaoselecionada}>
          <option value="" disabled>
            Selecionar
          </option>
          <option value="opcaoUm"> Converter de Celsius para Fahrenheit</option>
          <option value="opcaoDois">
            {" "}
            Converter de Fahrenheit para Celsius
          </option>
        </select>
      </div>

      <div className="valorDigitado">{valorDigitado}</div>

      <button className="btnConverter" onClick={converter}>
        Converter
      </button>

      <div className="resultadoDaConversao">{ResultadoDaConversao}</div>
    </div>
  );
}

export default LigarArCondicionado;
