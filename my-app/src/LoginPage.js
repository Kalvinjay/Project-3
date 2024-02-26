import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/register', formData);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Layout>
       <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email or Username:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />

        <button type="submit">Sign In</button>
      </form>

      <p>Don't have an account? <Link to="/register">Register</Link></p>

    </div>
    </Layout>
  );
}

export default LoginPage;
