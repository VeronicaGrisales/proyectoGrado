import React from "react";
import { useCart } from "../CartContext/useCart.jsx"; // Importar el hook personalizado para usar el contexto del carrito

// Icono carrito
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "../styles/Productos.css";

// Imágenes
import bolsa1 from "../assets/bolsa1.jpg";
import bolsa2 from "../assets/bolsa2.jpg";
import bolsa3 from "../assets/bolsa3.jpg";
import bolsa4 from "../assets/bolsa4.jpg";
import drip from "../assets/drip.jpg";
import lata from "../assets/lata.jpg";

// Arreglo de productos
const productos = [
    {
    id: 1,
    nombre: "Variedad Caturra 500 gramos",
    descripcion: "Uno de nuestros Cafés mas sobresalientes en perfil de taza,con sus notas aromáticas, una acidez media, cultivada a 1.900 m, potenciando sus sabores afrutados. Dedicada para esos paladares exquisitos y exigentes.",
    precio: 35000,
    presentacion: "500 gramos",
    imagen: bolsa1,
    stock: 12,
    },
    {
    id: 2,
    nombre: "Variedad Caturra 250 gramos",
    descripcion: "Uno de nuestros Cafés mas sobresalientes en perfil de taza,con sus notas aromáticas, una acidez media, cultivada a 1.900 m, potenciando sus sabores afrutados. Dedicada para esos paladares exquisitos y exigentes.",
    presentacion: "250 gramos",
    precio: 25000,
    imagen: bolsa1,
    stock: 11,
    },
    {
    id: 3,
    nombre: "Presentación 2.500 gramos",
    descripcion: "Bolsa 2.500 gramos ideal para tu oficina, familia o negocio, con la mejor relación precio, cantidad y calidad.",
    presentacion: "2.500 gramos",
    precio: 170000,
    imagen: bolsa2,
    stock: 5,
    },
    {
    id: 4,
    nombre: "Blend 500 gramos",
    descripcion: "Presentación personal de una libra, para disfrutar al máximo de una mezcla maravillosa entre variedades caturra, castillo y variedad colombiana.",
    presentacion: "500 gramos",
    precio: 35000,
    imagen: bolsa4,
    stock: 8,
    },
    {
    id: 5,
    nombre: "Blend 250 gramos",
    descripcion: "Presentación personal de media libra, para disfrutar al maximo de una mezcla maravillosa entre variedades caturra, castillo y variedad colombiana.",
    presentacion: "250 gramos",
    precio: 25000,
    imagen: bolsa3,
    stock: 10,
    },
    {
    id: 6,
    nombre: "Drip Coffee",
    descripcion: "Presentación individual para disfritar una experiencia única. Una mezcla armoniosa de caturra, castillo y variedad colombia, en un práctico drip que te permite vivir el sabor del café a donde quiera que vayas.",
    presentacion: "Unidad",
    precio: 8000,
    imagen: drip,
    stock: 20,
    },
    {
    id: 7,
    nombre: "Lata edición especial",
    descripcion: "Descubre la elegancia en cada sorbo: nuestra edición especial de café tostado no solo deleita tu paladar, sino que tambie preserva la frescura en su hermosa lata reutilizable. ¡Un diseño que enamora y un sabor que perdura!",
    presentacion: "Grano o molido",
    precio: 40000,
    imagen: lata,
    stock: 15,
    },
];

function Productos() {

    const { agregarAlCarrito } = useCart();


const handleAgregarAlCarrito = (producto) => {
    agregarAlCarrito({
    ...producto,
    cantidad: 1,
    });
};

return (
    <section className="productos">
      {/* Sección de inicio */}
    <div className="inicio-productos">
        <h1 className="tituloprin">Nuestros Productos</h1>
        <p className="texto-proin">
        Explora nuestra selección de cafés excepcionales, 
        cuidadosamente cultivados y tostados para ofrecerte una experiencia única en cada taza.
        Desde granos de origen único hasta mezclas exclusivas, descubre la pasión y dedicación 
        que ponemos en cada producto
        </p>
        <p className="texto-proin"><strong>Todos nuestros cafés están disponibles en la molienda
        que requieras:</strong> grano entero, espresso, filtro o prensa francesa.
        Selecciona la variedad de tu preferencia y elige el tipo de molienda ideal para tu método
        de preparación.</p>
    </div>

      {/* Galería de productos */}
    <div className="galeria-productos">
        {productos.map((producto) => (
        <div className="pro" key={producto.id}>
            <h3 className="nombre-pro">{producto.nombre}</h3>

            <div className="prod">
            <img
                className="img-producto"
                src={producto.imagen}
                alt={producto.nombre}
            />

            <div className="pro-info">
                <p className="texto-producto">{producto.descripcion}</p>
                <p className="texto-producto">
                Presentación: {producto.presentacion}
                </p>

                <div className="precio-carrito">
                <p className="valor">
                    ${producto.precio.toLocaleString()}
                </p>

                <div
                    className="carritoo"
                    onClick={() => handleAgregarAlCarrito(producto)}
                >
                    <FontAwesomeIcon
                    icon={faShoppingCart}
                    size="2x"
                    color="#6b4f3a"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        ))}
    </div>
    </section>
);
}

