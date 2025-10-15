import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inicio from './paginas/Inicio.jsx';   // Página de inicio
import App from './App.jsx';
import './styles/Inicio.css';  // Estilos globales

// Definir las rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,   // otra ruta (opcional)
  },
 
])

// Renderizar la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)




// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

