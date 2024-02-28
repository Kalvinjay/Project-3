import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';


function LoginPage() {
  
  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/register", {
        email,password
      })
      .then(res=>{
        if(res.data === "exist"){
          alert("User already exists")
         
        }
        else if(res.data === "not exist"){
          history("/home",{state:{id:email}})
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

        <h2>Register here</h2>

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
        <Link to="/login">Login Page</Link>

      </div>

    </Layout>
  )
}

export default LoginPage;
// function RegisterPage() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/register', formData);
//       console.log('Registration successful:', response.data);
//       setShowPopup(true); // Display popup on successful registration
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };  

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} />
//         <button type="submit">Create Account</button>
//       </form>
//       <p>Already have an account? <Link to="/login">Login</Link></p>
//       {showPopup && <RegisterSuccessPopup onClose={() => setShowPopup(true)} />}
//     </div>
//   );
// }


// export default RegisterPage;
