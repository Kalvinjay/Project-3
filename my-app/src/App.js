import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import UpdateInfoPage from './UpdateInfoPage';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/update" element={<UpdateInfoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
