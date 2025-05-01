import React from 'react';
import { Star, MessageCircle, Shield } from 'lucide-react';
import CTAButton from './CTAButton';

interface TestimonialProps {
  name: string;
  rating: number;
  text: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, rating, text }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:translate-y-[-8px]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/10 rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
            {name.charAt(0)}
          </div>
          <div className="ml-4">
            <div className="font-bold text-xl text-slate-900">{name}</div>
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-slate-600 text-lg">{text}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Roberto Silva",
      rating: 5,
      text: "Excelente serviço! Conseguiram anular minha multa por Lei Seca em tempo recorde. Super recomendo!"
    },
    {
      name: "Carla Oliveira",
      rating: 5,
      text: "Muito competentes e atenciosos. Resolveram meu problema com a CNH suspensa e agora posso dirigir novamente."
    },
    {
      name: "Marcos Pereira",
      rating: 5,
      text: "Profissionais sérios e que realmente cumprem o que prometem. Meu carro foi liberado no mesmo dia!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-slate-900">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-slate-600">
            A satisfação dos nossos clientes é a nossa maior prioridade. Veja alguns depoimentos de pessoas que confiaram em nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-4 text-2xl font-bold text-slate-900">
              Mais de 100 avaliações 5 estrelas
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://www.google.com/search?q=sa+recurso+bafometro" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-colors"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Ver todas as avaliações no Google
            </a>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;