export default Productos;







//NOTA IMPORTANTE: Código anterior eliminado

// import React from "react";
// import { useCart } from '../Cartcontext/CartContext.jsx';

// // Se importa el icono del carrito y fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import '../styles/Productos.css'; // Archivo de estilos para la página de productos

// //importación de imagenes
// import bolsa1 from '../assets/bolsa1.jpg';
// import bolsa2 from '../assets/bolsa2.jpg';
// import bolsa3 from '../assets/bolsa3.jpg';
// import bolsa4 from '../assets/bolsa4.jpg';
// import drip from '../assets/drip.jpg';
// import lata from '../assets/lata.jpg';


// //Lista de los productos disponibles
// const productos = [
// {
//     id: 1,
//     nombre: 'Variedad Caturra 500 gramos',
//     descripcion: 'Uno de nuestros cafés más sobresalientes...',
//     presentacion: '500 gramos',
//     precio: 35000,
//     imagen: bolsa1,
//     stock: 12
// },
// {
//     id: 2,
//     nombre: 'Variedad Caturra 250 gramos',
//     descripcion: 'Uno de nuestros cafés más sobresalientes...',
//     presentacion: '250 gramos',
//     precio: 25000,
//     imagen: bolsa1,
//     stock: 11
// },
// {
//     id: 3,
//     nombre: 'Presentación 2.500 gramos',
//     descripcion: 'Ideal para oficina o negocio',
//     presentacion: '2.500 gramos',
//     precio: 170000,
//     imagen: bolsa2,
//     stock: 5
// },
// {
//     id: 4,
//     nombre: 'Blend 500 gramos',
//     descripcion: 'Mezcla caturra, castillo y colombia',
//     presentacion: '500 gramos',
//     precio: 35000,
//     imagen: bolsa4,
//     stock: 8
// },
// {
//     id: 5,
//     nombre: 'Blend 250 gramos',
//     descripcion: 'Mezcla caturra, castillo y colombia',
//     presentacion: '250 gramos',
//     precio: 25000,
//     imagen: bolsa3,
//     stock: 10
// },
// {
//     id: 6,
//     nombre: 'Drip Coffee',
//     descripcion: 'Presentación individual portátil',
//     presentacion: 'Unidad',
//     precio: 8000,
//     imagen: drip,
//     stock: 20
// },
// {
//     id: 7,
//     nombre: 'Lata edición especial',
//     descripcion: 'Lata reutilizable edición especial',
//     presentacion: 'Grano o molido',
//     precio: 40000,
//     imagen: lata,
//     stock: 15
// }
// ];


// //se crea el componente Productos
// function Productos() {   
//     const { agregarAlCarrito } = useCart();

// const handleAgregarAlCarrito = () => {
//     if (productos) {
//         agregarAlCarrito({
//             //hay que asegurarse de que el objeto productos tenga las propiedades necesarias
//             id: productos.id,
//             imagen: productos.imagen,
//             nombre: productos.nombre,
//             precio: productos.precio,
//             cantidad: 1  
//         })
//     }
// }



//     return (     
//         <section className="productos">

