import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import '../styles/Contactanos.css'; // Archivo de estilos para la página de contacto

// Importación de imágenes
import nosotros from '../assets/nosotros.png';

//se crea el componente Contactanos
function Contactanos() {   
    return (     
        <section className="contactanos">
            <div className="seccion-contacto">

                {/* Título y texto de introducción */}
            <h1 className='titulop'><strong>Contactános</strong></h1>
                <p className="texto-prin">Queremos escucharte. 
                En Café Nazareth, cada mensaje, cada historia y cada sugerencia nos inspira a seguir 
                creciendo junto a ti. 
                Si deseas realizar un pedido, conocer más sobre nuestras variedades o simplemente 
                compartir tu experiencia con nuestro café, estaremos felices de atenderte. 
                Estamos comprometidos en ofrecerte una atención cercana, humana y 
                personalizada, porque para nosotros cada cliente es parte de esta gran familia cafetera. </p>
                <p className="texto-contacto"><strong>Puedes contactarnos a través de los siguientes medios:</strong></p>
                
                <div className='info-contacto'>

                {/* Información de contacto, con link para whatsApp */}
                <div className='icono-contacto'>
                    <FontAwesomeIcon icon={faWhatsapp} className="icono-chat" />
                    <p className="texto-pasos"><strong>Teléfono:</strong> <a className="link" href="https://wa.me/3136027315?text=Hola%20quiero%20información%20sobre">3136027315</a></p>
                </div>
                
                <div className='icono-contacto'>
                    <FontAwesomeIcon icon={faEnvelope} className="icono-correo" />
                    <p className="texto-pasos"><strong>Email:</strong> robinsonhenaomorales111@gmail.com</p>
                </div>

                    <p className="texto-prin">Esperamos con entusiasmo tu mensaje y la oportunidad de compartir juntos 
                    la pasión por el café de calidad. ¡Gracias por ser parte de Café Nazareth!</p>
                </div>

                <p className="texto-contacto"><strong>Visitanos</strong></p>


                {/* Esto se realiza por medio de la opcion del google maps compartiendo ubicación en 
                la opción de incorporar un mapa. */}
                <div className="mapa-ubicacion">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.131983295402!2d-75.51256772602855!3d5.976557229279606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4691ea2b06d03b%3A0x8c8077c653317b7c!2sEscuela%20Nazareth!5e0!3m2!1ses-419!2sco!4v1763601004231!5m2!1ses-419!2sco"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>

                <div className='info-contacto'>
                    <p className="texto-direccion"><strong>Dirección:</strong> Vereda Nazareth sector el colegio, Municipio de El Retiro, 
                    Departamento de Antioquia, Colombia.</p>
                </div>
                

                {/* Imagen decorativa del creador de Café Nazareth */}
                <div className='imagenes-contacto'>
                    <div className='imgcontacto'>
                    <img src={nosotros} alt="nosotros" />
                </div>
            </div>
            </div>
        </section>
        
    );
}   
export default Contactanos;