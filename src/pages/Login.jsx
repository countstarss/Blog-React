import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth-container">
      <div className='auth'>
        <h1 className='login'>Login</h1>
        <form className='form'>
          <input type="text" className="input" />
          <input type='password' />
          <button>Login</button>
          <p>don't have a account?<Link to="/register" className='link'>Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login
