import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const Register = () => {
  const [inputs,setInputs] = useState({
    username:" ",
    email:"",
    password:"",
  })
  const[err,setError] = useState(null)

  const handleChange = (e) =>{
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }
  const handleSubmit = async e =>{
    e.preventDefault()
    console.log("默认行为已更改");
    try{
      axios.post("/auth/register",inputs)
      // console.log(res);
    }catch(err){
      console.log(err)
      setError(err.res.data)
    }
  }

  console.log(inputs);

  return (
    <div className="auth-container">
    <div className='auth-register'>
      <h1 className='login'>register</h1>
      <form className='form'>
        <input 
          type="text"  
          className="input" 
          placeholder='請輸入賬號' 
          name='username' 
          onChange={handleChange}
        />
        <input 
          type='email' 
          placeholder='請輸入email' 
          name='email' 
          onChange={handleChange}
        />
        <input 
          type='password' 
          placeholder='請确认密碼' 
          name='password' 
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>regist</button>
        <p>already have a account?<Link to="/login" >Login</Link></p>
        
      </form>
      </div>
    </div>
  )
}

export default Register


