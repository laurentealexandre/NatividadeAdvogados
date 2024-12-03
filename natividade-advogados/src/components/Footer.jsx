import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Barra dourada superior */}
      <div className="h-2 bg-gradient-to-r from-marigold to-old-gold" />
      
      <div className="bg-dark-custom shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-center text-marigold font-semibold text-lg">
            © {currentYear} Natividade Advogados - Todos os direitos reservados
          </div>
        </div>
      </div>

      {/* Barra dourada inferior */}
      <div className="h-2 bg-gradient-to-r from-marigold to-old-gold" />
    </footer>
  );
};

export default Footer;