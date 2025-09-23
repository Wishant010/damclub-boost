import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DamboardHero = () => {
  const boardRef = useRef<HTMLDivElement>(null);
  const piecesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!boardRef.current) return;

    const ctx = gsap.context(() => {
      // Create a staggered animation for the board squares
      gsap.fromTo(
        '.damboard-square',
        {
          scale: 0,
          rotation: 45,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.6,
          stagger: {
            grid: [8, 8],
            from: 'center',
            amount: 1.2,
          },
          ease: 'back.out(1.7)',
        }
      );

      // Animate the dam pieces
      gsap.fromTo(
        '.hero-dam-piece',
        {
          y: -100,
          opacity: 0,
          rotation: 0,
        },
        {
          y: 0,
          opacity: 1,
          rotation: 360,
          duration: 1,
          stagger: 0.1,
          ease: 'bounce.out',
          delay: 0.8,
        }
      );

      // Continuous floating animation for pieces
      gsap.to('.hero-dam-piece', {
        y: '-10px',
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
        delay: 2,
      });
    }, boardRef);

    return () => ctx.revert();
  }, []);

  // Generate damboard pattern
  const renderDamboard = () => {
    const squares = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isLight = (row + col) % 2 === 0;
        squares.push(
          <div
            key={`${row}-${col}`}
            className={`damboard-square w-8 h-8 ${
              isLight ? 'bg-damboard-light' : 'bg-damboard-dark'
            }`}
          />
        );
      }
    }
    return squares;
  };

  return (
    <div ref={boardRef} className="relative flex flex-col items-center">
      {/* Damboard Grid */}
      <div className="grid grid-cols-8 gap-0 mb-8 shadow-damboard rounded-lg overflow-hidden">
        {renderDamboard()}
      </div>

      {/* Hero Dam Pieces */}
      <div className="flex space-x-6">
        <div className="hero-dam-piece">
          <div className="dam-piece-red w-12 h-12 cursor-pointer hover:scale-110 transition-transform"></div>
        </div>
        <div className="hero-dam-piece">
          <div className="dam-piece-white w-12 h-12 cursor-pointer hover:scale-110 transition-transform"></div>
        </div>
        <div className="hero-dam-piece">
          <div className="dam-piece-red w-12 h-12 cursor-pointer hover:scale-110 transition-transform"></div>
        </div>
        <div className="hero-dam-piece">
          <div className="dam-piece-white w-12 h-12 cursor-pointer hover:scale-110 transition-transform"></div>
        </div>
      </div>
    </div>
  );
};

export default DamboardHero;