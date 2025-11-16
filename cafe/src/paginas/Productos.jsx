import React from "react";

//importación de imagenes
import bolsa1 from '../assets/bolsa1.jpg';
import bolsa2 from '../assets/bolsa2.jpg';
import bolsa3 from '../assets/bolsa3.jpg';
import bolsa4 from '../assets/bolsa4.jpg';
import drip from '../assets/drip.jpg';
import lata from '../assets/lata.jpg';

// Se importa el icono del carrito y fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import '../styles/Productos.css'; // Archivo de estilos para la página de productos

//se crea el componente Productos
function Productos() {   
    return (     
        <section className="productos">

            {/*Sección de inicio */}
            <div className="inicio-productos">
                <h1 className="tituloprin">Nuestros Productos</h1>
                <p className="texto-proin">Explora nuestra selección de cafés excepcionales, 
                cuidadosamente cultivados y tostados para ofrecerte una experiencia única en cada taza.
                Desde granos de origen único hasta mezclas exclusivas, descubre la pasión y dedicación 
                que ponemos en cada producto.</p>
                <p className="texto-proin"><strong>Todos nuestros cafés están disponibles en la molienda
                que requieras:</strong> grano entero, espresso, filtro o prensa francesa.
                Selecciona la variedad de tu preferencia y elige el tipo de molienda ideal para tu método de preparación.</p>
            </div>

            {/*sección de productos con su valor */}
            <div className="galeria-productos">

                <div className="pro">
                    <h3 className='nombre-pro'>Variedad Caturra 500 gramos</h3>
                    <div className="prod">
                    <img className="img-producto" src={bolsa1} alt="Variedad caturra" />
                    <div className="pro-info">
                    <p className="texto-producto">Uno de nuestros Cafés mas sobresalientes en perfil de taza,
                    con sus notas aromáticas, una acidez media, cultivada a 1.900 m, potenciando sus 
                    sabores afrutados. Dedicada para esos paladares exquisitos y exigentes.
                    </p>
                    <p className="texto-producto">Presentación en 500 gramos</p>
                    <div className="precio-carrito">
                    <p className="valor">$35.000</p>
                    <div className="carritoo">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
                    </div>
                    </div>
                    </div>  
                    </div>
                </div>

                <div className="pro">
                    <h3 className='nombre-pro'>Variedad Caturra 250 gramos</h3>
                    <div className="prod">  
                    <img className="img-producto" src={bolsa1} alt="Variedad caturra" />
                    <div className="pro-info">
                    <p className="texto-producto">Uno de nuestros Cafés mas sobresalientes en perfil de taza,
                    con sus notas aromáticas, una acidez media, cultivada a 1.900 m, potenciando sus 
                    sabores afrutados. Dedicada para esos paladares exquisitos y exigentes.
                    </p>
                    <p className="texto-producto">Presentación en 250 gramos</p>
                    <div className="precio-carrito">
                    <p className="valor">$25.000</p>
                    <div className="carritoo">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
                    </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="pro">
                    <h3 className="nombre-pro">Presentación 2.500 gramos grano o molido</h3>
                    <div className="prod">                   
                    <img className="img-producto" src={bolsa2} alt="Presentacion 2500 gramos"/>
                    <div className="pro-info">
                    <p className="texto-producto">Bolsa 2.500 gramos ideal para tu oficina, familia o negocio,
                    con la mejor relación precio, cantidad y calidad.
                    </p>
                    <p className="texto-producto">Variedad caturra</p>
                    <div className="precio-carrito">
                    <p className="valor">$170.000</p>
                    <div className="carritoo">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
                    </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="pro">
                    <h3 className="nombre-pro">Blend 500 gramos</h3>
                    <div className="prod">                    
                    <img className="img-producto" src={bolsa4} alt="Blend"/>
                    <div className="pro-info">
                    <p className="texto-producto">Presentación personal de una libra, para disfrutar
                    al maximo de una mezcla maravillosa entre variedades caturra, castillo y variedad colombiana.
                    </p>
                    <p className="texto-producto">Presentación en 500 gramos</p>
                    <div className="precio-carrito">
                    <p className="valor">$35.000</p>
                    <div className="carritoo">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
                    </div>
                    </div>
                    </div>
                    </div>  
                </div>

                <div className="pro">
                    <h3 className="nombre-pro">Blend 250 gramos</h3>
                    <div className="prod">
                    <img className="img-producto" src={bolsa3} alt="Blend"/>
                    <div className="pro-info">
                    <p className="texto-producto">Presentación personal de media libra, para disfrutar
                    al maximo de una mezcla maravillosa entre variedades caturra, castillo y variedad colombiana.
                    </p>
                    <p className="texto-producto">Presentación en 250 gramos</p>
                    <div className="precio-carrito">
                    <p className="valor">$25.000</p>
                    <div className="carritoo">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
                    </div>
                    </div>
                    </div>
                    </div>  
                </div>

                <div className="pro">
                    <h3 className="nombre-pro">Drip Coffe</h3>
                    <div className="prod">
                    <img className="img-producto" src={drip} alt="drip"/>
                    <div className="pro-info">
                    <p className="texto-producto">Presentación individual para disfritar una experiencia 
                    única. Una mezcla armoniosa de caturra, castillo y variedad colombia, en un práctico drip
                    que te permite vivir el sabor del café a donde quiera que vayas.
                    </p>
                    <p className="texto-producto">Presentación individual</p>
                    <div className="precio-carrito">
                    <p className="valor">$8.000</p>
                    <div className="carritoo">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
                    </div>
                    </div>
                    </div>
                    </div>  
                </div>

                <div className="pro">
                    <h3 className="nombre-pro">Lata edición especial.</h3>
                    <div className="prod">
                    <img className="img-producto" src={lata} alt="Lata edicion especial"/>
                    <div className="pro-info">
                    <p className="texto-producto">Descubre la elegancia en cada sorbo: nuestra edición
                    especial de café tostado no solo deleita tu paladar, sino que tambie preserva la frescura 
                    en su hermosa lata reutilizable. ¡Un diseño que enamora y un sabor que perdura!
                    </p>
                    <p className="texto-producto">En grano o molido</p>
                    <div className="precio-carrito">
                    <p className="valor">$40.000</p>
                    <div className="carritoo">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
                    </div>
                    </div>
                    </div>
                    </div>  
                </div>

            </div>
        </section>
        
    );
}   
export default Productos;