import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Splash from './components/userAccess/splash';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
