import { useState } from 'react'
import './App.css'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'
import Estados from './components/Estados'
import Aviso from './components/Aviso'
import Calculadora from './components/Calculadora'
import ConversorTemperatura from './components/Temperaturas'
import Distancia from './components/Distancia'
import GeradorSenha from './components/Senha'
import ContadorTexto from './components/Contador'
import ConversorEnergia from './components/ConversorEnergia'
import ListaTarefas from './components/ListaTarefas'



function App() {

  return (
    <>
      <ListaTarefas/>
      <ConversorEnergia/>
      <ContadorTexto />
      <GeradorSenha />
      <Distancia />
      <ConversorTemperatura />
      <Calculadora />
      <Conversao />
      <Conversao2 />
      <Estados />
      <Aviso />
    </>
  )
}

export default App
