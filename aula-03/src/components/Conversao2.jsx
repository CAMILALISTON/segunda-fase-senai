import React from 'react'
import './Conversao2.css'
import { useState } from 'react'

function Conversao2() {
  const [km, setKm] = useState(0)
  const [milhas, setMilhas] = useState(0)
  const [leguas, setLeguas] = useState(0)

function converterKmParaMilha(){
    let entrada = Number(prompt("KM "))
    setMilhas((entrada * 0.6214).toFixed(2))
    setLeguas((entrada * 0.207).toFixed(2))
    setKm(entrada)
  }

  return (
    <div className="container-conversao2">
      <h2>KM para Milhas para Léguas</h2>
      <button onClick={converterKmParaMilha}>Converter</button>
      <p>
        Distancia original:  {km} Km
      </p>
      <p>
        Distancia convertiva: {milhas} Milhas
      </p>
      <p>
        Distancia convertida: {leguas} Leguas
      </p>
    
    </div>
  )
}
export default Conversao2