import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'

const Login = () => {
  return (
    <div className='auth'>
      <h1>SIGN IN</h1>
       
        <form>
        
          <input required  type="text" placeholder='UserName' /> 
          <input required  type="email" placeholder='Email' /> 
          <input required  type="password" placeholder='Password' />
          
          <button>Login</button>
          <p>There is an error!!!</p>
          <span>Don't have an account? <Link to={'/reg'}>Register</Link>
          </span>


        </form>
    </div>
  )
}

export default Login