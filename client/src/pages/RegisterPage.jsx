import React from 'react'
import log_reg from '../styles/log_reg.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setTitle } from '../store.js';

export const RegisterPage = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const response = await fetch('http://localhost:4444/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.register === 'Success') {
      dispatch(setTitle(true))
      toast(result.register)
      navigate('/')
    } else if (result.register === 'Faild') {
      toast(result.message)
    }


    setEmail('');
    setPassword('');
  };

  return <main class='main' style={log_reg}>
    <div class='register-form'>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div class='form-group'>
          <label for='email'>Email:</label>
          <input type='email' id='email' name='email' required value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div class='form-group'>
          <label for='password'>Password:</label>
          <input type='password' id='password' name='password' required value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button type='submit' class='submit-btn'>Register</button>
      </form>
    </div>
  </main>
}
