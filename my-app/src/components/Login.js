import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Layout';
import './LoginRegPage.css';

function Login() {

  const history=useNavigate();
  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/", {
        email,password
      })
      .then(res=>{
        if(res.data === "exist"){
          history("/home",{state:{id:email}})
        }
        else if(res.data === "not exist"){
         alert("User has not signed up.")
        }
      })
      .catch(e => {
        alert("wrong details")
        console.log(e);
      })
    }
    catch{
      console.log(e);
    }
  }
  return (
    <Layout>

      <div className="Login">

        <h2>Login</h2>

        <form action="POST">

          <label>Email or Username:</label>
          <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
          <label>Password:</label>
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />

          <input type="submit" onClick={submit} />

       </form>

        <br />
        <p>Don't have an account?</p> 
        <br />
        <Link to="/register">Register</Link>

      </div>

    </Layout>
  )
}

export default Login;