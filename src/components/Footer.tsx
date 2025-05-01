import React from 'react';
import { Shield, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 p-6 rounded-2xl mb-8">
            <div className="flex items-center">
              <Shield className="h-12 w-12 text-blue-400 mr-4" />
              <div className="font-bold text-2xl">
                <span>SA Recurso</span>
                <span className="text-blue-400"> Bafômetro</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <a 
              href="https://www.instagram.com/sarecursobafometro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center space-y-4 mb-8">
            <p className="text-gray-400">
              SA Recurso Bafômetro | CNPJ 36.632.258/0001-52
            </p>
            <p className="text-gray-400">
              Rua Alm Brasil, 685, Sala 412 - Mooca – São Paulo/SP
            </p>
            <p className="text-gray-400">
              contato@sarecursobafometro.com.br
            </p>
          </div>

          <div className="flex gap-4 text-gray-400 mb-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Início</Link>
            <span>|</span>
            <Link to="/sobre" className="hover:text-blue-400 transition-colors">Sobre nós</Link>
            <span>|</span>
            <Link to="/privacidade" className="hover:text-blue-400 transition-colors">Política de Privacidade</Link>
            <span>|</span>
            <Link to="/termos" className="hover:text-blue-400 transition-colors">Termos de Uso</Link>
          </div>

          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SA Recurso Bafômetro. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;