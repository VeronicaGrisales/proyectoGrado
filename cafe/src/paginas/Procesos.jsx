import React from "react";
import '../styles/Procesos.css'; 

function Procesos() {   
    return (     
        <section className="procesos">
            <div className="seccion-procesos">
                <h1 className='titulop'><strong>Descubre nuestros procesos</strong></h1>
                <p className="texto-prin">En Café Nazareth, cada grano es el reflejo del cuidado y la pasión de su productor, <strong> Robinson 
                Henao Morales. </strong>
                Desde la semilla hasta el aroma final, cada etapa se realiza con dedicación artesanal, 
                respetando la tierra y el tiempo que da vida a un café verdaderamente especial.</p>

                <div className='pasos-seguir'>

                <div className='pasos'>
                    <h4>1. Siembra.</h4>
                    <p className="texto-pasos">Todo comienza con la semilla. Robinson cultiva su Café, 
                    aplicando prácticas sostenibles que respetan la naturaleza y garantizan granos de la más alta 
                    calidad.</p>
                </div>

                <div className='pasos'>
                    <h4>2. Cosecha.</h4>
                    <p className="texto-pasos">La recolección se hace a mano, eligiendo solo las cerezas rojas y maduras. Este cuidado 
                    artesanal conserva el sabor y la frescura que caracterizan a Café Nazareth. </p>
                </div>

                <div className='pasos'>
                    <h4>3. Despulpado.</h4>
                    <p className="texto-pasos">Después de la cosecha, los granos se despulpan cuidadosamente para retirar su cáscara 
                    natural. Este proceso artesanal mantiene la esencia pura del café. </p>
                </div>

                <div className='pasos'>
                    <h4>4. Secado.</h4>
                    <p className="texto-pasos">Los granos se extienden al sol para secarse lentamente, alcanzando el punto perfecto de 
                    humedad. El secado natural es clave para lograr un aroma profundo y un sabor equilibrado. </p>
                </div>

                <div className='pasos'>
                    <h4>5. Tostado.</h4>
                    <p className="texto-pasos">El tostado se realiza con precisión para resaltar los perfiles de sabor únicos de cada 
                    variedad. Robinson supervisa este proceso para asegurar que cada lote alcance su máximo potencial.</p>
                </div>

                <div className='pasos'>
                    <h4>6. Selección.</h4>
                    <p className="texto-pasos">Cada lote se revisa manualmente. Solo los granos con el color, tamaño y textura ideales son 
                    seleccionados para garantizar un café de excelencia. </p>
                </div>

                <div className='pasos'>
                    <h4>7. Molienda y presentación final.</h4>
                    <p className="texto-pasos">El café se muele o se deja en grano, según tu preferencia. Así, Café Nazareth llega fresco a tu 
                    mesa, conservando el sabor artesanal de su origen. </p>
                </div>

                </div>
                <p className="texto-prin"> Cada paso refleja el esfuerzo, la dedicación y el amor de un caficultor que convierte su 
                trabajo en un café con alma. </p>
            </div>

            
            
        </section>
        
    );
}   
export default Procesos;