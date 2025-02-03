import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
   
    <Router>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
     
      </Routes>
    </Router>
  );
}

export default App;
