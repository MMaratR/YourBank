import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setTitle } from '../store.js'
import { toast } from 'react-toastify'

export const Header = ({ children }) => {
  const isAuth = useSelector(state => state.title.isAuth)
  const dispatch = useDispatch()
  const Click = () => {
    dispatch(setTitle(false))
    toast('logout Success')
  }

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
              <li><Link to={'/me'}>Account</Link></li>
              <li><Link to={'/'} onClick={Click}>Logout</Link></li>
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