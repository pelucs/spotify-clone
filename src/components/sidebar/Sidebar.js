import './Sidebar.css';
import { auth } from '../../Firebase';
import { Link } from 'react-router-dom';

import logo from '../../images/logo-spotify-icone.png';

export default () => {

  //MODAL SAIR DA CONTA
  function modalLogout(e){
    e.preventDefault();
    
    document.querySelector(".modal-logout").classList.add("active-modal-logout");
  }

  function closeModalLogout(e){
    e.preventDefault();

    document.querySelector(".modal-logout").classList.remove("active-modal-logout");
  }

  function logOut(e){
    e.preventDefault();

    auth.signOut().then(() => {
      localStorage.removeItem("uid");
      window.location.href = "/login";
      alert("Deslogado com sucesso");
    }).catch(error => {
      alert(error.message);
    });
  }

  return (
    <div className="sidebar">
      <div className="logo-sidebar">
        <img src={logo} alt="Logo"/>
      </div>

      <div className="modal-logout">
        <p>Deseja realmente sair?</p>
        <button onClick={logOut}>Sim</button>
        <button onClick={closeModalLogout}>Não</button>
      </div>

      <ul className="menu-sidebar">
        <li><Link to="/app"><ion-icon name="home-outline"></ion-icon></Link></li>
        <li><Link to="/app/perfil"><ion-icon name="person-outline"></ion-icon></Link></li>
        <li><a href="#"><ion-icon name="compass-outline"></ion-icon></a></li>
        <li><a href="#"><ion-icon name="heart-outline"></ion-icon></a></li>
        <li><a href="#"><ion-icon name="settings-outline"></ion-icon></a></li>
        <li><a href="#"><ion-icon name="information-circle-outline"></ion-icon></a></li>
        <li onClick={modalLogout} id="logout"><ion-icon name="log-out-outline"></ion-icon></li>
      </ul>
    </div>
  )
}