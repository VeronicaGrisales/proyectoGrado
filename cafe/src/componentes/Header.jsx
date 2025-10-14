import React from 'react';
import '../styles/Header.css'; // Archivo de estilos del header
import logo from '../assets/logo1.png'; 

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo Café Nazareth" className="logo" />
        <div className="titulo">
          <h1>Café Nazareth</h1>
          <p>Tu refugio de sabor y calidez</p>
        </div>
      </div>

      <div className="busqueda">
        <input type="text" placeholder="Buscar..." />
        <button>🔍</button>
      </div>

      <div className="carrito">
        <i className="fa fa-shopping-cart"></i> {/* Puedes usar un ícono o imagen */}
      </div>
    </header>
  );
}

export default Header;
