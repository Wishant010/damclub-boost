import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DamboardHero = () => {
  const boardRef = useRef<HTMLDivElement>(null);
  const piecesRef = useRef<HTMLDivElement[]>([]);

  // International draughts 10x10 board with proper starting positions
  const initialPieces = [
    // White pieces (bottom 4 rows)
    { row: 6, col: 1, color: 'white' },
    { row: 6, col: 3, color: 'white' },
    { row: 6, col: 5, color: 'white' },
    { row: 6, col: 7, color: 'white' },
    { row: 6, col: 9, color: 'white' },
    { row: 7, col: 0, color: 'white' },
    { row: 7, col: 2, color: 'white' },
    { row: 7, col: 4, color: 'white' },
    { row: 7, col: 6, color: 'white' },
    { row: 7, col: 8, color: 'white' },
    { row: 8, col: 1, color: 'white' },
    { row: 8, col: 3, color: 'white' },
    { row: 8, col: 5, color: 'white' },
    { row: 8, col: 7, color: 'white' },
    { row: 8, col: 9, color: 'white' },
    { row: 9, col: 0, color: 'white' },
    { row: 9, col: 2, color: 'white' },
    { row: 9, col: 4, color: 'white' },
    { row: 9, col: 6, color: 'white' },
    { row: 9, col: 8, color: 'white' },
    // Black pieces (top 4 rows)
    { row: 0, col: 1, color: 'black' },
    { row: 0, col: 3, color: 'black' },
    { row: 0, col: 5, color: 'black' },
    { row: 0, col: 7, color: 'black' },
    { row: 0, col: 9, color: 'black' },
    { row: 1, col: 0, color: 'black' },
    { row: 1, col: 2, color: 'black' },
    { row: 1, col: 4, color: 'black' },
    { row: 1, col: 6, color: 'black' },
    { row: 1, col: 8, color: 'black' },
    { row: 2, col: 1, color: 'black' },
    { row: 2, col: 3, color: 'black' },
    { row: 2, col: 5, color: 'black' },
    { row: 2, col: 7, color: 'black' },
    { row: 2, col: 9, color: 'black' },
    { row: 3, col: 0, color: 'black' },
    { row: 3, col: 2, color: 'black' },
    { row: 3, col: 4, color: 'black' },
    { row: 3, col: 6, color: 'black' },
    { row: 3, col: 8, color: 'black' },
  ];

  useEffect(() => {
    if (!boardRef.current) return;

    const ctx = gsap.context(() => {
      // Create a smooth wave animation for the board squares
      gsap.fromTo(
        '.damboard-square',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: {
            grid: [10, 10],
            from: 'start',
            amount: 0.8,
          },
          ease: 'power2.out',
        }
      );

      // Animate the board pieces with a more elegant entrance
      gsap.fromTo(
        '.board-piece',
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: {
            each: 0.02,
            from: 'edges',
          },
          ease: 'back.out(1.2)',
          delay: 0.6,
        }
      );

      // Subtle shadow pulse for interactivity hint
      gsap.to('.board-piece', {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.1,
          from: 'random',
        },
        delay: 2,
      });

    }, boardRef);

    return () => ctx.revert();
  }, []);

  // Generate 10x10 international draughts board with realistic pieces
  const renderDamboard = () => {
    const squares = [];
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const isDark = (row + col) % 2 === 1;
        const piece = initialPieces.find(p => p.row === row && p.col === col);

        squares.push(
          <div
            key={`${row}-${col}`}
            className={`damboard-square relative aspect-square w-full transition-all ${
              isDark
                ? 'bg-gradient-to-br from-green-900 via-green-800 to-green-900 damboard-square-dark'
                : 'bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-100 damboard-square-light'
            }`}
          >
            {piece && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`board-piece w-[70%] h-[70%] rounded-full cursor-pointer transition-transform hover:scale-105 damboard-piece-shadow ${
                    piece.color === 'white'
                      ? 'bg-gradient-to-b from-gray-100 via-gray-200 to-gray-400'
                      : 'bg-gradient-to-b from-gray-800 via-gray-900 to-black'
                  }`}
                >
                  {/* Inner circle for 3D effect */}
                  <div
                    className={`absolute inset-2 rounded-full ${
                      piece.color === 'white'
                        ? 'bg-gradient-to-br from-gray-50 to-gray-300 damboard-piece-inner-white'
                        : 'bg-gradient-to-br from-gray-700 to-black damboard-piece-inner-black'
                    }`}
                  />
                  {/* Highlight for realism */}
                  <div
                    className={`absolute top-[15%] left-[25%] w-[30%] h-[30%] rounded-full opacity-60 ${
                      piece.color === 'white'
                        ? 'bg-gradient-to-br from-white to-transparent'
                        : 'bg-gradient-to-br from-gray-600 to-transparent'
                    }`}
                  />
                </div>
              </div>
            )}
          </div>
        );
      }
    }
    return squares;
  };

  return (
    <div ref={boardRef} className="relative inline-block">
      {/* Wooden board frame */}
      <div className="relative p-2 sm:p-3 lg:p-4 rounded-lg transform rotate-45 damboard-frame">
        {/* Board surface */}
        <div className="p-1 rounded damboard-surface">
          {/* Playing surface */}
          <div className="grid grid-cols-10 gap-0 relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
            {renderDamboard()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamboardHero;