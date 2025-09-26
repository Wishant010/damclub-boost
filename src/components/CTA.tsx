import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/ui-components';

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTA = ({
  title = "Zien we je vrijdag?",
  description = "Elke vrijdagavond vanaf 19:00 uur - kom gezellig langs!",
  buttonText = "Meer Weten",
  buttonLink = "/contact"
}: CTAProps) => {
  const handleClick = (e: React.MouseEvent) => {
    // Check if the link is an anchor link
    if (buttonLink.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(buttonLink);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-primary rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-white/90">{description}</p>
            </div>
            {buttonLink.startsWith('#') ? (
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 whitespace-nowrap"
                onClick={handleClick}
              >
                {buttonText}
              </Button>
            ) : (
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 whitespace-nowrap">
                <Link to={buttonLink}>{buttonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;