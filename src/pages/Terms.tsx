import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Termos de Uso</h1>
        <p className="text-gray-600 mb-8">Última atualização: maio de 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Bem-vindo ao site da SA Recurso Bafômetro. Ao acessar ou utilizar este site, você concorda com os presentes Termos de Uso. Leia com atenção.
          </p>
          
          <h2>1. Finalidade do site</h2>
          <p>
            Este site tem caráter exclusivamente informativo e tem como objetivo apresentar os serviços oferecidos pela SA Recurso Bafômetro, como recursos administrativos relacionados à suspensão da CNH, multas e liberação de veículos.
          </p>
          
          <h2>2. Contato e atendimento</h2>
          <p>
            O contato com a empresa é realizado exclusivamente por meio do botão de WhatsApp disponível no site. Não há coleta direta de informações pelo site.
          </p>
          
          <h2>3. Responsabilidades</h2>
          <p>
            As informações disponíveis no site são fornecidas com o objetivo de orientar e apresentar nossos serviços. Embora busquemos manter o conteúdo atualizado e preciso, a SA Recurso Bafômetro não se responsabiliza por eventuais imprecisões, omissões ou pela interpretação indevida das informações.
          </p>
          
          <h2>4. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo do site, incluindo textos, imagens, logotipos e identidade visual, é de propriedade da SA Recurso Bafômetro e não pode ser reproduzido sem autorização prévia.
          </p>
          
          <h2>5. Modificações</h2>
          <p>
            A SA Recurso Bafômetro reserva-se o direito de alterar estes Termos de Uso a qualquer momento, sendo recomendável que o usuário os consulte periodicamente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;