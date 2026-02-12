
import React from 'react';

/**
 * Brand Logo Component
 */
export const CactusLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
  >
    <path d="M8 9V7a4 4 0 0 1 8 0v2" />
    <path d="M3 10a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" />
    <path d="M17 10a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V10z" />
    <path d="M12 9v13" />
  </svg>
);

/**
 * Geometric Pattern Divider
 */
export const CanaanPattern: React.FC<{ inverted?: boolean }> = ({ inverted }) => {
  return (
    <div className={`w-full h-20 relative overflow-hidden flex justify-center items-center border-y border-cactus/10 ${inverted ? 'bg-sandstone' : 'bg-forest'}`}>
      <div className="flex space-x-8 opacity-40">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20 0C20 0 20 15 5 20C20 25 20 40 20 40C20 40 20 25 35 20C20 15 20 0 20 0Z" fill={inverted ? "#4B6344" : "#F5F2E9"} />
                <circle cx="20" cy="20" r="3" fill={inverted ? "#0B221A" : "#4B6344"} />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Standardized Section Title
 */
export const SectionTitle: React.FC<{ 
    label?: string; 
    title: string; 
    description?: string; 
    centered?: boolean;
    dark?: boolean;
}> = ({ label, title, description, centered, dark }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {label && (
        <span className={`block uppercase tracking-[0.4em] text-[10px] font-bold mb-4 ${dark ? 'text-cactus' : 'text-cactus'}`}>
          {label}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl serif mb-6 leading-tight ${dark ? 'text-sandstone' : 'text-forest'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
      <div className={`w-12 h-1 mt-6 ${centered ? 'mx-auto' : ''} bg-cactus opacity-30`} aria-hidden="true"></div>
    </div>
  );
};

/**
 * Theme Button Component
 */
export const Button: React.FC<{
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}> = ({ variant = 'primary', children, onClick, className = '', type = 'button', ariaLabel }) => {
  const baseStyles = "px-10 py-5 uppercase tracking-widest text-[10px] font-bold transition-all shadow-sm";
  const variants = {
    primary: "bg-cactus text-sandstone hover:bg-forest hover:text-white shadow-lg",
    outline: "border border-forest/20 text-forest hover:bg-forest hover:text-sandstone",
    ghost: "text-cactus hover:text-forest tracking-[0.3em] bg-transparent",
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

/**
 * Standard Responsive Container
 */
export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-6 ${className}`}>
    {children}
  </div>
);
