import React from 'react';
import '../styles/Inicio.css'; // Archivo de estilos para la página de inicio
import Header from '../componentes/Header'; 
import coffe from '../assets/coffe.jpg';
import redcoffe from '../assets/redcoffe.jpg';
import ronchoc from '../assets/ronchoc.jpg';
import tosta from '../assets/tosta.jpg';
import taza from '../assets/taza.jpg';
import bolsa1 from '../assets/bolsa1.jpg';
import bolsa3 from '../assets/bolsa3.jpg';  
import drip from '../assets/drip.jpg';
import lata from '../assets/lata.jpg';

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

      <div className='imagenes-inicio1'>

      {/* imagenes   */}
      <img src={bolsa1} alt="Bolsa blanca" />
      <img src={lata} alt="Lata edición espcial" />
      <img src={drip} alt="Drip de café" />
      <img src={bolsa3} alt="Bolsa roja" />
    </div>

    </div>

    <section className='procesos'>
      <h1 className='titulop'>Conoce algunos de nuestros procesos</h1>
    <div className='texto-proceso'>
      <p>Desde la semilla hasta el aroma final, cada paso en Café Nazareth es una historia de dedicación y amor
      por el café. Seleccionamos a mano los mejores granos y los transformamos con procesos artesanales,
      llevando así a tu taza el sabor más puro del campo colombiano.
      </p>
      <p>Conoce nuestros procesos y descubre cómo convertimos la pasion en aroma.</p>
      

    <div className='imagenes-inicio1'>

      {/* imagenes   */}
      <img src={ronchoc} alt="Sembrando café" />
      <img src={redcoffe} alt="Café en cereza, ya listo para cosechar" />
      <img src={tosta} alt="Café tostado" />
      <img src={taza} alt="Taza de café servido" />
    </div>

    <div className='pasos-proceso'>
      {/* frase de cierre */}
      <p>Cada paso refleja la pasión de un caficultor que convierte su esfuerzo en el sabor más puro del campo colombiano.</p>
    </div>

    </div>

    </section>
  </section>
  );
}

export default Inicio;
