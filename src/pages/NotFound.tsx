import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/ui-components";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen">
      {/* Hero Section with Green Background */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-accent/90">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary-foreground mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Pagina niet gevonden
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Sorry, de pagina die je zoekt bestaat niet. Ga terug naar de homepage of gebruik de navigatie.
            </p>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Terug naar Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
