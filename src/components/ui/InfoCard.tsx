import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

const InfoCard = ({ icon: Icon, title, description, children, className = '' }: InfoCardProps) => {
  return (
    <div className={`card-elegant card-hover p-6 text-center ${className}`}>
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent" />
        </div>
      </div>
      <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      {children}
    </div>
  );
};

export default InfoCard;