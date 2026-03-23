import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-soft',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-soft',
    outline: 'border-2 border-primary text-primary hover:bg-pastel-blue/20',
    ghost: 'hover:bg-gray-100 text-gray-700'
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg font-bold'
  };

  return (
    <button 
      className={cn(
        'inline-flex items-center justify-center rounded-3xl font-poppins transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

export default Button;
