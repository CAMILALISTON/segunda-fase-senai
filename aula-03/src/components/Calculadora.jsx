import React from 'react'
import "./Calculadora.css"
import {useState} from 'react'

function Calculadora() {
    const [gramas, setGramas] = useState(0)
    const [quilogramas, setQuilogramas] = useState(0)
    const [libras, setLibras] = useState(0)
    const [oncas, setOncas] = useState(0)

  function converterRealPraDolar(){
      let entrada = Number(prompt("peso em kg: "))
      setGramas((entrada * 1000).toFixed(2))
      setQuilogramas(entrada)
      setLibras((entrada * 2.2).toFixed(2))
      setOncas((entrada * 0.0283495).toFixed(2))
    }
  
    return (
      <div className="container-calculadora">
        <h2>Conversão de Peso</h2>
        <button onClick={converterRealPraDolar}>Converter</button>
        <p>
          Valor original: R$ {real}
        </p>
        <p>
          Valor convertivo: U${dolar}
        </p>
      
      </div>
    )
}

export default Calculadora