import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RegisterSuccessPopup from './RegisterSuccessPopup'; // Import the popup component

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

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

  const closePopup = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Create Account</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
      {showPopup && <RegisterSuccessPopup onClose={() => setShowPopup(true)} />}
    </div>
  );
}

export default RegisterPage;
