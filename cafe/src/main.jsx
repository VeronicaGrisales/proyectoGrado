import React from 'react';

import ReactDOM from 'react-dom/client';// Librería para renderizar la aplicación

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Librerías para el enrutamiento
import Layout from './Layout.jsx'; // Componente de diseño con Header, Menu y Footer
import Inicio from './paginas/Inicio.jsx';   // Página de inicio
import Procesos from './paginas/Procesos.jsx'; // Página de procesos
import Productos from './paginas/Productos.jsx'; // Página de productos
import Contactanos from './paginas/Contactanos.jsx'; // Página de contáctenos
import Nosotros from './paginas/Nosotros.jsx'; // Página de nosotros
import Metodos from './paginas/Metodos.jsx'; // Página de métodos
import Cart from './cart/Cart.jsx'; // Página del carrito de compras

// import App from './App.jsx';
import './styles/Inicio.css';  // Estilos globales
import { CartProvider } from './CartContext/CartContext.jsx';
 // Proveedor del contexto del carrito de compras


// Definir las rutas con Layout
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: 'procesos',
        element: <Procesos />,
      },
      {
        path: 'productos',
        element: <Productos />,
      },
      {
        path: 'contactanos',
        element: <Contactanos />,
      },
      {
        path: 'nosotros',
        element: <Nosotros />,
      },
      {
        path: 'metodos',
        element: <Metodos />,
      },
      {
        path: 'carrito',
        element: <Cart />,
      }
    ],
  },
]);

// Renderizar la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
  </React.StrictMode>
);







//HACIENDO CAMBIOS 

// // Definir las rutas
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Inicio />,   // otra ruta (opcional)
//   },
  
//   {path: '/procesos', element: <Procesos />,},
//   {path: '/productos', element: <Productos />,},
//   {path: '/contactanos', element: <Contactanos />,},
// ])

// // Renderizar la aplicación
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );




// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

