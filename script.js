// Create chat button
const chatButton = document.createElement('button');
chatButton.innerText = 'Chat';
chatButton.style.position = 'fixed';
chatButton.style.bottom = '20px';
chatButton.style.right = '20px';
chatButton.style.backgroundColor = '#007bff';
chatButton.style.color = '#fff';
chatButton.style.border = 'none';
chatButton.style.borderRadius = '50%';
chatButton.style.width = '50px';
chatButton.style.height = '50px';
chatButton.style.fontSize = '24px';
chatButton.style.lineHeight = '50px';
chatButton.style.cursor = 'pointer';
chatButton.style.textAlign = 'center';

// Create chat container
const chatContainer = document.createElement('div');
chatContainer.style.display = 'none';
chatContainer.style.position = 'fixed';
chatContainer.style.bottom = '20px';
chatContainer.style.right = '20px';
chatContainer.style.width = '300px';
chatContainer.style.border = '1px solid #ccc';
chatContainer.style.borderRadius = '10px';
chatContainer.style.overflow = 'hidden';

// Create chat header
const chatHeader = document.createElement('div');
chatHeader.innerText = 'Chatbot';
chatHeader.style.backgroundColor = '#007bff';
chatHeader.style.color = '#fff';
chatHeader.style.padding = '10px';
chatHeader.style.fontWeight = 'bold';

// Create chat messages container
const chatMessages = document.createElement('div');
chatMessages.style.padding = '10px';
chatMessages.style.maxHeight = '200px';
chatMessages.style.overflowY = 'scroll';

// Create chat input
const chatInput = document.createElement('input');
chatInput.type = 'text';
chatInput.style.width = '100%';
chatInput.style.padding = '10px';
chatInput.style.border = 'none';
chatInput.style.outline = 'none';

// Create chat send button
const chatSendButton = document.createElement('button');
chatSendButton.innerText = 'Send';
chatSendButton.style.backgroundColor = '#007bff';
chatSendButton.style.color = '#fff';
chatSendButton.style.border = 'none';
chatSendButton.style.padding = '10px';
chatSendButton.style.cursor = 'pointer';
chatSendButton.style.fontWeight = 'bold';

// Append elements to the document
document.body.appendChild(chatButton);
document.body.appendChild(chatContainer);
chatContainer.appendChild(chatHeader);
chatContainer.appendChild(chatMessages);
chatContainer.appendChild(chatInput);
chatContainer.appendChild(chatSendButton);

// Toggle chat container visibility
chatButton.addEventListener('click', () => {
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
});
