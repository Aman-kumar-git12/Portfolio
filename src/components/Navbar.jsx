import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import Magnetic from './ui/Magnetic';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-background/80 backdrop-blur-lg border-b border-foreground/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-gradient"
        >
          AG.
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              <Magnetic strength={0.2}>{link.name}</Magnetic>
            </motion.a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors text-muted hover:text-accent"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Magnetic strength={0.2}>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Resume
            </a>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
