document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');
    
    // Function to add a new message to the chat
    function addMessage(text, isReceived) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isReceived ? 'received' : 'sent'}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        const messageText = document.createElement('p');
        messageText.textContent = text;
        
        const messageTime = document.createElement('span');
        messageTime.className = 'message-time';
        
        const now = new Date();
        messageTime.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        messageContent.appendChild(messageText);
        messageContent.appendChild(messageTime);
        messageDiv.appendChild(messageContent);
        
        chatMessages.appendChild(messageDiv);
        
        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Handle sending a message
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            addMessage(messageText, false);
            messageInput.value = '';
            
            // Simulate a received response after a short delay
            setTimeout(() => {
                const responses = [
                    "Gracias por tu mensaje. ¿En qué más puedo ayudarte?",
                    "Entiendo tu pregunta. Déjame ver cómo puedo ayudarte con eso.",
                    "Es una buena pregunta. La respuesta es...",
                    "¿Podrías darme más detalles sobre tu consulta?",
                    "Voy a investigar un poco y te respondo en breve."
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessage(randomResponse, true);
            }, 1000 + Math.random() * 2000);
        }
    }
    
    // Send message when button is clicked
    sendButton.addEventListener('click', sendMessage);
    
    // Send message when Enter key is pressed
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Initial greeting from the instructor
    setTimeout(() => {
        addMessage("Hola, ¿en qué puedo ayudarte hoy?", true);
    }, 500);
});