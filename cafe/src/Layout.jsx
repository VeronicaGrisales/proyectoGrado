import React from 'react';
import { Outlet } from 'react-router-dom'; // Importa Outlet para renderizar las rutas hijas

// Importación de componentes que se utilizan en todas las secciones
import Header from './componentes/Header'; 
import Menu from './componentes/Menu';
import Footer from './componentes/Footer';

// Importación de estilos
import './styles/App.css';


//se crea el componente Layout
function Layout() {
  return (
    <div className="app-container">
      {/* Componentes comunes en todas las páginas */}
      <Header />
      <Menu />
      
      <main className="main-content">

        {/* Aquí se renderizan las rutas hijas */}
        <Outlet />

      </main>
      
      {/* Componente de pie de página */}
      <Footer />
    </div>
  );
}

export default Layout;