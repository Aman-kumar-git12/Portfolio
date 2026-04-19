import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted text-sm font-medium">
          © {new Date().getFullYear()} Antigravity Dev. Built with React & Tailwind.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors">Twitter</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors">Instagram</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
