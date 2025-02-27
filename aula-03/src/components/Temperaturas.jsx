import React from 'react'
import { useState } from 'react'
import './Temperaturas.css'

function Temperaturas() {
  const [celcius, setcelcius] = useState(0)
  const [Fahrenheit , setFahrenheit] = useState(0)
  const [Kelvin, setKelvin] = useState(0)

// function converterTemperatura(){
//     let entrada = Number(prompt("KM "))
//     setcelcius((entrada * 0.6214).toFixed(2))
//     setFahrenheit((entrada * 0.207).toFixed(2))
//     setKelvin(entrada)
//   }

//   return (
//     <div className="converterTemperatura-conversao2">
//       <h2>Conversao de Temperatura</h2>
//       <button onClick={converterTemperatura}>Converter</button>
//       <p>
//         Distancia original:  {km} Km
//       </p>
//       <p>
//         Distancia convertiva: {milhas} Milhas
//       </p>
//       <p>
//         Distancia convertida: {leguas} Leguas
//       </p>
    
//     </div>
//   )
}

export default Temperaturas