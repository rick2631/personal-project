import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';


const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Home/>
    </div>
  );
};

export default App;
