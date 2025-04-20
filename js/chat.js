document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.querySelector('.chat-input input');
    const chatSendBtn = document.querySelector('.chat-input button');
    const chatMessages = document.querySelector('.chat-messages');
    
    if (chatInput && chatSendBtn && chatMessages) {
      // Enviar mensaje al hacer clic o presionar Enter
      chatSendBtn.addEventListener('click', enviarMensaje);
      chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') enviarMensaje();
      });
      
      function enviarMensaje() {
        const texto = chatInput.value.trim();
        if (texto !== '') {
          crearMensaje(texto, 'sent');
          chatInput.value = '';
          
          // Simular respuesta después de 1-3 segundos
          setTimeout(simularRespuesta, 1000 + Math.random() * 2000);
        }
      }
      
      function crearMensaje(texto, tipo) {
        const mensajeDiv = document.createElement('div');
        mensajeDiv.className = `message ${tipo}`;
        
        if (tipo === 'received') {
          const img = document.createElement('img');
          img.src = 'images/avatar-profesor.jpg';
          img.alt = 'Instructor';
          mensajeDiv.appendChild(img);
        }
        
        const contenidoDiv = document.createElement('div');
        contenidoDiv.className = 'message-content';
        
        const textoP = document.createElement('p');
        textoP.textContent = texto;
        
        const horaSpan = document.createElement('span');
        const ahora = new Date();
        horaSpan.textContent = ahora.getHours() + ':' + (ahora.getMinutes() < 10 ? '0' : '') + ahora.getMinutes();
        
        contenidoDiv.appendChild(textoP);
        contenidoDiv.appendChild(horaSpan);
        mensajeDiv.appendChild(contenidoDiv);
        
        chatMessages.appendChild(mensajeDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
      
      function simularRespuesta() {
        const respuestas = [
          "Gracias por tu mensaje. ¿En qué más puedo ayudarte?",
          "Interesante pregunta. Déjame pensar...",
          "Para esa duda, revisa el paso 3 del video tutorial.",
          "¿Podrías ser más específico con tu pregunta?",
          "Buena observación. Ese es un punto importante.",
          "Voy a consultar eso y te respondo en un momento."
        ];
        
        const respuestaAleatoria = respuestas[Math.floor(Math.random() * respuestas.length)];
        crearMensaje(respuestaAleatoria, 'received');
      }
    }
    
    // Selección de chat en la lista
    const itemsChat = document.querySelectorAll('.chat-item');
    itemsChat.forEach(item => {
      item.addEventListener('click', function() {
        itemsChat.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });