import './Perfil.css';
import React, { useContext } from 'react';
import { AuthContext } from './../../AuthContext';
import { auth, firebase } from '../../Firebase';

import HeaderApp from '../../components/header-app/HeaderApp';
import Sidebar from '../../components/sidebar/Sidebar';

export default () => {

  const { user } = useContext(AuthContext);

  function verificarEmail(){
    let currentUser = auth.currentUser;

    //Irá enviar o email em português
    auth.languageCode = "pt";
    currentUser.sendEmailVerification()
    .then(() => {
      alert(`Email enviado para: ${user.email}`);
    })
    .catch(() => {
      alert("Ocorreu um erro, tente novamente!");
    })
  }

  return(
    <div>
      <Sidebar/>
      <HeaderApp/>
      <div className="perfil-container">
        {
          user ?
            <div className="perfil-box">
              <div className="row nome">
                <h1>Nome: </h1>
                <p>{user.displayName}</p>
              </div>

              <div className="row email">
                <h1>E-mail cadastrado: </h1>
                <p>{user.email}</p>
              </div>

              <div className="row emailConfirm">
                <h1>E-mail verificado: </h1>
                {
                  !user.emailVerified ?
                    <button onClick={verificarEmail}>Verificar e-mail</button>
                  :
                    <p>Verificado</p>
                }
              </div>
            </div>
          :
            <h1 style={{ color: "#fff" }}>Carregando...</h1>
        }
      </div>
    </div>
  )
}