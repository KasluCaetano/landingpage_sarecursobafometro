import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import reclameAquiSelo from '../assets/reclameaqui.png';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-xl font-semibold text-slate-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0 ml-4" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-lg text-slate-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "Como funciona o processo de recurso da Lei Seca?",
      answer: "Nosso processo é simples e eficiente. Após o contato inicial, nossa equipe analisa seu caso, prepara toda a documentação necessária e submete o recurso dentro do prazo legal. Você não precisa se preocupar com a burocracia, cuidamos de tudo para você."
    },
    {
      question: "Quanto tempo leva para resolver meu caso?",
      answer: "O tempo de resolução varia de acordo com cada caso, mas trabalhamos com a máxima agilidade possível. Normalmente, conseguimos resultados em prazos menores que a média do mercado, graças à nossa experiência e conhecimento específico."
    },
    {
      question: "E se eu perder o recurso?",
      answer: "Oferecemos garantia de devolução do dinheiro. Se não conseguirmos resolver seu caso, devolvemos 100% do valor investido. Esta é nossa forma de demonstrar confiança no nosso trabalho e compromisso com sua satisfação."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos diversas formas de pagamento para sua comodidade, incluindo cartão de crédito (com opção de parcelamento), boleto bancário, PIX e transferência bancária."
    },
    {
      question: "Preciso ir até o escritório?",
      answer: "Todo o processo pode ser realizado de forma online. Coletamos a documentação necessária digitalmente e mantemos você informado sobre cada etapa do processo. Caso prefira, é possível agendar um horário no nosso escritório, mas isso é totalmente opcional e não é essencial para dar andamento ao seu caso. Estamos aqui para facilitar ao máximo sua experiência, conforme sua preferência."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Dúvidas
            <span className="text-blue-600"> Frequentes</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://www.reclameaqui.com.br/empresa/sabrina-aurelia-santos-de-paula/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src={reclameAquiSelo} 
                alt="Reclame Aqui - Empresa Verificada" 
                className="h-24 mx-auto mb-4"
              />
              <p className="text-xs text-slate-400 text-lg hover:text-blue-600 transition-colors italic">
                Veja nossa reputação no ReclameAqui
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;