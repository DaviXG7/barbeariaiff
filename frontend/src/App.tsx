import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from "./components/loginPage/Form";
import Home from "./components/Home";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/home" element={<Home />} />
          </Routes>
      </Router>
  );
}

export default App;
