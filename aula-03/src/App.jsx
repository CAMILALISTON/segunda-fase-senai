import {useState} from 'react'
import './App.css'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'
import Estados from './components/Estados'
import Aviso from './components/Aviso'
import Calculadora from './components/Calculadora'


function App() {

  return (
    <>
      <Calculadora/>
      <Aviso/>
      <Conversao/>
      <Conversao2/>
      <Estados/>

    </>
  )
}

export default App
