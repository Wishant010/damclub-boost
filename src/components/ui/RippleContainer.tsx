import React from 'react';
import SquareRipple from './SquareRipple';

interface Props {
  children: React.ReactNode;
  squareClass?: string;
  rippleClassName?: string;
}

const RippleContainer: React.FC<Props> = ({ children, squareClass = '', rippleClassName = '' }) => {
  return (
    <div className="relative">
      {children}
      <SquareRipple squareClass={squareClass} className={rippleClassName} />
    </div>
  );
};

export default RippleContainer;