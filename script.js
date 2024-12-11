// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const messages = document.getElementById('messages');

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userText = userInput.value.trim();
        if (userText !== '') {
            const userMessage = document.createElement('div');
            userMessage.classList.add('message', 'user-message');
            userMessage.textContent = userText;
            messages.appendChild(userMessage);

            userInput.value = '';

            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.classList.add('message', 'bot-message');
                botMessage.textContent = 'Desculpe, ainda estou aprendendo. Posso te ajudar com outra coisa?';
                messages.appendChild(botMessage);

                messages.scrollTop = messages.scrollHeight; // Rolagem automática para a última mensagem
            }, 1000);
        }
    }
});
