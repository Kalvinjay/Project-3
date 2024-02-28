import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';
import './LoginRegPage.css';

function LoginPage() {

  const history=useNavigate();
  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/login", {
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
          <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
          <label>Password:</label>
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id=""  />

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

export default LoginPage;



// function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/register', formData);
//       console.log('Registration successful:', response.data);
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };

//   return (
//     <Layout>
//        <div>

//       <h2>Login</h2>

//       <form onSubmit={handleSubmit}>
//         <label>Email or Username:</label>
//           <input type="text" name="email" value={formData.email} onChange={handleChange} />

//         <label>Password:</label>
//          <input type="password" name="password" value={formData.password} onChange={handleChange} />

//         <button type="submit">Sign In</button>
//       </form>

//       <p>Don't have an account? <Link to="/register">Register</Link></p>

//     </div>
//     </Layout>
//   );
// }


