import React from 'react';
import '../styles/Inicio.css'; // Archivo de estilos para la página de inicio
import Header from '../componentes/Header'; 
import coffe from '../assets/coffe.jpg';

function Inicio() {
  return (
    <section className="inicio">

    <div className="escencia-cafe">
        <Header />
        {/* aqui debe de ir el menu */}
    <main className="contenido-principal">
      <h1 className='titulop'><strong>Bienvenido a Café Nazareth</strong></h1>
    <div className='seccion-intro'>
    <div className='texto-intro'>
      <p>Desde las montañas colombianas nace un café con alma.
      En <strong>Café Nazareth,</strong> cada grano cuenta una historia, refleja la armonía entre el trabajo del campo y la dedicación de quienes lo cultivan.</p>
      <p>Somos mas que un café; somos el resultado de un proceso cuidadoso y apasionado.
      Producimos con conciencia, pasión y el orgullo de llevarte un café <strong>hecho con el corazón.</strong></p>
      <p>Te invitamos a ser parte de esta experiencia, a disfrutar de un café que trasciende lo ordinario.</p>
    </div>
      
    <div className='imagen-inicio'>
    <img src={coffe} alt="Imagen de café" />
    </div>
    </div>
    </main>

    </div>
    <div className='variedades'>
      <h1 className='titulop'>Descubre nuestras variedades</h1>
    </div>

    <div className='procesos'>
      <h1 className='titulop'>Conoce algunos de nuestros procesos</h1>
      <p>Desde la semilla hasta el aroma final, cada etapa de proceso se realiza con cuidados artesanal.
      Cada grano es seleccionado a mano, asegurando que solo los mejores lleguen a tu taza.
      Conoce como llevamos el café del campo directamente a tu mesa.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ut excepturi aliquam sequi! Doloremque consectetur est odio earum aut molestiae delectus, quo consequatur? Facilis maxime eum in numquam aperiam asperiores.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ut excepturi aliquam sequi! Doloremque consectetur est odio earum aut molestiae delectus, quo consequatur? Facilis maxime eum in numquam aperiam asperiores.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ut excepturi aliquam sequi! Doloremque consectetur est odio earum aut molestiae delectus, quo consequatur? Facilis maxime eum in numquam aperiam asperiores.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ut excepturi aliquam sequi! Doloremque consectetur est odio earum aut molestiae delectus, quo consequatur? Facilis maxime eum in numquam aperiam asperiores.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ut excepturi aliquam sequi! Doloremque consectetur est odio earum aut molestiae delectus, quo consequatur? Facilis maxime eum in numquam aperiam asperiores.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ut excepturi aliquam sequi! Doloremque consectetur est odio earum aut molestiae delectus, quo consequatur? Facilis maxime eum in numquam aperiam asperiores.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ut excepturi aliquam sequi! Doloremque consectetur est odio earum aut molestiae delectus, quo consequatur? Facilis maxime eum in numquam aperiam asperiores.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ut excepturi aliquam sequi! Doloremque consectetur est odio earum aut molestiae delectus, quo consequatur? Facilis maxime eum in numquam aperiam asperiores.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ut excepturi aliquam sequi! Doloremque consectetur est odio earum aut molestiae delectus, quo consequatur? Facilis maxime eum in numquam aperiam asperiores.
      </p>
    </div>

    {/* <div className="galeria">
      <div className="imagen-contenedor">
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Café Clásico" />
        <h2>Café Clásico</h2>
        <p>Un sabor tradicional que nunca pasa de moda.</p>
      </div>
      <div className="imagen-contenedor">
        <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Café Especial" />
        <h2>Café Especial</h2>
        <p>Un viaje de sabores en cada taza.</p>
      </div>
    </div> */}
  </section>
  );
}

export default Inicio;
