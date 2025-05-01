import React from 'react';
import { FileText, Car, CreditCard, ShieldCheck } from 'lucide-react';
import CTAButton from './CTAButton';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:translate-y-[-8px]">
      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-b-2xl"></div>
      <div className="relative">
        <div className="text-blue-600 mb-6 transform transition-transform group-hover:scale-110">{icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>
        <p className="text-slate-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Recurso de Multa da Lei Seca",
      description: "Elaboração estratégica de recursos para evitar a suspensão da CNH e em muitos casos o valor da multa. Proteja sua habilitação!"
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Liberação de Veículos",
      description: "Agilidade no processo de liberação de veículos removidos para o pátio, reduzindo o tempo no pátio e prevenindo cobranças adicionais de diárias."
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Regularização de CNH",
      description: "Soluções rápidas para CNHs suspensas, cassadas ou com restrições, permitindo que você continue dirigindo legalmente."
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Quitação de Débitos",
      description: "Quitação de multas, IPVA, licenciamento e outras pendências, com parcelamento no cartão de crédito e condições especiais."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Nossos Serviços</h2>
          <p className="text-xl text-slate-600">
            Oferecemos soluções completas para todos os seus problemas com a Lei Seca e multas de trânsito.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;