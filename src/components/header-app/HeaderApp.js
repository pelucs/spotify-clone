import './HeaderApp.css';
import { useContext } from 'react';
import { AuthContext } from './../../AuthContext';

export default () => {

  const { user } = useContext(AuthContext);

  //MENU HAMB
  function menuHambApp(){
    document.getElementById("nav").classList.toggle("active-menu-app");
  }

  //HEADER COLOR
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header-app-container");

    if(document.documentElement.scrollTop > 40){
      header.classList.add("active-color");
    } else{
      header.classList.remove("active-color");
    }
  });

  return(
    <div className="header-app-container">
      <div className="buttos-nav">
        <span><ion-icon name="chevron-back-outline"></ion-icon></span>
        <span><ion-icon name="chevron-forward-outline"></ion-icon></span>
      </div>
      <nav id="nav">
        <div className="menu-hamb-app" onClick={menuHambApp}></div>
        <ul className="menu-app">
          <li><a href="#">Podcasts</a></li>
          <li><a href="#">Playlist</a></li>
          <li><a href="#">Lançamentos</a></li>
          <li><a href="#">Gêneros</a></li>
          <li><a href="#">Artistas</a></li>
          <li><a href="#">Álbuns</a></li>
        </ul>
      </nav>
      <div className="profile-box">
        <ion-icon name="person-circle-outline"></ion-icon>
        { user &&
          <p>Olá, <strong>{user.displayName}</strong></p>
        }
      </div>
    </div>
  )
}