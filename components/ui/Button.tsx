import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "relative font-bold uppercase tracking-wider transition-all duration-150 ease-out active:translate-y-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-accent text-accent-foreground shadow-[4px_4px_8px_rgba(166,50,60,0.4),-4px_-4px_8px_rgba(255,100,110,0.4)] hover:brightness-110 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.2)] border border-white/20",
    secondary: "bg-chassis text-text-primary shadow-card hover:text-accent active:shadow-pressed",
    ghost: "bg-transparent text-text-muted hover:bg-chassis hover:shadow-recessed active:translate-y-0"
  };

  const sizes = {
    sm: "h-10 px-4 text-xs rounded-sm",
    md: "h-12 px-6 text-sm rounded-md",
    lg: "h-14 px-8 text-base rounded-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;