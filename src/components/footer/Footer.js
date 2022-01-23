import './Footer.css';
import { Link } from 'react-router-dom';

import logo from '../../images/logo-spotify-white.png';

export default () => {
  return(
    <div className="footer-container">
      <div className="footer-top">
        <div className="logo-footer">
          <Link to="/"><img src={logo} alt="Logo"/></Link>
        </div>

        <ul className="empresa box-footer">
          <h1>Empresa</h1>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Empregos</a></li>
          <li><a href="#">For the Record</a></li>
        </ul>

        <ul className="comunidade box-footer">
          <h1>Comunidade</h1>
          <li><a href="#">Para Artistas</a></li>
          <li><a href="#">Desenvolvedores</a></li>
          <li><a href="#">Publicidade</a></li>
          <li><a href="#">Investidores</a></li>
          <li><a href="#">Fornecedores</a></li>
        </ul>

        <ul className="links box-footer">
          <h1>Links úteis</h1>
          <li><a href="#">Suporte</a></li>
          <li><a href="#">Player da Web</a></li>
          <li><a href="#">Aplicativo Móvel</a></li>
        </ul>

        <ul className="sociais-box-footer">
          <li><a target="_blank" href="https://www.instagram.com/pe.lucs"><ion-icon name="logo-instagram"></ion-icon></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/pedro-lucas-083/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a target="_blank" href="https://github.com/pelucs"><ion-icon name="logo-github"></ion-icon></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <ul className="links-copy">
          <li><a href="#">Legal</a></li>
          <li><a href="#">Centro de Privacidade</a></li>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Cookies</a></li>
          <li><a href="#">Sobre Anúncios</a></li>
        </ul>

        <div className="copyright">
          <p><ion-icon name="earth-outline"></ion-icon> Brasil</p>
          <p>&copy; 2022 Spotify</p>
        </div>
      </div>
    </div>
  )
}