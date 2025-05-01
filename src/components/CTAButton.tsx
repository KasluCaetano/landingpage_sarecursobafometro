import React from 'react';

const CTAButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5511956616797&text=👋 Olá! Gostaria de falar com um especialista da SA Recurso Bafômetro sobre meu caso.', '_blank');
  };
  
  return (
    <button
      onClick={handleClick}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
      <div className="relative bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-5 px-10 rounded-xl text-xl md:text-2xl flex items-center gap-3 transform transition-all group-hover:translate-y-[-2px]">
        <span>Fale com Especialista</span>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          className="w-6 h-6"
        />
      </div>
    </button>
  );
};

export default CTAButton;