import './AppSpot.css';
import { auth } from '../../Firebase';

import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header-app/HeaderApp.js';

import pericles from '../../images/pericles.jpg';
import musicaPericles from "../../audio/ate-que-durou.mp3";

export default () => {

  //FUNÇÕES MUSICA
  function pauseMusic(e){
    e.preventDefault();
    
    //PAUSAR A MÚSICA
    let musica = document.querySelector("audio");

    musica.pause();
    document.querySelector(".play").style.display = "block";
    document.querySelector(".pause").style.display = "none";
  }

  function playMusic(e){
    e.preventDefault();
    
    //PLAY MÚSICA
    let musica = document.querySelector("audio");

    musica.play();
    document.querySelector(".play").style.display = "none";
    document.querySelector(".pause").style.display = "block";
    document.querySelector(".reprodutor-container").classList.add("active-reprodutor");

    let final = document.getElementById("final");
    final.textContent = segundosParaMinuto(Math.floor(musica.duration));
    
    musica.addEventListener("timeupdate", () => {
      let progress = document.querySelector("progress"),
        inicio = document.getElementById("inicio");

      progress.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + "%";
      inicio.textContent = segundosParaMinuto(Math.floor(musica.currentTime));
    });
  }

  function segundosParaMinuto(seconds){
    let minuto = Math.floor(seconds / 60),
      segundos = seconds % 60;

      if(segundos < 10){
        segundos = "0" + segundos;
      }
    return minuto + ":" + segundos
  }

  return (
    <div>
      <Header/>
      <Sidebar/>
      <div className="app-container">
        <div className="section-app section-1">
          <h1>Boa tarde</h1>
          <div className="playlist-box">
            <div className="playlist">
              <span><ion-icon name="disc-outline"></ion-icon></span>
              <p>Playlist Usuário</p>
            </div>

            <div className="playlist">
              <span><ion-icon name="disc-outline"></ion-icon></span>
              <p>Playlist Usuário</p>
            </div>

            <div className="playlist">
              <span><ion-icon name="disc-outline"></ion-icon></span>
              <p>Playlist Usuário</p>
            </div>

            <div className="playlist">
              <span><ion-icon name="disc-outline"></ion-icon></span>
              <p>Playlist Usuário</p>
            </div>

            <div className="playlist">
              <span><ion-icon name="disc-outline"></ion-icon></span>
              <p>Playlist Usuário</p>
            </div>

            <div className="playlist">
              <span><ion-icon name="disc-outline"></ion-icon></span>
              <p>Playlist Usuário</p>
            </div>
          </div>
        </div>

        <div className="section-app section-2">
          <h1>Reproduzidas rescentemente</h1>
          <div className="reproduzidas-lista">
            <div className="reproduzida" onClick={playMusic}>
              <div className="img-music">
                <img src={pericles} alt="Banner"/>
              </div>
              <h1>Até que durou</h1>
              <p>Péricles</p>
              <span><ion-icon name="play"></ion-icon></span>
            </div>

            <div className="reproduzida" onClick={playMusic}>
              <div className="img-music">
                <img src={pericles} alt="Banner"/>
              </div>
              <h1>Até que durou</h1>
              <p>Péricles</p>
              <span><ion-icon name="play"></ion-icon></span>
            </div>

            <div className="reproduzida" onClick={playMusic}>
              <div className="img-music">
                <img src={pericles} alt="Banner"/>
              </div>
              <h1>Até que durou</h1>
              <p>Péricles</p>
              <span><ion-icon name="play"></ion-icon></span>
            </div>

            <div className="reproduzida" onClick={playMusic}>
              <div className="img-music">
                <img src={pericles} alt="Banner"/>
              </div>
              <h1>Até que durou</h1>
              <p>Péricles</p>
              <span><ion-icon name="play"></ion-icon></span>
            </div>

            <div className="reproduzida" onClick={playMusic}>
              <div className="img-music">
                <img src={pericles} alt="Banner"/>
              </div>
              <h1>Até que durou</h1>
              <p>Péricles</p>
              <span><ion-icon name="play"></ion-icon></span>
            </div>
          </div>
        </div>

        <div className="reprodutor-container">
          <div className="music-play-box">
            <img src={pericles} alt="Até que durou"/>
            <div className="name-music">
              <h1>Até que durou</h1>
              <p>Péricles</p>
            </div>
          </div>

          <div className="buttons-music-play">
            <ul className="buttons-music-box">
              <li><ion-icon name="play-back"></ion-icon></li>
              <li className="play-pause play" onClick={playMusic}><ion-icon name="play-circle"></ion-icon></li>
              <li className="play-pause pause" onClick={pauseMusic}><ion-icon name="pause-circle"></ion-icon></li>
              <li><ion-icon name="play-forward"></ion-icon></li>
            </ul>

            <div className="progress-box">
              <p id="inicio">0:00</p>
              <div className="progress">
                <progress value="1" max="1"></progress>
                <span className="ponto"></span>
              </div>
              <p id="final">2:49</p>
            </div>
          </div>

          <div className="volume-box">
              <span><ion-icon name="volume-medium"></ion-icon></span>
            </div>
        </div>
      </div>

      <audio src={musicaPericles}></audio>
    </div>
  )
}