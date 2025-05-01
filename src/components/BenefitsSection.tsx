import React from 'react';
import { MessageCircle, ShieldCheck, RefreshCw, FileText } from 'lucide-react';
import CTAButton from './CTAButton';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
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

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: "Atendimento Rápido e Personalizado",
      description: "Fale diretamente com nossos especialistas, 24h por dia, sem intermediários."
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Experiência Comprovada",
      description: "Com mais de 5 anos de experiência, estamos prontos para resolver seu problema."
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: "100% de Devolução do Valor Pago",
      description: "Garantimos que, se não conseguirmos o resultado, devolvemos o valor pago."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Sem Complicação ou Burocracia",
      description: "Resolvemos tudo por você, de forma simples e transparente."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
          Benefícios
          <span className="text-blue-600"> Exclusivos</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-blue-900 text-white rounded-2xl shadow-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-6 text-center flex justify-center items-center">GARANTIA EXCLUSIVA</h3>
          <p className="mb-6 text-lg">
            Não corra o risco de ficar sem dirigir. A Lei Seca é rigorosa, mas nossas estratégias jurídicas podem ajudar a manter sua habilitação.
          </p>
          <p className="mb-8 text-lg">
            Nossos especialistas analisam cada caso individualmente para oferecer a melhor solução jurídica.
          </p>
          <div className="flex justify-center">
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;