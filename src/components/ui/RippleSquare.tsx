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
      className={`ripple-square shadow-xl animate-ripple-square ${className}`}
      data-size={size}
      data-opacity={opacity}
      data-delay={animationDelay}
      data-border={borderStyle}
    />
  );
};

export default RippleSquare;