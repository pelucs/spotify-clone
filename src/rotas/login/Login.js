import './Login.css';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import { Link } from 'react-router-dom';
import { firebase, auth } from '../../Firebase';

import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import App from '../../rotas/app/AppSpot';

export default () => {

  const { user, setUser } = useContext(AuthContext);

  //LOGIN COM EMAIL E SENHA
  function loginEmaileSenha(e){
    e.preventDefault();

    let email = document.getElementById("email"),
    senha = document.getElementById("senha");

    if(email.value.length != 0 && senha.value.length != 0){
      auth.signInWithEmailAndPassword(email.value, senha.value)
      .then(() => {
        auth.onAuthStateChanged(val => {
          localStorage.setItem("uid", val.uid);
        });

        window.location.href = "/app";
        alert("Login efetuado com sucesso!");
      }).catch(error => {
        alert(error.message);
      })
    } else{
      alert("Preencha todos os campos corretamente!");
    }
  }

  return (
    <div>
      <Header/>
      <div className="login-container">
        <div className="form">
          <h1>Acesse gratuitamente para começares a ouvir.</h1>
          <div className="buttons-sociais">
            <button><ion-icon name="logo-facebook"></ion-icon> Acessar com o Facebook</button>
            <button><ion-icon name="logo-google"></ion-icon> Acessar com o Google</button>
          </div>
          <p>OU</p>
          <div className="inputs-box">
            <label htmlFor="email">Digite seu e-mail</label>
            <input type="email" id="email" placeholder="E-mail"/>
            <label htmlFor="senha">Digite uma senha</label>
            <input type="password" id="senha" placeholder="Senha"/>
            <button onClick={loginEmaileSenha}>Acessar sua conta</button>
            <p>Ainda não possui uma conta?<Link to="/cadastro"> acesse aqui</Link></p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}