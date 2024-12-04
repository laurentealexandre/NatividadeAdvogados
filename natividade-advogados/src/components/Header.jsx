import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Barra dourada superior */}
      <div className="h-2 bg-gradient-to-r from-marigold to-old-gold" />
      
      <div className="bg-dark-custom shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo}
                alt="Natividade Advogados" 
                className="h-16 md:h-20 border-2 border-marigold rounded-sm"  
              />
            </Link>

            {/* Menu Desktop */}
            <nav className="hidden md:flex space-x-12"> {/* Aumentei o espaçamento entre os itens */}
              <Link 
                to="/" 
                className="text-marigold hover:text-marzipan transition-colors font-semibold text-lg tracking-wide"
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className="text-marigold hover:text-marzipan transition-colors font-semibold text-lg tracking-wide"
              >
                Sobre Nós
              </Link>
              <Link 
                to="/contato" 
                className="text-marigold hover:text-marzipan transition-colors font-semibold text-lg tracking-wide"
              >
                Contato
              </Link>
            </nav>

            {/* Botão Menu Mobile */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-marigold" />
              ) : (
                <Menu className="h-6 w-6 text-marigold" />
              )}
            </button>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-marigold/20 mt-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-marigold hover:text-marzipan transition-colors font-semibold text-lg tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
                <Link 
                  to="/sobre" 
                  className="text-marigold hover:text-marzipan transition-colors font-semibold text-lg tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nós
                </Link>
                <Link 
                  to="/contato" 
                  className="text-marigold hover:text-marzipan transition-colors font-semibold text-lg tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Barra dourada inferior */}
      <div className="h-2 bg-gradient-to-r from-marigold to-old-gold" />
    </header>
  );
};

export default Header;