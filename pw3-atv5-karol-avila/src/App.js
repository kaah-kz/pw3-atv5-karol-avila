import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from '../src/components/Form';
import CardTurma from '../src/components/CardTurma';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/cardTurma" element={<CardTurma />} />
      </Routes>
    </Router>
  );
}

export default App;
