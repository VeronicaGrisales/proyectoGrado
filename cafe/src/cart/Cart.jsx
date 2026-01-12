import React from 'react'
import '../styles/Cart.css' // Archivo de estilos para el carrito

import { useCart } from "../CartContext/useCart.jsx";
 // Importar el hook personalizado para usar el contexto del carrito

// Importa FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {

    const {carrito} = useCart(); //esto se emplea para recibir los datos del carrito

return (

        
    <div className="contador-carri">
        <h2 className='tu'>Tu carrito de compras</h2>
        {carrito.length === 0 ? (
            <p>Tu carrito está vacío.</p>
        ) : (
            <>

            {/* este seria el cuadro que muestra los productos agregados */}
            <div className="cart-header">
                <p>Productos</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Total</p>
                <p>Acción</p>
            </div>
            
            <ul className="cart-items">
                {
                    carrito.map((productos) => {
                        return (

                            <li className='cart-item' key ={productos.id}>
                                <div className="text-producto">
                                    <img src ={productos.imagen} alt={productos.nombre} className="product-image" />
                                    <span>{productos.nombre}</span>
                                </div>

                                <p>${productos.precio.toLocaleString()}</p>

                                <div className="quantity-controls">
                                    <button className="quantity-btn"> {/*botón para disminuir la cantidad*/}
                                        -
                                    </button>

                                    <input type = "number"
                                    className='quantity-input'
                                    readOnly
                                    value={productos.cantidad}
                                    ></input>

                                    <button className="quantity-btn"> {/*botón para aumentar la cantidad*/}
                                        +
                                    </button>
                                    </div>

                                    <p>${(productos.precio * productos.cantidad).toLocaleString()}</p>

                                    <button className="delete-btn" onClick={() => eliminarProducto(producto.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>

                            </li>
                        )

                    })
                }
        
            </ul>
            </>
        )}
    </div>
)
};

export default Cart;