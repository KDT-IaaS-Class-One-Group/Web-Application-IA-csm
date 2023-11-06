// script.js
document.addEventListener("DOMContentLoaded", function () {
  const chatContainer = document.getElementById("chat-container");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  sendButton.addEventListener("click", function () {
      const message = messageInput.value;
      if (message.trim() !== "") {
          const messageElement = document.createElement("div");
          messageElement.textContent = message;
          chatContainer.appendChild(messageElement);
          messageInput.value = "";
      }
  });
});