import React from 'react';
import '../styles/Header.css'; // Archivo de estilos del header
import logo from '../assets/logo1.png'; 

/*URL para importar los diferentes iconos utilizados*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
  
    <header className="header">
      {/*IZQUIERDA, se hacen estas alienaciones para diferenciar*/} 
      <div className='logo-contenedor'>
      <img className="logo" src={logo} alt="Logo Café Nazareth" />
    </div>

    {/*CENTRO*/}    
        <div className="titulo">
          <h1>Café Nazareth</h1>
          <p>Tu refugio de sabor y calidez</p>
        </div>
      
    {/*DERECHA*/}   
    <div className="derecha">
    <div className="busqueda">
        <FontAwesomeIcon icon={faSearch} className="icono-busqueda" /> {/*icono de búsqueda */}
        <input type="text" placeholder="Buscar..." />
      </div>

      <div className="carrito">
         <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" /> {/*icono del carrito de compras */}
      </div>
    </div>
    </header>
  );
}

export default Header;
