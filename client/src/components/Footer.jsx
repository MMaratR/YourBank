import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import mail from '../images/mail.png'
import phone from '../images/phone.png'
import map from '../images/map.png'
import social from '../images/social.png'

export const Footer = () => {
  return <footer class='footer'>
    <div class='container'>
      <div class='logo'>
        <img src={logo} alt='logo'></img>
      </div>
      <nav class='footer_nav'>
        <ul class='footer_list'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/posts'}>Posts</Link></li>
        </ul>
      </nav>
      <div class='contact'>
        <ul class='contact_list'>
          <li><a href='mailto:hello@skillbirdge.com'>
            <img src={mail} alt='mail'></img>
            hello@skillbirdge.com
          </a></li>
          <li><a href='tel:+9191813232309'>
            <img src={phone} alt='phone'></img>
            +91 91813 23 2309
          </a></li>
          <li><a href='https://ya.ru/'>
            <img src={map} alt='map'></img>
            Somewhere in the World
          </a></li>
        </ul>
      </div>
      <div class='social'>
        <img src={social} alt='social' class='social_img'></img>
        <p class='footer_text'>
          YourBank All Rights Reserved
        </p>
        <div class='policy'>
          <p>Privacy Policy</p>
          <div class='vertical_line'></div>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  </footer>
}