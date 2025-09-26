import React from 'react';

interface Props {
  size?: number;
  className?: string;
  opacity?: number;
  animationDelay?: number;
  borderStyle?: string;
}

const RippleSquare: React.FC<Props> = ({
  size = 210,
  opacity = 0.24,
  animationDelay = 0,
  borderStyle = 'solid',
  className = ''
}) => {
  return (
    <div
      className={`absolute shadow-xl animate-ripple-square ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${animationDelay}ms`,
        opacity: opacity,
        borderStyle: borderStyle,
        borderWidth: '1px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(1)',
      }}
    />
  );
};

export default RippleSquare;