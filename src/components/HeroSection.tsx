import React from 'react';
import { Shield, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900/90"></div>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-white mb-8">
              <Shield className="w-5 h-5 mr-2" />
              <span>Especialistas em Lei Seca</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Proteja sua CNH com quem mais entende
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              +5 anos transformamos multas em soluções!
            </p>
          </div>
          
          {/* Guarantee box */}
          <div className="relative group cursor-pointer mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-yellow-500/20">
              <div className="flex flex-col items-center">
                <div className="text-yellow-400 font-bold text-2xl md:text-3xl mb-4 text-center w-full flex flex-wrap justify-center items-center gap-2">
                  <Shield className="w-8 h-8" />
                  <span className="text-center">GARANTIA EXCLUSIVA</span>
                </div>
                <p className="text-white text-xl md:text-2xl text-center">
                  Se não resolvermos seu caso, devolvemos
                  <span className="block font-bold text-yellow-400 mt-2 text-3xl">
                    100% do seu dinheiro!
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <CTAButton />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <CheckCircle2 />, text: "+5 Anos de Experiência" },
              { icon: <CheckCircle2 />, text: "+1000 Clientes Atendidos" },
              { icon: <Clock />, text: "Responde Rapidamente" }
            ].map((item, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-blue-400 mr-3">
                      {item.icon}
                    </div>
                    <span className="text-white text-lg">{item.text}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;