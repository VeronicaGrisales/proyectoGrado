import React from "react";

import nosotros from '../assets/nosotros.png'; //importación de imagenes

//no se creo un archivo css ya que se usaran los estilos de Contactanos.jsx

//se crea el componente Nosotros
function Nosotros() {   
    return (     
        <section className="nosotros">
            <div className="seccion-nosotros">
                {/* Título y texto de introducción */}
            <h1 className='titulop'><strong>Sobre Nosotros</strong></h1>
                <p className="texto-prin">Café Nazareth nació del sueño de <strong>Robinson Henao Morales,</strong> un joven caficultor colombiano 
                que decidió transformar la tradición familiar del cultivo del café en una marca con identidad 
                propia. 
                Desde niño, Robinson creció rodeado de cafetales, aprendiendo de su padre el
                valor del trabajo en el campo, la paciencia de la cosecha y el respeto por la tierra. 
                Con el paso del tiempo, decidió convertir esa herencia en un proyecto que honrara sus raíces, 
                manteniendo vivo el arte del café artesanal. </p>
                <p className="texto-prin">
                Su visión siempre fue clara: ofrecer un café que contara una historia real. 
                Un café cultivado, procesado y empacado por su propio productor; libre de intermediarios y 
                lleno de autenticidad. 
                Así nació Café Nazareth, un emprendimiento que combina tradición, sostenibilidad y calidad 
                en cada etapa del proceso. 
                Aquí, cada grano es cuidado con esmero, porque detrás de cada taza hay esfuerzo, familia y 
                un profundo amor por la tierra. 
                </p>
            </div>

            {/* Imagen decorativa  */}
            <div className='imagenes-contacto'>
                <div className='imgcontacto'>
                <img src={nosotros} alt="nosotros" />
            </div>
            </div>
        </section>
    );
}   
export default Nosotros;