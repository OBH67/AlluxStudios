'use client';
    
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {    
        const handleScroll = () => {
          setScrolled(window.scrollY > 20);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
    <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-blue-500/20 shadow-lg shadow-blue-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with neon effect */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-lg blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-blue-400/70 transition-all duration-300">
                  <span className="text-white font-bold text-2xl drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
                    FBT
                  </span>
                </div>
              </div>
              <div className="ml-3">
                <span className="block text-white font-bold text-xl drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                  Frank Brother's
                </span>
                <span className="block text-xs text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
                  Tecnologies
                </span>
              </div>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#servicios', label: 'Servicios' },
                { href: '#nosotros', label: 'Nosotros' },
                { href: '#portafolio', label: 'Portafolio' },
                { href: '#contacto', label: 'Contacto' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-300 font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10 group-hover:text-white drop-shadow-[0_0_8px_rgba(59,130,246,0)] group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,1)] transition-all duration-300">
                    {link.label}
                  </span>
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-lg transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                </a>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* CTA Button with neon effect */}
              <button className="hidden sm:block relative group overflow-hidden px-6 py-2.5 rounded-lg font-semibold transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-blue-500 blur-xl"></div>
                </div>
                <span className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  Contáctanos
                </span>
                <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-lg transition-all duration-300"></div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white focus:outline-none group"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`block w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-6 pb-6 space-y-2">
            {[
              { href: '#inicio', label: 'Inicio' },
              { href: '#servicios', label: 'Servicios' },
              { href: '#nosotros', label: 'Nosotros' },
              { href: '#portafolio', label: 'Portafolio' },
              { href: '#contacto', label: 'Contacto' },
            ].map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                <span className="drop-shadow-[0_0_8px_rgba(59,130,246,0)] hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300">
                  {link.label}
                </span>
              </a>
            ))}
            <button className="w-full mt-4 relative group overflow-hidden px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-blue-500 blur-xl"></div>
              </div>
              <span className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                Contáctanos
              </span>
            </button>
          </div>
        </div>
      </nav>);
}