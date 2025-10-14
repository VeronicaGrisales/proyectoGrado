import React from 'react';
import '../styles/index.css'; // Archivo de estilos para la página de inicio
import Header from '../componentes/Header'; 

function Inicio() {
  return (
    <div className="inicio">
        <Header />
    <main className="contenido-principal">
      <h1>Bienvenido a Café Nazareth</h1>
      <p>Disfruta del mejor café artesanal colombiano.</p>
      </main>
    </div>
  );
}

export default Inicio;
