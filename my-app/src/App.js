import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Update from './Update';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/update" element={<Update />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
