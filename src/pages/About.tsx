import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Sobre Nós</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>
            A SA Recurso Bafômetro é uma empresa especializada na defesa administrativa de motoristas que enfrentam processos de suspensão ou cassação da CNH, especialmente em casos relacionados à recusa ou reprovação no teste do bafômetro.
          </p>
          
          <p>
            Com uma equipe experiente e altamente qualificada, oferecemos soluções personalizadas para cada situação, atuando com agilidade, clareza e comprometimento. Nosso objetivo é proteger o direito de dirigir dos nossos clientes, utilizando conhecimento técnico e estratégias eficazes dentro da legalidade.
          </p>
          
          <p>
            Todo o atendimento pode ser feito de forma online, sem burocracia. Caso prefira, também é possível agendar um horário em nosso escritório — mas isso não é necessário para dar andamento ao seu caso.
          </p>
          
          <p>
            Somos reconhecidos por nossa transparência, atendimento humanizado e resultados acima da média no setor. Nosso compromisso é com a sua tranquilidade e com a retomada do seu direito de dirigir o quanto antes. Buscamos sempre os melhores resultados, respeitando a lei e cada situação individual.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;