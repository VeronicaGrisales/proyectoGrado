import React from "react";

//importación de imagenes
import prensa from '../assets/prensa.png';
import drip from '../assets/drip.png';
import moka from '../assets/moka.png';
import esspreso from '../assets/esspreso.png';
import colador from '../assets/colador.png';

import '../styles/Productos.css';
// Archivo de estilos para la página de productos, ya que se reutilizaron varias elementos

//se crea el componente Metodos
function Metodos() {   
    return (     
        <section className="productos">

            {/*Sección de inicio */}
            <div className="inicio-productos">
                <h1 className="tituloprin">Metodos de preparación</h1>
                <p className="texto-proin">Descubre nuevas formas de disfrutar el café que nace 
                en nuestras montañas.Cada método revela aromas, notas y sensaciones diferentes; 
                por eso, en Café Nazareth te acompañamos a preparar tu taza perfecta, esa que 
                resalta la esencia de nuestros granos seleccionados a mano.<br></br>
                Ya sea que busques una preparación rápida, una preparación más artesanal o un sabor 
                más intenso, aquí encontrarás el método ideal para ti.</p>
                </div>

            {/*sección de metodos */}
            <div className="galeria-productos">

                <div className="pro">
                    <h3 className='nombre-pro'>Prensa Francesa</h3>
                    <div className="prod">
                    <img className="img-producto" src={prensa} alt="prensa" />
                    <div className="pro-info">
                    <p className="texto-producto">Un método que realza el cuerpo y la intensidad del café.
                    La inmersión completa permite extraer sabores más profundos y notas dulces y
                    amaderadas.
                    </p>
                    <p className="texto-producto"><strong>Ideal para:</strong> Quienes disfrutan una taza
                    densa y aromática.</p>
                    <p className="texto-producto"><strong>Cómo prepararlo:</strong> <br></br>
                    1. Calienta agua sin dejarla hervir (90–94 °C).<br></br>
                    2. Agrega café molido grueso (1 cucharada por cada 150 ml de agua).<br></br>
                    3. Vierte el agua sobre el café y mezcla suavemente.<br></br>
                    4. Tapa la prensa sin bajar el émbolo.<br></br>
                    5. Deja reposar 4 minutos.<br></br>
                    6. Baja el émbolo lentamente y sirve.</p><br></br>
                    </div>  
                    </div>
                </div>

                <div className="pro">
                    <h3 className='nombre-pro'>Método Drip / Filtro</h3>
                    <div className="prod">
                    <img className="img-producto" src={drip} alt="drip" />
                    <div className="pro-info">
                    <p className="texto-producto">Suave, limpio y equilibrado. Es perfecto para resaltar
                    notas florales y frutales de nuestros granos.
                    </p>
                    <p className="texto-producto"><strong>Ideal para:</strong> Quienes aman un café ligero 
                    y muy aromático.</p>
                    <p className="texto-producto"><strong>Cómo prepararlo:</strong> <br></br>
                    1. Usa café molido medio.<br></br>
                    2. Coloca el filtro y humedécelo con agua caliente.<br></br>
                    3. Agrega el café (1 cucharada por cada 150 ml de agua).<br></br>
                    4. Vierte un poco de agua para preinfusión durante 30 segundos.<br></br>
                    5. Luego vierte el resto del agua en movimientos circulares.<br></br>
                    6. Deja que el café termine de gotear.<br></br>
                    </p>
                    </div>  
                    </div>
                </div>

                <div className="pro">
                    <h3 className='nombre-pro'>Cafetera Italiana (Moka)</h3>
                    <div className="prod">
                    <img className="img-producto" src={moka} alt="moka" />
                    <div className="pro-info">
                    <p className="texto-producto">Clásica y potente. Este método aporta un sabor más
                    intenso y concentrado, cercano al espresso.
                    </p>
                    <p className="texto-producto"><strong>Ideal para:</strong> quienes prefieren un café
                    fuerte, ideal para la mañana.</p>
                    <p className="texto-producto"><strong>Cómo prepararlo:</strong> <br></br>
                    1. Llena la base con agua hasta la válvula.<br></br>
                    2. Agrega café molido medio-fino, sin presionar.<br></br>
                    3. Ensambla la cafetera y ponla a fuego bajo.<br></br>
                    4. Cuando el café suba y deje de burbujear, retírala del fuego.<br></br>
                    5. Mezcla ligeramente antes de servir.<br></br>
                    </p>
                    </div>  
                    </div>
                </div>

                <div className="pro">
                    <h3 className='nombre-pro'>Método Espresso</h3>
                    <div className="prod">
                    <img className="img-producto" src={esspreso} alt="esspreso" />
                    <div className="pro-info">
                    <p className="texto-producto">Un sorbo intenso, compacto y lleno de carácter. 
                    Extrae lo mejor del grano en pocos segundos.
                    </p>
                    <p className="texto-producto"><strong>Ideal para:</strong> Amantes de bebidas cortas, 
                    cremosas o base para capuchinos y lattes.</p>
                    <p className="texto-producto"><strong>Cómo prepararlo:</strong> (Importante: Para quienes tengan máquina) <br></br>
                    1. Usa café molido fino.<br></br>
                    2. Compacta suavemente el café en el portafiltro.<br></br>
                    3. Extrae durante 25–30 segundos.<br></br>
                    4. Debe salir una crema dorada en la parte superior.<br></br>
                    </p>
                    </div>  
                    </div>
                </div>

                <div className="pro">
                    <h3 className='nombre-pro'>Colador Tradicional / Manga</h3>
                    <div className="prod">
                    <img className="img-producto" src={colador} alt="colador" />
                    <div className="pro-info">
                    <p className="texto-producto">El método de siempre. Una preparación suave, 
                    cálida y con sensación hogareña.
                    </p>
                    <p className="texto-producto"><strong>Ideal para:</strong> Quienes valoran la 
                    tradición y sabores profundos sin complicaciones.</p>
                    <p className="texto-producto"><strong>Cómo prepararlo:</strong> <br></br>
                    1. Calienta agua en una olla pequeña.<br></br>
                    2. Cuando hierva, agrega el café molido medio.<br></br>
                    3. Retira del fuego y deja reposar 2–3 minutos.<br></br>
                    4. Cuela antes de servir.<br></br>
                    </p>
                    </div>  
                    </div>
                </div>

            </div>
        </section>
        
    );
}   
export default Metodos;