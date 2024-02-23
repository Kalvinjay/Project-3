import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
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
        <Route exact path="/" component={<HomePage />} />
        <Route path="/login" component={<LoginPage />} />
        <Route path="/register" component={<RegisterPage />} />
        <Route path="/update" component={<UpdateInfoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
