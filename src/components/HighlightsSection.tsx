import React from 'react';
import { ShieldCheck, CreditCard, Award, Zap } from 'lucide-react';

interface HighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Highlight: React.FC<HighlightProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:translate-y-[-8px]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/10 rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
      <div className="relative">
        <div className="text-blue-600 mb-6 transform transition-transform group-hover:scale-110">{icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>
        <p className="text-slate-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

const HighlightsSection: React.FC = () => {
  const highlights = [
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Garantia de Vitória",
      description: "Se não resolvermos, devolvemos 100% do seu dinheiro!",
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Facilidade no Pagamento",
      description: "Boleto bancário, Pix, cartão de débito ou crédito — você escolhe a melhor opção.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "+5 Anos de Experiência",
      description: "Especialistas em recursos de multas e defesa contra a Lei Seca, com alta taxa de sucesso.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Solução Rápida e Eficiente",
      description: "Atendemos motoristas que precisam de respostas rápidas e soluções eficazes para evitar a suspensão da CNH.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
          Por Que Escolher a
          <span className="text-blue-600"> SA Recurso Bafômetro</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Highlight
              key={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection