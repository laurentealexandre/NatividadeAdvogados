import React from 'react';

const Home = () => {
  return (
    <div className="bg-dark-custom text-gray-100">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-b from-dark-custom to-black">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-marigold mb-4">
            Excelência e Dedicação em Serviços Jurídicos
          </h1>
          <p className="text-xl text-flax max-w-2xl">
            Compromisso com resultados e atendimento personalizado para proteger seus direitos e interesses.
          </p>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-16 bg-dark-custom">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-marigold mb-12 text-center">
            Áreas de Atuação
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
              <h3 className="text-xl font-bold text-old-gold mb-4">Direito Civil</h3>
              <p className="text-gray-300">
                Atuação em contratos, responsabilidade civil, direito imobiliário, 
                família e sucessões, sempre buscando a melhor solução para nossos clientes.
              </p>
            </div>

            <div className="p-6 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
              <h3 className="text-xl font-bold text-old-gold mb-4">Direito Empresarial</h3>
              <p className="text-gray-300">
                Assessoria completa para empresas, incluindo contratos comerciais, 
                recuperação judicial, societário e planejamento tributário.
              </p>
            </div>

            <div className="p-6 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
              <h3 className="text-xl font-bold text-old-gold mb-4">Direito Trabalhista</h3>
              <p className="text-gray-300">
                Representação de empregados e empregadores, com foco na prevenção 
                e resolução de conflitos trabalhistas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Escritório */}
      <section className="py-16 bg-gradient-to-b from-dark-custom to-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-marigold mb-12 text-center">
            Sobre o Escritório
          </h2>
          
          <div className="bg-black/30 p-8 rounded-lg">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              O escritório Natividade Advogados construiu sua reputação através de um 
              atendimento personalizado e resultados consistentes. Nossa equipe alia vasta 
              experiência prática com sólida formação acadêmica para oferecer soluções 
              jurídicas eficazes e inovadoras.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Prezamos pela transparência e pelo relacionamento próximo com nossos clientes, 
              mantendo-os sempre informados sobre o andamento de seus processos. Nossa missão 
              é proporcionar segurança jurídica e tranquilidade aos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-marigold mb-12 text-center">
            Nossos Diferenciais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-old-gold mb-2">Experiência</h3>
              <p className="text-gray-300">Anos de atuação bem-sucedida em casos complexos</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-old-gold mb-2">Atendimento</h3>
              <p className="text-gray-300">Comunicação clara e atendimento personalizado</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-old-gold mb-2">Compromisso</h3>
              <p className="text-gray-300">Dedicação total aos interesses dos clientes</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-old-gold mb-2">Ética</h3>
              <p className="text-gray-300">Atuação baseada em princípios éticos sólidos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

