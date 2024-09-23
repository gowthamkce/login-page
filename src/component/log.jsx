import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


function log() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log("username:", username, "password:", password)
  const handleClick = async (event) => {
   
    event.preventDefault();
    setError(""); // Reset any previous errors
    
    await axios.post('http://localhost:3000/login',{email,password}).then(
    result=>{
      console.log(result)
      if (result.data==="success"){
          navigate("/product")
          setEmail("")
          setPassword("")
         
      }
      setError(result.data)
  }
).catch (error=>{
  console.error("Error during login:", error);
  setError(error.response?.data?.message || "An unexpected error occurred");
})
};
}
  return (
    <div className="login">
    <div className='container'>
      <h1>Welcome to our website</h1>
      <form  onSubmit={(e)=>handleSubmit(e)}>
      <div className="login">
      <h3>User name</h3>
      <input 
      type="text"
      placeholder='user name'
      onChange={(e)=>setUsername(e.target.value)}/><br />
      <h3>Password</h3>
      <input
      type="password"
      placeholder='password'
      onChange={(e)=>setPassword(e.target.value)}/><br />
  
      
      <Link to='/land'><button >Login</button></Link>
      <Link to='/reg'> <button >Register</button></Link>
      
      <br />
      <a href="#">forget password</a>
      </div>
      </form>
    </div>
    </div>
  )
}

export default log
