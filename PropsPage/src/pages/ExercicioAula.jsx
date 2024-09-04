import React from 'react'
import './ExercicioAula.css'
import { useState } from 'react'
import Titulo from '../components/Titulo'

let precoDoProduto
let totalMoedas
let qtdMoedasUmReal, qtdMoedasCinquentaCentavos, qtdMoedasVinteCincoCentavos, qtdMoedasDezCentavos, qtdMoedasCincoCentavos
let moedasUmReal, moedasCinquentaCentavos, moedasVinteCincoCentavos, moedasDezCentavos, moedasCincoCentavos


function ExercicioAula() {

    
    const [resultado, setResultado] = useState("")
    const [media, setMedia] = useState()

    //Cofre Porquinho.  5.25 - Faça um programa que leia o valor de um produto X e leia a quantidade de moedas de um cofrinho que contenha:  N moedas de 1 real;  N moedas de 50 centavos;  N moedas de 25 centavos;  N moedas de 10 centavos;  N moedas de 5 centavos; O programa deverá verificar se o total de reais que contem no cofrinho é o bastante para compra o produto X.

    function rodar525(){

        precoDoProduto = Number(prompt("Qual é o valor do produto?"))  

        qtdMoedasUmReal = Number(prompt("Quantas moedas de R$1,00?")) 
        qtdMoedasCinquentaCentavos = Number(prompt("Quantas moedas de R$0,50?")) 
        qtdMoedasVinteCincoCentavos = Number(prompt("Quantas moedas de R$0,25?")) 
        qtdMoedasDezCentavos = Number(prompt("Quantas moedas de R$0,10?")) 
        qtdMoedasCincoCentavos = Number(prompt("Quantas moedas de R$0,5?")) 
        
        moedasUmReal = Number(qtdMoedasUmReal * 1) 
        moedasCinquentaCentavos = Number(qtdMoedasCinquentaCentavos * 0.50)
        moedasVinteCincoCentavos = Number(qtdMoedasVinteCincoCentavos * 0.25)
        moedasDezCentavos = Number(qtdMoedasDezCentavos * 0.10)
        moedasCincoCentavos = Number(qtdMoedasCincoCentavos * 0.05)

        totalMoedas = Number(moedasUmReal + moedasCinquentaCentavos + moedasVinteCincoCentavos + moedasDezCentavos + moedasCincoCentavos).toFixed(2)

        // setResultado(totalMoedas)

        if(totalMoedas >= precoDoProduto){
          setResultado(`O total de moedas ${totalMoedas}, é o suficiente para comprar o produto!`)
          

        }else{
          setResultado(`O total de moedas ${totalMoedas}, Não é suficiente para comprar o produto!`)
        }

    }

    //Média ponderada com pesos digitados. 5.26 - Ponderações(: Faça um programa que receba quatro notas, sendo que cada nota só poderá receber valores de 0 a 10, calcule e mostre a média ponderada, sabendo que o usuário irá entrar com o peso de cada nota, caso a media ponderada seja:  Media maior ou igual a 7 – ALUNO APROVADO  Media menor que 7 – ALUNO REPROVADO

    function rodar526() {

      let notaUm = Number(prompt("Digite a primeira nota, com valores entre 0 a 10:"))
      let pesoNotaUm = Number(prompt("Qual é o peso da primeira nota?"))

      let notaDois = Number(prompt("Digite a segunda nota, com valores entre 0 a 10:"))
      let pesoNotaDois = Number(prompt("Qual é o peso da segunda nota?"))

      let notaTres = Number(prompt("Digite a terceira nota, com valores entre 0 a 10:"))
      let pesoNotaTres = Number(prompt("Qual é o peso da terceira nota?"))

      let notaQuatro = Number(prompt("Digite a quarta nota, com valores entre 0 a 10:"))
      let pesoNotaQuatro = Number(prompt("Qual é o peso da quarta nota?"))

      if(notaUm < 0 || notaUm > 10 || notaDois < 0 || notaDois > 10 || notaTres < 0 || notaTres > 10 || notaQuatro < 0 || notaQuatro > 10){

        setMedia("Notas digitadas estão fora do permitido, tente novamente!")

      }else{

        let ResultMultiplicacaoNotaUm = notaUm * pesoNotaUm
        let ResultMultiplicacaoNotaDois = notaDois * pesoNotaDois
        let ResultMultiplicacaoNotaTres = notaTres * pesoNotaTres
        let ResultMultiplicacaoNotaQuatro = notaQuatro * pesoNotaQuatro
  
        let somaDasMultiplicacoes = ResultMultiplicacaoNotaUm + ResultMultiplicacaoNotaDois + ResultMultiplicacaoNotaTres + ResultMultiplicacaoNotaQuatro
  
        let somaDosPesos = pesoNotaUm + pesoNotaDois + pesoNotaTres + pesoNotaQuatro
  
        let mediaPonderada = (somaDasMultiplicacoes / somaDosPesos)
  
        if(mediaPonderada >= 7){
  
          setMedia(`Aluno aprovado, a sua média é de: ${mediaPonderada.toFixed(2)}.`)
        }else{
          setMedia(`Aluno Reprovado, a sua média é de: ${mediaPonderada.toFixed(2)}.`)
        }
        
      }


    }


  return (

    <div className='div-container'> 

        <Titulo texto={"Exercícios"} emoji={"💡"}/>

        <div className="buttons">

        <button className='btnExercicioUm' onClick={rodar525}>Exercício 5.25</button>
        <button className='btnExercicioDois' onClick={rodar526}>Exercício 5.26</button>
          
        </div>

        <div className="valorTotal">
          {resultado}
        </div>

        <div className="mediaPonderada">
          {media}
        </div>

    </div>

    
  )
}

export default ExercicioAula
