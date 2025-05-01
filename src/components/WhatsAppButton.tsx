import React from 'react';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5511956616797&text=👋 Olá! Gostaria de falar com um especialista da SA Recurso Bafômetro sobre meu caso.', '_blank');
  };
  
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl flex items-center justify-center transform transition-all hover:scale-110"
      aria-label="Contato por WhatsApp"
    >
      <div className="absolute inset-0 rounded-full animate-ping-slow bg-green-500 opacity-75"></div>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </button>
  );
};

export default WhatsAppButton;