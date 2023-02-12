import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import HomePage from './components/HomePage/HomePage';
import FormPage from './components/HomePage/FormPage';

function App() {
  return (
      <div className='App' >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mow" element={<FormPage type="mow" />} />
          <Route path="/tree" element={<FormPage type="tree" />} />
          {/* <Route path="/admin" element={<AdminLogin />} /> */}
        </Routes>
      </div>

  );
}

export default App;
