import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './componentes/Header';
import Menu from './componentes/Menu';
import Footer from './componentes/Footer';
import './styles/App.css';

function Layout() {
  return (
    <div className="app-container">
      <Header />
      <Menu />
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;