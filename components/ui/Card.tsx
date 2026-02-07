import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  withScrews?: boolean;
  withVents?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  elevated = false, 
  withScrews = true,
  withVents = false
}) => {
  return (
    <div 
      className={`
        relative bg-chassis rounded-xl p-8 transition-transform duration-300 ease-out
        ${elevated ? 'shadow-floating hover:-translate-y-1' : 'shadow-card hover:shadow-floating hover:-translate-y-1'}
        ${className}
      `}
    >
      {/* Decorative Screws */}
      {withScrews && (
        <>
          <div className="absolute top-3 left-3 w-3 h-3 rounded-full opacity-60 bg-gradient-to-br from-gray-400 to-gray-600 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_white]" />
          <div className="absolute top-3 right-3 w-3 h-3 rounded-full opacity-60 bg-gradient-to-br from-gray-400 to-gray-600 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_white]" />
          <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full opacity-60 bg-gradient-to-br from-gray-400 to-gray-600 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_white]" />
          <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full opacity-60 bg-gradient-to-br from-gray-400 to-gray-600 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_white]" />
        </>
      )}

      {/* Decorative Vents */}
      {withVents && (
        <div className="absolute top-4 right-10 flex gap-1">
           <div className="h-6 w-1 rounded-full bg-muted shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]" />
           <div className="h-6 w-1 rounded-full bg-muted shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]" />
           <div className="h-6 w-1 rounded-full bg-muted shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]" />
        </div>
      )}

      {children}
    </div>
  );
};

export default Card;