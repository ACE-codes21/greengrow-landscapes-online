
const WhatsAppContact = () => {
  return (
    <a
      href="https://wa.me/15035558732" // Example WhatsApp link with the business phone
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-6 bottom-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-20 transition-transform duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.6 6.3A8.3 8.3 0 0 0 3.6 15.3L2 22l6.8-1.5a8.2 8.2 0 0 0 4 1 8.3 8.3 0 0 0 4.8-15.2zM12.8 19H13a6.8 6.8 0 0 1-3.5-1l-.2-.2-2.7.6.7-2.5-.2-.3a6.8 6.8 0 0 1 9.7-8.6 6.8 6.8 0 0 1-3.9 12zm3.7-5l-.2-.1a1 1 0 0 0-.6-.2c-.2 0-.4.2-1 .6l-.3.1c-.7-.3-1.3-.7-1.8-1.3a5.8 5.8 0 0 1-1.2-1.5l.1-.2a2 2 0 0 0 .5-.9 1 1 0 0 0-.2-.6l-.7-1.5a.8.8 0 0 0-1-.4h-.8c-.3 0-.6.2-.8.4a2.5 2.5 0 0 0-.7 1.9c0 1.1.6 2.2 1.1 2.9.2.4.7 1 1.1 1.4a12.2 12.2 0 0 0 4.9 3h.7c.8 0 1.7-.3 2.2-1a3 3 0 0 0 .5-1.6v-.7c0-.2 0-.3-.1-.3z"/>
      </svg>
    </a>
  );
};

export default WhatsAppContact;
