import './Home.css';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import { Link } from 'react-router-dom';

import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';

export default () => {

  const { user } = useContext(AuthContext);

  setTimeout(() => {
    document.querySelector(".mensagem-box").style.transform = "scale(1)";
  }, 3000)

  function closeModalMensagem(){
    document.querySelector(".mensagem-box").style.transform = "scale(0)";
  }

  return (
    <div>
      <Header/>
      <div className="mensagem-box">
        <span onClick={closeModalMensagem}><ion-icon name="close-circle"></ion-icon></span>
        <h1><ion-icon name="alert-circle-outline"></ion-icon> Aviso</h1>
        <p>Declaro todos os direitos de imagens e música para seus respectivos proprietários. Este site é apenas para demostrar meus conhecimentos com HTML, CSS, JS, ReactJS e Firebase.</p>
      </div>
      <div className="home-container">
        <div className="one circle"></div>
        <div className="two circle"></div>
        <div className="three circle"></div>

        <div className="section">
          <h1>Escutar muda <br></br> tudo</h1>
          <p>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
          {
            user ? 
              <Link to="/app">Acessar App</Link>
            :
              <Link to="/cadastro">Inscreva-se agora</Link>
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}