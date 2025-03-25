document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your message has been submitted! (This is a demo)');
            contactForm.reset();
        });
    }

    // Live Chat Functionality
    const chatBtn = document.querySelector('.chat-btn');
    const chatModal = document.getElementById('chat-modal');
    const closeModal = document.querySelector('.modal .close');
    const chatInput = document.getElementById('chat-input');
    const sendMessageBtn = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');

    chatBtn.addEventListener('click', () => {
        chatModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        chatModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === chatModal) {
            chatModal.style.display = 'none';
        }
    });

    sendMessageBtn.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            const userMessage = document.createElement('p');
            userMessage.innerHTML = `<strong>You:</strong> ${message}`;
            chatMessages.appendChild(userMessage);
            chatInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                const botMessage = document.createElement('p');
                botMessage.innerHTML = `<strong>Bot:</strong> Thank you for your message! How else can I assist you?`;
                chatMessages.appendChild(botMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessageBtn.click();
        }
    });
});