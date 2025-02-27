import './Conversao.css'
import { useState } from 'react'

function Conversao() {
  const [real, setReal] = useState(0)
  const [dolar, setDolar] = useState(0)
  
function converterRealPraDolar(){
    let entrada = Number(prompt("R$: "))
    setDolar((entrada * 0.1731).toFixed(2))
    setReal(entrada)
  }

  return (
    <div className="container-conversao">
      <h2>Real para Dolar</h2>
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

export default Conversao