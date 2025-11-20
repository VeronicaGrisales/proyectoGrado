import React from "react";
import '../styles/Procesos.css'; // Archivo de estilos para la página de procesos

import siembra from '../assets/siembra.jpg';
import secado from '../assets/secado.jpg';
import tostion from '../assets/tostion.jpg';
import cosecha from '../assets/cosecha.jpg';
import molienda from '../assets/molienda.jpg';
import seleccion from '../assets/seleccion.jpg';
import despulpado from '../assets/despulpado.jpg';
import presentacion from '../assets/presentacion.jpg';

//se crea el componente Procesos
function Procesos() {   
    return (     
        <section className="procesos">

            {/* Sección de introducción */}
            <div className="seccion-procesos">
                <h1 className='titulop'><strong>Descubre nuestros procesos</strong></h1>
                <p className="texto-prin">En Café Nazareth, cada grano es el reflejo del cuidado y la pasión de su productor, <strong> Robinson 
                Henao Morales. </strong>
                Desde la semilla hasta el aroma final, cada etapa se realiza con dedicación artesanal, 
                respetando la tierra y el tiempo que da vida a un café verdaderamente especial.</p>


                {/* Descripción detallada de los procesos */}
                <div className="galeria-productos">
                <div className='pasos-seguir'>

                <div className="pro">
                <div className='pasos'>
                    <h4>1. Siembra</h4>
                    <div className="prod">
                        <img className="img-producto" src={siembra} alt="siembra" />
                    <div className="pro-info">
                    <p className="texto-pasos">Todo comienza con la semilla, donde nace la esencia 
                        de Café Nazareth. Robinson cultiva cada planta con dedicación, aplicando 
                        prácticas sostenibles que protegen el suelo, el agua y la biodiversidad. 
                        Cada cafeto crece en un entorno natural y saludable, lo que garantiza granos 
                        llenos de pureza, sabor y carácter.</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="pro">
                <div className='pasos'>
                    <h4>2. Cosecha</h4>
                    <div className="prod">
                        <img className="img-producto" src={cosecha} alt="cosecha" />
                    <div className="pro-info">
                    <p className="texto-pasos">La cosecha se realiza totalmente a mano, seleccionando 
                        únicamente las cerezas rojas y en su punto exacto de maduración. Este método 
                        artesanal permite preservar la frescura y calidad del fruto, asegurando que 
                        cada grano que llega a tu taza conserve su dulzura natural y su aroma auténtico. </p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="pro">
                <div className='pasos'>
                    <h4>3. Despulpado</h4>
                    <div className="prod">
                        <img className="img-producto" src={despulpado} alt="despulpado" />
                    <div className="pro-info">
                    <p className="texto-pasos">Tras la cosecha, las cerezas pasan a un proceso de 
                        despulpado cuidadoso, donde se retira la cáscara para revelar el grano.
                        Este paso es realizado con precisión para evitar dañar la estructura del café, 
                        manteniendo intacta su esencia y garantizando un perfil de sabor limpio y 
                        equilibrado. </p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="pro">
                <div className='pasos'>
                    <h4>4. Secado</h4>
                    <div className="prod">
                        <img className="img-producto" src={secado} alt="secado" />
                    <div className="pro-info">
                    <p className="texto-pasos">Los granos se esparcen al sol y se secan lentamente 
                        en camas elevadas o superficies tradicionales "Marquesina". Este secado natural 
                        permite que el grano alcance su nivel óptimo de humedad, lo que se traduce en 
                        un aroma profundo, una fermentación natural controlada y un sabor mucho más 
                        complejo y armónico.</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="pro">
                <div className='pasos'>
                    <h4>5. Tostado</h4>
                    <div className="prod">
                        <img className="img-producto" src={tostion} alt="tostion" />
                    <div className="pro-info">
                    <p className="texto-pasos">En este punto, la magia del café se transforma. 
                        Robinson supervisa personalmente el tostado, ajustando temperatura y tiempo 
                        para resaltar los perfiles únicos de cada lote. El resultado es un café con 
                        notas aromáticas definidas, cuerpo equilibrado y un sabor que refleja fielmente 
                        su origen y su método artesanal.</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="pro">
                <div className='pasos'>
                    <h4>6. Selección</h4>
                    <div className="prod">
                        <img className="img-producto" src={seleccion} alt="selección" />
                    <div className="pro-info">
                    <p className="texto-pasos">Una vez tostado, cada lote pasa por una revisión manual 
                        en la que se separan los granos con defectos. Solo aquellos que cumplen con las 
                        características ideales de tamaño, textura y color se conservan. Esta selección 
                        cuidadosa garantiza un producto final consistente, puro y de excelente calidad.</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="pro">
                <div className='pasos'>
                    <h4>7. Molienda</h4>
                    <div className="prod">
                        <img className="img-producto" src={molienda} alt="molienda" />
                    <div className="pro-info">
                    <p className="texto-pasos">En esta etapa, el café se ajusta al tipo de preparación 
                        que prefieras: molido fino, medio o grueso, según si lo utilizarás en espresso, 
                        filtro, prensa francesa u otros métodos. Este proceso se realiza con precisión
                        para preservar los aromas y sabores logrados durante todo el ciclo del café. 
                        La molienda adecuada garantiza una extracción perfecta y una taza equilibrada.</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="pro">
                <div className='pasos'>
                    <h4>8. Presentación final</h4>
                    <div className="prod">
                        <img className="img-producto" src={presentacion} alt="presentación final" />
                    <div className="pro-info">
                    <p className="texto-pasos">Una vez molido o si lo prefieres en grano, el café se 
                        empaca cuidadosamente para mantener su frescura y calidad. Cada presentación 
                        refleja el trabajo artesanal de Robinson y lleva consigo la historia, la 
                        dedicación y el esmero invertidos en cada etapa. Así, Café Nazareth llega a 
                        tu mesa como un producto puro, auténtico y elaborado con verdadera pasión.</p>
                    </div>
                    </div>
                </div>
                </div>

                </div>

                {/* Frase de cierre */}
                <p className="texto-prin">
                    <strong>Cada paso refleja el esfuerzo, la dedicación y el amor de un caficultor 
                        que transforma su trabajo en un café con historia, sabor y corazón.</strong>
                </p>
            </div>
            </div>
            
            
        </section>
        
    );
}   
export default Procesos;