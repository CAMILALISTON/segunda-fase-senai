import {useState} from 'react'
import "./Estados.css"

function Estados() {
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

    <div className="container-estados">
      <h2>Estados</h2>
      Nome: {nome}
      <div>
      Usuário: {usuario} <br/>
      Senha: {senha}
      </div>
      <button onClick={lerNome}>Trocar Nome</button>
      <button onClick={lerUsuario}>Trocar Usuario</button>
    </div>
    
  )
}

export default Estados