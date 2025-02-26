import {useState} from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("Juan")

  let nome = "Camila"

    function lerNome(){
      nome = prompt("Digite o nome:")
      
    }
    function lerUsuario(){
      let resposta = prompt("Digite o novo uruário:")
      setUsuario(resposta)
    }

  return (
    <>
      <h1>ESTADOS</h1>
      Nome: {nome}
      <div>
      Usuário: {usuario}
      </div>
      <button onClick={lerNome}>Trocar Nome</button>
      <button onClick={lerUsuario}>Trocar Usuario</button>
    </>
  )
}

export default App