//             {/*Sección de inicio */}
//             <div className="inicio-productos">
//                 <h1 className="tituloprin">Nuestros Productos</h1>
//                 <p className="texto-proin">Explora nuestra selección de cafés excepcionales, 
//                 cuidadosamente cultivados y tostados para ofrecerte una experiencia única en cada taza.
//                 Desde granos de origen único hasta mezclas exclusivas, descubre la pasión y dedicación 
//                 que ponemos en cada producto.</p>
//                 <p className="texto-proin"><strong>Todos nuestros cafés están disponibles en la molienda
//                 que requieras:</strong> grano entero, espresso, filtro o prensa francesa.
//                 Selecciona la variedad de tu preferencia y elige el tipo de molienda ideal para tu método
//                  de preparación.</p>
//             </div>

//             {/*sección de productos con su valor */}
//             <div className="galeria-productos">

//                 <div className="pro">
//                     <h3 className='nombre-pro'>Variedad Caturra 500 gramos</h3>
//                     <div className="prod">
//                     <img className="img-producto" src={bolsa1} alt="Variedad caturra" />
//                     <div className="pro-info">
//                     <p className="texto-producto">Uno de nuestros Cafés mas sobresalientes en perfil de taza,
//                     con sus notas aromáticas, una acidez media, cultivada a 1.900 m, potenciando sus 
//                     sabores afrutados. Dedicada para esos paladares exquisitos y exigentes.
//                     </p>
//                     <p className="texto-producto">Presentación en 500 gramos</p>
//                     <div className="precio-carrito">
//                     <p className="valor">$35.000</p>

//                     <div className="carritoo"
//                         onClick={() =>
//                             handleAgregarAlCarrito({
//                             id: 1,
//                             nombre: 'Variedad Caturra 500 gramos',
//                             precio: 35000,
//                             imagen: bolsa1
//                             })
//                         }
//                         >
//                         <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
//                     </div>

//                     </div>
//                     </div>  
//                     </div>
//                 </div>

//                 <div className="pro">
//                     <h3 className='nombre-pro'>Variedad Caturra 250 gramos</h3>
//                     <div className="prod">  
//                     <img className="img-producto" src={bolsa1} alt="Variedad caturra" />
//                     <div className="pro-info">
//                     <p className="texto-producto">Uno de nuestros Cafés mas sobresalientes en perfil de taza,
//                     con sus notas aromáticas, una acidez media, cultivada a 1.900 m, potenciando sus 
//                     sabores afrutados. Dedicada para esos paladares exquisitos y exigentes.
//                     </p>
//                     <p className="texto-producto">Presentación en 250 gramos</p>
//                     <div className="precio-carrito">
//                     <p className="valor">$25.000</p>
//                     <div className="carritoo"
//                         onClick={() =>
//                             handleAgregarAlCarrito({
//                             id: 2,
//                             nombre: 'Variedad Caturra 250 gramos',
//                             descripcion: 'Uno de nuestros cafés más sobresalientes...',
//                             presentacion: '250 gramos',
//                             precio: 25000,
//                             imagen: bolsa1
//                             })
//                         }
//                         ><FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
//                     </div>
//                     </div>
//                     </div>
//                     </div>
//                 </div>

//                 <div className="pro">
//                     <h3 className="nombre-pro">Presentación 2.500 gramos grano o molido</h3>
//                     <div className="prod">                   
//                     <img className="img-producto" src={bolsa2} alt="Presentacion 2500 gramos"/>
//                     <div className="pro-info">
//                     <p className="texto-producto">Bolsa 2.500 gramos ideal para tu oficina, familia o negocio,
//                     con la mejor relación precio, cantidad y calidad.
//                     </p>
//                     <p className="texto-producto">Variedad caturra</p>
//                     <div className="precio-carrito">
//                     <p className="valor">$170.000</p>
//                     <div className="carritoo"
//                         onClick={() =>
//                             handleAgregarAlCarrito({
//                             id: 3,
//                             nombre: 'Presentación 2.500 gramos',
//                             descripcion: 'Ideal para oficina o negocio',
//                             presentacion: '2.500 gramos',
//                             precio: 170000,
//                             imagen: bolsa2
//                             })
//                         }
//                         ><FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
//                     </div>
//                     </div>
//                     </div>
//                     </div>
//                 </div>

