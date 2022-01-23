import './Cadastro.css';
import { Link } from 'react-router-dom';
import { firebase, auth } from '../../Firebase';

import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';

export default () => {

  function criarEmaileSenha(e){
    e.preventDefault();

    let nome = document.getElementById("nome"),
      sobrenome = document.getElementById("sobrenome"),
      email = document.getElementById("email"),
      confirmail = document.getElementById("confirmail"),
      senha = document.getElementById("senha"),
      confirmsenha = document.getElementById("confirmsenha");

      if(nome.value.length != 0 && sobrenome.value.length != 0 && email.value.length != 0 && confirmail.value.length != 0 && senha.value.length != 0 && confirmsenha.value.length != 0){
        if(email.value == confirmail.value && senha.value == confirmsenha.value){

          auth.createUserWithEmailAndPassword(email.value, senha.value)
          .then(AuthUser => {
            AuthUser.user.updateProfile({
              displayName: nome.value
            })
            auth.signOut();

            nome.value = "";
            sobrenome.value = "";
            email.value = "";
            confirmail.value = "";
            senha.value = "";
            confirmsenha.value = "";
            alert("Conta registrada com sucesso!");
          })
        } else{
          alert("Certifique-se de que o e-mail ou senha estão corretos!");
        }
      } else{
        alert("Preencha todos os campos necessários!");
      }
  }

  return(
    <div>
      <Header/>
      <div className="cadastro-container">
        <div className="form">
          <h1>Registre-se gratuitamente para começares a ouvir.</h1>
          <div className="buttons-sociais">
            <button><ion-icon name="logo-facebook"></ion-icon> Registre-se com o Facebook</button>
            <button><ion-icon name="logo-google"></ion-icon> Registre-se com o Google</button>
          </div>
          <p>OU</p>
          <div className="inputs-box">
            <label htmlFor="nome">Digite seu nome</label>
            <input type="text" id="nome" placeholder="Primeiro nome"/>
            <label htmlFor="sobrenome">Digite seu sobrenome</label>
            <input type="text" id="sobrenome" placeholder="Segundo nome"/>
            <label htmlFor="">Digite seu e-mail</label>
            <input type="email" id="email" placeholder="E-mail"/>
            <label htmlFor="confirmail">Confirme seu e-mail</label>
            <input type="email" id="confirmail" placeholder="Confirme o e-mail"/>
            <label htmlFor="senha">Digite uma senha</label>
            <input type="password" id="senha" placeholder="Senha"/>
            <label htmlFor="confirmsenha">Confirme sua senha</label>
            <input type="password" id="confirmsenha" placeholder="Confirme a senha"/>
            <button onClick={criarEmaileSenha}>Fazer registro</button>
            <p>Já possui alguma conta?<Link to="/login"> acesse aqui</Link></p>
          </div>
        </div>
      </div> 
      <Footer/>
    </div>
  )
}