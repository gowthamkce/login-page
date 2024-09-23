import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";

function reg() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(username,password,email)
  async function handleRegister(event) {
    event.preventDefault();

    if (!username || !password) {
      console.log("All fields are required");
      setError("All fields are required");
      return;
    }

    axios.post("http://localhost:3000/register",{username,password}).then(result=>{
      if(result.data=="success"){
        console.log(result)
        navigate("/")
      }
      else{
        setError(result.data)
      }
    
    }).catch(err=>{
      console.log(`client ${err.response.data.message}`)
      setError(err.response.data.message || "unexpected")
    })
  }
  console.log("username", username, "password", password)
 // axios call to register user with the given username and password
}

  return (
    <div className="register">
    <div className='container'>
      <h1>Registration</h1>
      <form  onSubmit={(e)=>handleSubmit(e)}>
        <label>
          <h3>Username:</h3>
          <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} />
        </label>
        <label>
          <h3>Mail:</h3>
          <input type="text" name="mail" onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <label>
          <h3>Password:</h3>
          <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <button type='submit'><Link to = "/land">submit</Link></button>
      </form>
      <p>Already have an account? <Link to="/">Login</Link> </p>
    </div>
    </div>
  )
}

export default reg