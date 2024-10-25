import React from 'react'
import Crescimento from '../pages/Crescimento'
import './ResultadoCrescimento.css'

function ResultadoCrescimento(props) {

  return (
    <div className='container'>

        <div className="dados-digitados">
            <div className="imagemUm">
                <p className='labels'>{props.nomeDois}</p>
                <img className='imagemEnzo' src="public/images/enzo.avif" alt="Imagem-Enzo"/>
            </div>
            <div className="comparacao">
                <p className='labels'>será mais alto que</p>
            </div>
            <div className="imagemDois">
                <p className='labels'>{props.nomeUm}</p>
                <img className='imagemValentina' src="public/images/valentina.jpg" alt="Imagem-Valentina" />
            </div>
        </div>

        <div className="div-resultado-anos">
            <p className='resultado-anos'>Em, {props.anos} anos</p>
        </div>
      
    </div>
  )
}

export default ResultadoCrescimento
