/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Star, CheckCircle2, Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Pages
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hjem', path: '/' },
    { name: 'Vores ydelser', path: '/ydelser' },
    { name: 'Om os', path: '/om-os' },
    { name: 'Kontakt os', path: '/kontakt' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav ${isScrolled ? 'py-0 shadow-lg' : 'py-2'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <Link to="/" className="flex items-center group">
            <div className="h-20 w-20 -ml-2 -mr-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img src="/logo-transparent.png" alt="Grønrum Anlæg Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-primary">
              Grønrum Anlæg
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent relative group ${location.pathname === link.path ? 'text-primary' : 'text-gray-600'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''
                  }`} />
              </Link>
            ))}
            <Link to="/kontakt" className="btn-primary py-2 px-6 text-sm">
              Få et tilbud
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors text-primary"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium rounded-md transition-colors ${location.pathname === link.path ? 'text-primary bg-primary/5' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center btn-primary"
                >
                  Få et tilbud
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6 group">
              <div className="h-20 w-20 -ml-2 -mr-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img src="/logo-transparent.png" alt="Grønrum Anlæg Logo" className="w-full h-full object-contain brightness-0 invert opacity-90" />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">
                Grønrum Anlæg
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Vi skaber smukke uderum, der holder i generationer. Din lokale anlægsgartner med øje for detaljen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Hurtige links</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Hjem</Link></li>
              <li><Link to="/ydelser" className="hover:text-white transition-colors">Vores ydelser</Link></li>
              <li><Link to="/om-os" className="hover:text-white transition-colors">Om os</Link></li>
              <li><Link to="/kontakt" className="hover:text-white transition-colors">Kontakt os</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Ydelser</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/ydelser" className="hover:text-white transition-colors">Havedesign</Link></li>
              <li><Link to="/ydelser" className="hover:text-white transition-colors">Belægning</Link></li>
              <li><Link to="/ydelser" className="hover:text-white transition-colors">Vedligeholdelse</Link></li>
              <li><Link to="/ydelser" className="hover:text-white transition-colors">Træfældning</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-0.5" />
                <span>Gartnervænget 12, 8000 Aarhus C</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <a href="tel:+4512345678" className="hover:text-white transition-colors">+45 12 34 56 78</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:info@grønrum.dk" className="hover:text-white transition-colors">info@grønrum.dk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-400">
          <p>© 2024 Grønrum Anlæg. Alle rettigheder forbeholdes.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privatlivspolitik</a>
            <a href="#" className="hover:text-white transition-colors">Handelsbetingelser</a>
            <a href="#" className="hover:text-white transition-colors">Cookie-indstillinger</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/ydelser" element={<ServicesPage />} />
              <Route path="/om-os" element={<AboutPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
