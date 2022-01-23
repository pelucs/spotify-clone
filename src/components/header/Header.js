import './Header.css';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase';
import { AuthContext } from '../../AuthContext';

import logo from '../../images/logo-spotify-white.png';

export default () => {
  
  const { user, setUser } = useContext(AuthContext);

  //MENU HAMB
  function menuHamb(e){
    e.preventDefault();

    document.querySelector(".menu").classList.toggle("active-menu");
    document.querySelector(".menu-hamb").classList.toggle("active-menu-hamb");
  }

  //MODAL MENU USER LOGADO
  function modalUserLogado(){
    document.querySelector(".modal-user").classList.toggle("active-modal-user");
  }

  //SAIR DA CONTA
  function logOut(e){
    e.preventDefault();

    auth.signOut().then(() => {
      localStorage.removeItem("uid");
      alert("Deslogado com sucesso!");
    }).catch(error => {
      alert(error.message);
    });
  }

  return(
    <div>
        <div className="header-container">
          <div className="logo-box">
            <Link to="/"><img src={logo} alt="Logo"/></Link>
          </div>
          {
            (user)?
              <div className="menu-user-logado" onClick={modalUserLogado}>
                <p>Minha conta</p>
                <span><ion-icon name="chevron-down-outline"></ion-icon></span>

                <ul className="modal-user">
                  <li><Link to="/app"><ion-icon name="musical-notes-outline"></ion-icon> Acessar App</Link></li>
                  <li><Link to="/app/perfil"><ion-icon name="person-outline"></ion-icon> Perfil</Link></li>
                  <li onClick={logOut}><a href="#"><ion-icon name="log-out-outline"></ion-icon> Sair da conta</a></li>
                </ul>
              </div>
            :
              <div>
                <div className="menu-hamb" onClick={menuHamb}></div>

                <ul className="menu">
                  <li><a href="#">Premium</a></li>
                  <li><a href="#">Suporte</a></li>
                  <li><a href="#">Baixar</a></li>
                  <hr></hr>
                  <li><Link to="/login">Entrar</Link></li>
                  <li><Link to="/cadastro">Inscreva-se</Link></li>
                </ul>
              </div>
          }
        </div>
    </div>
  )
}