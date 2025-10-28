import React from 'react';
import '../styles/Inicio.css'; // Archivo de estilos para la página de inicio

// Importación de imágenes
import coffe from '../assets/coffe.jpg';
import redcoffe from '../assets/redcoffe.jpg';
import ronchoc from '../assets/ronchoc.jpg';
import tosta from '../assets/tosta.jpg';
import taza from '../assets/taza.jpg';
import bolsa1 from '../assets/bolsa1.jpg';
import bolsa3 from '../assets/bolsa3.jpg';  
import drip from '../assets/drip.jpg';
import lata from '../assets/lata.jpg';

// Importación de iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


//se crea el componente Inicio
function Inicio() {
  return (
    <section className="inicio">
    <div className="escencia-cafe">

      {/* Sección de bienvenida e introducción */}
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

    {/* Sección de variedades */}
    <section className='variedades-seccion'>
    <div className='variedades'>
      <h1 className='titulop'>Descubre nuestras variedades</h1>
      <p className='nombreca'>En Café Nazareth celebramos la diversidad del café colombiano.
      Cada variedad refleja el alma de nuestras montañas: aromas únicos, sabores auténticos y la dedicación de manos que cultivan con amor.</p>

      <div className='imagenes-inicio1'>
      {/* imagenes   */}
      <div className='imgProducto'>
      <img src={bolsa1} alt="Bolsa blanca" />
      <p className='nombreca'><strong>Variedad Caturra</strong></p>
      </div>
      <div className='imgProducto'>
      <img src={lata} alt="Lata edición espcial" />
      <p className='nombreca'><strong>Lata edición especial</strong></p>
      </div>
      <div className='imgProducto'>
      <img src={drip} alt="Drip de café" />
      <p className='nombreca'><strong>Drip Coffe</strong></p>
      </div>
      <div className='imgProducto'>
      <img src={bolsa3} alt="Bolsa roja" />
      <p className='nombreca'><strong>Blend</strong></p>
      </div>

    </div>
    </div>
    </section>

    {/* Sección de procesos */}
    <section className='procesos'>
      <h1 className='titulop'>Conoce algunos de nuestros procesos</h1>
    <div className='texto-proceso'>
      <p>Desde la semilla hasta el aroma final, cada paso en Café Nazareth es una historia de dedicación y amor
      por el café. Seleccionamos a mano los mejores granos y los transformamos con procesos artesanales,
      llevando así a tu taza el sabor más puro del campo colombiano.
      </p>
      <p><strong>Conoce nuestros procesos y descubre cómo convertimos la pasion en aroma.</strong></p>
      </div>
    

    <section className='imagenes-inicio2'>
      {/* imagenes   */}
      <img src={ronchoc} alt="Sembrando café" />
      <div className='flecha'>
        <FontAwesomeIcon icon={faArrowRight} style={{ color: "#6b4f3a" }} />
      </div>
      <img src={redcoffe} alt="Café en cereza, ya listo para cosechar" />
      <div className='flecha'>
        <FontAwesomeIcon icon={faArrowRight} style={{ color: "#6b4f3a" }} />
      </div>
      <img src={tosta} alt="Café tostado" />
      <div className='flecha'>
      <FontAwesomeIcon icon={faArrowRight} style={{ color: "#6b4f3a" }} />
      </div>
      <img src={taza} alt="Taza de café servido" />
    </section>

    <div className='texto-proceso'>
      
      {/* frase de cierre */}
      <p>Cada paso refleja la pasión de un caficultor que convierte su esfuerzo en el sabor más puro del campo colombiano.</p>
    </div>
    </section>   

  </section>
  );
}

export default Inicio;