//                 <div className="pro">
//                     <h3 className="nombre-pro">Blend 500 gramos</h3>
//                     <div className="prod">                    
//                     <img className="img-producto" src={bolsa4} alt="Blend"/>
//                     <div className="pro-info">
//                     <p className="texto-producto">Presentación personal de una libra, para disfrutar
//                     al maximo de una mezcla maravillosa entre variedades caturra, castillo y variedad colombiana.
//                     </p>
//                     <p className="texto-producto">Presentación en 500 gramos</p>
//                     <div className="precio-carrito">
//                     <p className="valor">$35.000</p>
//                     <div className="carritoo"
//                         onClick={() =>
//                             handleAgregarAlCarrito({
//                             id: 4,
//                             nombre: 'Blend 500 gramos',
//                             descripcion: 'Mezcla caturra, castillo y colombia',
//                             presentacion: '500 gramos',
//                             precio: 35000,
//                             imagen: bolsa4
//                             })
//                         }
//                         ><FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
//                     </div>
//                     </div>
//                     </div>
//                     </div>  
//                 </div>

//                 <div className="pro">
//                     <h3 className="nombre-pro">Blend 250 gramos</h3>
//                     <div className="prod">
//                     <img className="img-producto" src={bolsa3} alt="Blend"/>
//                     <div className="pro-info">
//                     <p className="texto-producto">Presentación personal de media libra, para disfrutar
//                     al maximo de una mezcla maravillosa entre variedades caturra, castillo y variedad colombiana.
//                     </p>
//                     <p className="texto-producto">Presentación en 250 gramos</p>
//                     <div className="precio-carrito">
//                     <p className="valor">$25.000</p>
//                     <div className="carritoo"
//                         onClick={() =>
//                             handleAgregarAlCarrito({
//                             id: 5,
//                             nombre: 'Blend 250 gramos',
//                             descripcion: 'Mezcla caturra, castillo y colombia',
//                             presentacion: '250 gramos',
//                             precio: 25000,
//                             imagen: bolsa3
//                             })
//                         }
//                         ><FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
//                     </div>
//                     </div>
//                     </div>
//                     </div>  
//                 </div>

//                 <div className="pro">
//                     <h3 className="nombre-pro">Drip Coffe</h3>
//                     <div className="prod">
//                     <img className="img-producto" src={drip} alt="drip"/>
//                     <div className="pro-info">
//                     <p className="texto-producto">Presentación individual para disfritar una experiencia 
//                     única. Una mezcla armoniosa de caturra, castillo y variedad colombia, en un práctico drip
//                     que te permite vivir el sabor del café a donde quiera que vayas.
//                     </p>
//                     <p className="texto-producto">Presentación individual</p>
//                     <div className="precio-carrito">
//                     <p className="valor">$8.000</p>
//                     <div className="carritoo"
//                         onClick={() =>
//                             handleAgregarAlCarrito({
//                             id: 6,
//                             nombre: 'Drip Coffee',
//                             descripcion: 'Presentación individual portátil',
//                             presentacion: 'Unidad',
//                             precio: 8000,
//                             imagen: drip
//                             })
//                         }
//                         ><FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
//                     </div>
//                     </div>
//                     </div>
//                     </div>  
//                 </div>

//                 <div className="pro">
//                     <h3 className="nombre-pro">Lata edición especial.</h3>
//                     <div className="prod">
//                     <img className="img-producto" src={lata} alt="Lata edicion especial"/>
//                     <div className="pro-info">
//                     <p className="texto-producto">Descubre la elegancia en cada sorbo: nuestra edición
//                     especial de café tostado no solo deleita tu paladar, sino que tambie preserva la frescura 
//                     en su hermosa lata reutilizable. ¡Un diseño que enamora y un sabor que perdura!
//                     </p>
//                     <p className="texto-producto">En grano o molido</p>
//                     <div className="precio-carrito">
//                     <p className="valor">$40.000</p>
//                     <div className="carritoo"
//                         onClick={() =>
//                             handleAgregarAlCarrito({
//                             id: 7,
//                             nombre: 'Lata edición especial',
//                             descripcion: 'Lata reutilizable edición especial',
//                             presentacion: 'Grano o molido',
//                             precio: 40000,
//                             imagen: lata
//                             })
//                         }
//                         ><FontAwesomeIcon icon={faShoppingCart} size="2x" color="#6b4f3a" /> {/*icono del carrito de compras */}
//                     </div>
//                     </div>
//                     </div>
//                     </div>  
//                 </div>

//             </div>
//         </section>
        
//     );
// }   
// export default Productos;