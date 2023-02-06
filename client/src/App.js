import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
      <div className='App' >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<HomePage />} />
          {/* <Route path="/admin" element={<AdminLogin />} /> */}
        </Routes>
      </div>

  );
}

export default App;
