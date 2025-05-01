import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Privacidade</h1>
        <p className="text-gray-600 mb-8">Última atualização: maio de 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <p>
            A SA Recurso Bafômetro respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais, mesmo que não sejam coletados diretamente por este site.
          </p>
          
          <h2>1. Coleta de dados</h2>
          <p>
            Este site não coleta dados diretamente, como nome, e-mail ou telefone, e não utiliza formulários de contato.
          </p>
          
          <h2>2. Canal de atendimento</h2>
          <p>
            O único meio de comunicação oferecido é por meio do link para o WhatsApp. Qualquer informação compartilhada pelo usuário via WhatsApp está sujeita à política de privacidade do próprio aplicativo.
          </p>
          
          <h2>3. Uso das informações</h2>
          <p>
            Informações eventualmente fornecidas via WhatsApp são utilizadas exclusivamente para fins de atendimento, esclarecimento de dúvidas e prestação dos serviços oferecidos.
          </p>
          
          <h2>4. Compartilhamento de dados</h2>
          <p>
            A SA Recurso Bafômetro não vende, compartilha ou distribui dados pessoais a terceiros, salvo quando necessário para a execução dos serviços contratados, mediante consentimento do usuário.
          </p>
          
          <h2>5. Segurança</h2>
          <p>
            Nos comprometemos a adotar medidas de segurança adequadas para proteger as informações fornecidas pelos clientes durante o atendimento via WhatsApp.
          </p>
          
          <h2>6. Alterações</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos que o usuário a revise com regularidade.
          </p>
          
          <h2>7. Contato</h2>
          <p>
            Para mais informações, entre em contato através do nosso WhatsApp: 11 99587-5940.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;