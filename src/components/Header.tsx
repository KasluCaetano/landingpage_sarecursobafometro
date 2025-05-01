import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5511956616797&text=👋 Olá! Gostaria de falar com um especialista da SA Recurso Bafômetro sobre meu caso.', '_blank');
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-400 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <Shield className="relative w-8 h-8 text-white" />
            </div>
            <div className="font-black text-xl text-white">
              <span>SA Recurso</span>
              <span className="text-blue-400"> Bafômetro</span>
            </div>
          </div>
          
          <button 
            onClick={handleContactClick}
            className={`hidden md:flex items-center px-6 py-3 rounded-xl font-bold transition-all bg-white/10 text-white hover:bg-white/20`}
          >
            Fale Conosco
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              alt="WhatsApp"
              className="w-4 h-4 ml-2"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;