import React from "react";
import '../styles/Menu.css'; // Archivo de estilos para el menú
import { Link, NavLink } from 'react-router-dom'; // Importación de NavLink para navegación

//se crea el componente Menu

function Menu() {   
    return (     
        <section className="menu-section">
            <nav className="menu">

                {/* Enlaces de navegación utilizando NavLink para resaltar la página activa */}
                <ul className="menu-links">

                {/* Uso de 'end' en el NavLink de Inicio para que solo se active en la ruta exacta '/' */}
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