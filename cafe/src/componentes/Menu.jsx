import React from "react";
import '../styles/Menu.css'; // Archivo de estilos para el menú
import { Link, NavLink } from 'react-router-dom';

function Menu() {   
    return (     
        <section className="menu-section">
            <nav className="menu">

                <ul className="menu-links">

                <li><NavLink to="/" end>Inicio</NavLink></li>
                <li><NavLink to="/procesos">Procesos</NavLink></li>
                <li><NavLink to="/productos">Productos</NavLink></li>
                <li><NavLink to="/contactanos">Contáctenos</NavLink></li>
                </ul>
            </nav> 
        </section>
        
    );
}   
export default Menu;