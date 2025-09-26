import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveHeroProps {
  title: string | ReactNode;
  subtitle?: string;
  description?: string;
  badges?: string[];
  className?: string;
  children?: ReactNode;
  backgroundComponent?: ReactNode;
  gradientOverlay?: string;
}

const ResponsiveHero = ({
  title,
  subtitle,
  description,
  badges,
  className = '',
  children,
  backgroundComponent,
  gradientOverlay = 'from-black/20 via-transparent to-primary/40'
}: ResponsiveHeroProps) => {
  return (
    <section className={cn(
      "page-header relative overflow-hidden",
      "min-h-[400px] sm:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px]",
      "flex items-center justify-center",
      className
    )}>
      {/* Background Component or Fallback Gradient */}
      {backgroundComponent ? (
        <div className="absolute inset-0 z-0">
          {backgroundComponent}
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary/90 to-accent/80" />
      )}

      {/* Gradient Overlay */}
      <div className={cn(
        "absolute inset-0 z-10",
        `bg-gradient-to-b ${gradientOverlay}`
      )} />

      {/* Content */}
      <div className="hero-content container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20 lg:pt-24">
        {/* Title */}
        <h1 className={cn(
          "font-heading font-bold text-white animate-fade-in drop-shadow-2xl",
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          "mb-4 sm:mb-6"
        )}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 drop-shadow-lg">
            {subtitle}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p className={cn(
            "text-white/90 max-w-3xl mx-auto drop-shadow-lg",
            "text-base sm:text-lg md:text-xl lg:text-2xl",
            "mb-6 sm:mb-8",
            "px-4 sm:px-0"
          )}>
            {description}
          </p>
        )}

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white/20 backdrop-blur-md rounded-lg",
                  "px-3 sm:px-4 lg:px-6",
                  "py-2 sm:py-3",
                  "border-2 border-white/40"
                )}
              >
                <span className="text-white font-semibold text-sm sm:text-base">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Additional Content */}
        {children}
      </div>

      {/* Mobile-friendly Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 sm:h-4 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveHero;