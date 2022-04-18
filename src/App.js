import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Login from './views/Login';
import Register from './views/Register';
import Landing from './views/Landing';
import Events from './views/Events';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
