
import './App.css';
import Login from './Login.jsx'
import React, { useState } from 'react';
import LoginOption from './LoginOption.jsx';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Main from './Main.jsx';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginOption />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />

      </Routes>
    </Router>
  )
}

export default App;
