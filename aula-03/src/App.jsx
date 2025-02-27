import {useState} from 'react'
import './App.css'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'
import Temperaturas from './components/Temperaturas'

function App() {
  const [usuario, setUsuario] = useState("Juan")
  const [senha, setSenha] = useState()

  // let nome = "Camila"
  const [nome, setNome] = useState("Camila")

    function lerNome(){
      let nome = prompt("Digite o nome:")
      setNome(nome)
    }
    function lerUsuario(){
      let resposta = prompt("Digite o novo uruário:")
      setUsuario(resposta)

      let pw = prompt ("Digite a nova senha: ")
      let pw2 = prompt ("Confirme a senha: ")
      if (pw == pw2){
        setSenha(pw)
      }else{
        alert("As senhas são diferentes")
      }

    }

  return (
    <>
      <Conversao/>
      <Conversao2/>
      <Temperaturas/>

      <h1>ESTADOS</h1>
      Nome: {nome}
      <div>
      Usuário: {usuario} <br/>
      Senha: {senha}
      </div>
      <button onClick={lerNome}>Trocar Nome</button>
      <button onClick={lerUsuario}>Trocar Usuario</button>
    </>
  )
}

export default App
