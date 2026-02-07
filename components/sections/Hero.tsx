import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { PROFILE } from '../../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chassis shadow-recessed border border-white/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-text-muted font-bold tracking-widest uppercase">Available for Hire</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-text-primary tracking-tight leading-[1.1] drop-shadow-[0_1px_1px_#ffffff]">
            Building Digital <br />
            Machines <span className="text-accent">& Apps</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-text-muted max-w-xl leading-relaxed">
            {PROFILE.tagline} I specialize in 
            <span className="font-semibold text-text-primary"> Agent-Driven Development</span> and 
            <span className="font-semibold text-text-primary"> Automation</span>, 
            turning manual processes into efficient software systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" onClick={() => document.getElementById('experience')?.scrollIntoView()}>
              View Protocol <ArrowRight className="inline ml-2 h-5 w-5" />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              Initialize Contact
            </Button>
          </div>
        </div>

        {/* Visual Component: Profile Image Frame */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-md aspect-square bg-chassis rounded-[30px] border-4 border-[#2d3436] shadow-floating p-6 relative overflow-hidden group">
            {/* Texture Overlay for Frame */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply pointer-events-none" />
            
            {/* Inner Recess for Photo */}
            <div className="w-full h-full bg-[#1a1d21] rounded-2xl shadow-recessed p-2 relative overflow-hidden flex flex-col justify-center items-center">
              
              {/* The Profile Image */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-800">
                <img 
                    src={PROFILE.avatarUrl} 
                    alt={PROFILE.name} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Tech Overlay / Scanlines */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 font-mono text-white/90">
                    <div className="text-[10px] text-accent font-bold tracking-widest mb-1">OPERATIVE_ID</div>
                    <div className="text-xl font-bold uppercase tracking-wide">{PROFILE.name}</div>
                </div>
              </div>

              {/* Status Bar Top */}
              <div className="absolute top-4 right-4 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              </div>
              
            </div>

            {/* Hardware Decorations */}
            <div className="absolute top-1/2 -right-1 w-1 h-12 bg-gray-600 rounded-l-sm shadow-lg" />
            <div className="absolute top-1/2 -left-1 w-1 h-12 bg-gray-600 rounded-r-sm shadow-lg" />
            
            {/* Screws */}
            <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-[#2d3436] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_rgba(255,255,255,0.2)]" />
            <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#2d3436] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_rgba(255,255,255,0.2)]" />
            <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-[#2d3436] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_rgba(255,255,255,0.2)]" />
            <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-[#2d3436] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_rgba(255,255,255,0.2)]" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;