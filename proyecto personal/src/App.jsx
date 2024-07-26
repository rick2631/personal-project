import React from 'react';
import './App.css';
import Navbar from './components/navbar';
// Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <section className="section section-1" id="section-1">
        <h1>Presentación</h1>
        <p>Contenido de la sección 1</p>
      </section>
      <section className="section section-2" id="section-2">
        <h1>About Me</h1>
        <p>Contenido de la sección 2</p>
      </section>
      <section className="section section-3" id="section-3">
        <h1>Projects</h1>
        <p>Contenido de la sección 3</p>
      </section>
    </div>
  );
};

export default App;
