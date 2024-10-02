import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import LoginForm from "./components/loginPage/Form";
import Home from "./components/home/Home";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />

          <Route path="/home/*" element={<Home />} />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
  );
}

export default App;
