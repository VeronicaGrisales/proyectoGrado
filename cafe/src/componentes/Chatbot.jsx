import React, { useState, useRef, useEffect } from 'react'; //  agregamos useRef y useEffect
import '../styles/Chatbot.css';  // Importamos los estilos específicos del chatbot
import tino from '../assets/tino.png'; //importamos la imagen de tino


/**
 * Componente Chatbot
 * Este componente representa el chat flotante de Café Nazareth.
 * Permite a los usuarios interactuar con Tino, el asistente virtual,
 * enviando preguntas que son respondidas por el backend.
 */
const Chatbot = () => {

  // Estado para controlar si la ventana del chat está abierta o cerrada
      const [isOpen, setIsOpen] = useState(false);

      // Estado que almacena todos los mensajes del chat
      // Cada mensaje tiene:
      // - 'from': indica si es del 'bot' o del 'user'
      // - 'text': el contenido del mensaje
      const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: "¡Hola! Soy Tino, tu asistente virtual de Café Nazareth. Estoy aquí para ayudarte a conocer más sobre nuestros productos, nuestra historia o simplemente charlar sobre un buen café. ¿Cómo puedo ayudarte?"
    }
  ]);

   // Estado que almacena lo que el usuario está escribiendo en el input
    const [input, setInput] = useState('');

    const chatBodyRef = useRef(null); // referencia al contenedor de mensajes

    /**
    * toggleChat
    * Función para abrir o cerrar la ventana del chat
    */
    const toggleChat = () => setIsOpen(!isOpen);

    /**
    * handleSend
    * Función que se ejecuta cuando el usuario envía un mensaje
    * - Agrega el mensaje del usuario al estado 'messages'
    * - Llama al backend para obtener la respuesta del chatbot
    * - Agrega la respuesta del bot al estado 'messages'
    */
    const handleSend = async () => {

      // Evita enviar mensajes vacíos
      if (!input.trim()) return;

      

    // 1️ Agregamos el mensaje del usuario al estado
    const newMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, newMessage]);

    try {

      // 2️ Realizamos la petición al backend
      const res = await fetch('http://localhost:3001/api/chatbot', { //url del backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensaje: input })// se devuelve el mensaje del usuario
      });

      const data = await res.json();

      // 3️ Agregamos la respuesta del bot al estado de mensajes
      setMessages(prev => [...prev, { from: 'bot', text: data.respuesta }]);
    } catch (err) {

      // Si hay error en la conexión, mostramos mensaje de error
      setMessages(prev => [...prev, { from: 'bot', text: "Error de conexión con el servidor" }]);
      console.error(err);
    }

    // Limpiamos el input para que el usuario pueda escribir un nuevo mensaje
    setInput('');
  };

  /**
   * handleKeyPress
   * Permite enviar el mensaje presionando la tecla Enter
   */
  const handleKeyPress = e => {
    if (e.key === 'Enter') handleSend();
  };

  // useEffect para hacer scroll automático cada vez que cambian los mensajes
    useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);


  return (
    // Contenedor principal del chatbot, fijo en la pantalla
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window animate-fade-in">

          {/* Cabecera del chat */}
          <div className="chat-header">
            <h3>Asistente Tino de Café Nazareth</h3>

            {/* Botón para cerrar la ventana del chat */}
            <button onClick={toggleChat} className="close-btn">X</button>
          </div>


          {/* Cuerpo del chat */}
          {/* Se agrega ref 'chatBodyRef' para permitir scroll automático */}
          <div className="chat-body" ref={chatBodyRef}> {/* agregamos la referencia */}

            {/* Mapeamos todos los mensajes que están en el estado 'messages' */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`message ${msg.from === 'bot' ? 'bot-message' : 'user-message'}`}
              >

                {/* 
                Dividimos el texto en párrafos si contiene saltos de línea
                Esto mantiene la legibilidad para respuestas largas o listas de productos
              */}
                {msg.text.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Input para escribir mensajes y botón para enviarlos */}
          <div className="chat-input">
            <input
              className='escribe'
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Escribe tu mensaje..."
            />
            <button className='enviar' onClick={handleSend}>Enviar</button>
          </div>

        </div>
      )}

      {/* Botón flotante con el asistente de Tino */}
      <div className="chat-trigger" onClick={toggleChat}>
        <img src={tino} alt="Chatbot Tino" />
      </div>
    </div>
  );
};

export default Chatbot;
