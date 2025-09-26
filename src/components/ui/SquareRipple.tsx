import React from 'react';
import RippleSquare from './RippleSquare';

interface Props {
  baseSquareSize?: number;
  baseSquareOpacity?: number;
  spaceBetweenSquare?: number;
  squareOpacityDowngradeRatio?: number;
  squareClass?: string;
  waveSpeed?: number;
  numberOfSquares?: number;
  className?: string;
}

const SquareRipple: React.FC<Props> = ({
  baseSquareSize = 210,
  baseSquareOpacity = 0.24,
  squareOpacityDowngradeRatio = 0.03,
  waveSpeed = 80,
  spaceBetweenSquare = 70,
  numberOfSquares = 7,
  squareClass = '',
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      {Array.from({ length: numberOfSquares }, (_, index) => (
        <RippleSquare
          key={index}
          opacity={baseSquareOpacity - index * squareOpacityDowngradeRatio}
          size={baseSquareSize + index * spaceBetweenSquare}
          animationDelay={index * waveSpeed}
          borderStyle={index === numberOfSquares - 1 ? 'dashed' : 'solid'}
          className={squareClass}
        />
      ))}
    </div>
  );
};

export default SquareRipple;