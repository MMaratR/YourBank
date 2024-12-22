import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export const Header = ({ children }) => {
  const isAuth = false

  return <header class='header'>
    <div class='container'>
      <nav class='header_nav'>
        <img src={logo} alt='logo'></img>
        <ul class='header_list'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/posts'}>Posts</Link></li>
        </ul>

        {
          isAuth ? (
            <ul class='header_button'>
              <Link to={'/me'}>Account</Link>
            </ul>
          ) : (
            <ul class='header_button'>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </ul>
          )
        }
      </nav>
    </div>
  </header>
}