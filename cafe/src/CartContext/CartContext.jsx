import { useState } from 'react';
import { CartContext } from './cartContext.js';

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
        const index = prev.findIndex((item) => item.id === producto.id);

    if (index >= 0) {
        const copia = [...prev];
        copia[index].cantidad += 1;
        return copia;
        }

    return [...prev, { ...producto, cantidad: 1 }];
    });
};

return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito }}>
        {children}
    </CartContext.Provider>
);
};


//NOTA CODIGO ANTERIOR 
// import {createContext, useState} from 'react';

// // Crear el contexto del carrito, la lógica del carrito de compras
// const CartContext = createContext();


// export const CartProvider = ({ children }) => {
//     const [carrito, setCarrito] = useState([])

//     const agregarAlCarrito = (productos) => {     //el producto siginifica el objeto que se quiera agregar al carrito
//         setCarrito((carritoAnterior) => {        // se cambia el estado del carrito anterior
//             const yaExisteElproducto = carritoAnterior.findIndex(     // se pasa una funcion para ver el estado del carrito anterior. findIndex --> este metodo se utiliza para buscar el producto ya esta en el carrito
//                 (articulo) => articulo.id === productos.id             // se recorre el carrito anterior y se compara el id del articulo con el id del producto que se quiere agregar
//             );
//             if (yaExisteElproducto >= 0) {
//                 const carritoActualizado = [...carritoAnterior]; // se crea una copia del carrito anterior (... ha esto se le llama distribución)
//                 carritoActualizado[yaExisteElproducto].cantidad += 1;
//                 return carritoActualizado;
//             } else {
//                 return [...carritoAnterior, { ...productos, cantidad: 1 }]; //estos son dos objetos que se unen y se deberan de mostrar y la cantidad inicia en 1
//             }
//         })
//     }

// return (
//     <CartContext.Provider value={{carrito, agregarAlCarrito}}> {/*se pasa el estado y la función agregar al carritocon los valores disponibles*/}
//         {children}
//     </CartContext.Provider>
// )
// }

// export const useCart = () => useContext(CartContext); 
// //se esxporta una función personalizada llamada useCart que utiliza el hook useContext para acceder al contexto del carrito de compras (CartContext).