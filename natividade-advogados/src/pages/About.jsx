import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import advogadoImage from '../assets/advogado.png'; // Alterado para .png

const About = () => {
  return (
    <div className="bg-dark-custom text-gray-100">
      <section className="py-16 bg-gradient-to-b from-dark-custom to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Foto e Informações de Contato */}
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={advogadoImage}
                  alt="Dr. Leander Efrem Natividade"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-black/30 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-marigold mb-4">
                  Informações de Contato
                </h2>
                <div className="space-y-4">
                  <p className="flex items-center text-flax">
                    <MapPin className="mr-2" />
                    Rua Tupinambás, 13 - SALA 1401 - Edifício Absoluto Melo
                    CEP: 39401-509 - Montes Claros - MG
                  </p>
                  <p className="flex items-center text-flax">
                    <Phone className="mr-2" />
                    (38) 98827-7658
                  </p>
                  <p className="flex items-center text-flax">
                    <Mail className="mr-2" />
                    leanderadv@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Informações Profissionais */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-marigold mb-4">
                  Dr. Leander Efrem Natividade
                </h1>
                <p className="text-xl text-old-gold mb-2">OAB/MG: 122.355</p>
              </div>

              <div className="bg-black/30 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-marigold mb-4">
                  Formação Acadêmica
                </h2>
                <ul className="space-y-3 text-flax">
                  <li>• Bacharel em Direito pela Universidade Federal de Minas Gerais (UFMG)</li>
                  <li>• Pós-graduação em Direito Civil e Empresarial</li>
                  <li>• Especialização em Direito Processual Civil</li>
                  <li>• Curso de Extensão em Mediação e Arbitragem</li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-marigold mb-4">
                  Experiência Profissional
                </h2>
                <ul className="space-y-3 text-flax">
                  <li>• Mais de 10 anos de atuação na advocacia</li>
                  <li>• Membro ativo da Comissão de Direito Civil da OAB/MG</li>
                  <li>• Experiência em consultoria jurídica empresarial</li>
                  <li>• Especialista em resolução de conflitos e negociações</li>
                  <li>• Atuação em casos complexos de direito civil e empresarial</li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-marigold mb-4">
                  Áreas de Atuação
                </h2>
                <ul className="space-y-3 text-flax">
                  <li>• Direito Civil</li>
                  <li>• Direito Empresarial</li>
                  <li>• Direito Contratual</li>
                  <li>• Direito Imobiliário</li>
                  <li>• Direito Trabalhista</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;