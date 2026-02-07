import React, { useState } from 'react';
import { Menu, X, Cpu, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-chassis/90 backdrop-blur-sm border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-chassis shadow-card flex items-center justify-center text-accent">
            <Cpu size={20} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-text-primary tracking-tight uppercase">T. Kvalem</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
              <span className="font-mono text-[10px] text-text-muted tracking-widest">SYSTEM ONLINE</span>
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-text-muted hover:text-accent transition-colors uppercase tracking-wide">About</a>
          <a href="#experience" className="text-sm font-medium text-text-muted hover:text-accent transition-colors uppercase tracking-wide">Experience</a>
          <a href="#skills" className="text-sm font-medium text-text-muted hover:text-accent transition-colors uppercase tracking-wide">Skills</a>
          <Button variant="primary" size="sm" onClick={() => window.location.href='mailto:Theodorkvalem@hotmail.com'}>
            Connect
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-md shadow-card text-text-primary active:shadow-pressed transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-chassis border-b border-border-shadow p-6 shadow-floating flex flex-col gap-4 animate-in slide-in-from-top-4">
          <a href="#about" className="p-4 rounded-lg shadow-pressed text-center font-bold text-text-primary" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="#experience" className="p-4 rounded-lg shadow-card text-center font-bold text-text-primary" onClick={() => setIsOpen(false)}>EXPERIENCE</a>
          <a href="#skills" className="p-4 rounded-lg shadow-card text-center font-bold text-text-primary" onClick={() => setIsOpen(false)}>SKILLS</a>
          <div className="flex justify-center gap-6 mt-4">
             <Github className="text-text-muted hover:text-accent cursor-pointer" />
             <Linkedin className="text-text-muted hover:text-accent cursor-pointer" />
             <Mail className="text-text-muted hover:text-accent cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;