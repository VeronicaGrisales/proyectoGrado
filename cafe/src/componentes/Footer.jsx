import React from 'react';
import '../styles/Footer.css'; // Archivo de estilos del footer


//se crea el componente Footer

function Footer() {
    return (

    <footer className="footer">
    <div className="footer-container">

        {/*  Columna 1: Información básica */}
    <div className="titulo-footer">
        <h3>Café Nazareth</h3>
        <p>Tu refugio de sabor y calidez</p>
        <p>Desde las montañas colombianas, cultivamos con amor el mejor café artesanal</p>
    </div>

    </div>

        {/* Columna 2: Parte inferior del footer */}
    <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Café Nazareth. Todos los derechos reservados.</p>
    </div>
    </footer>

    );





}

export default Footer;