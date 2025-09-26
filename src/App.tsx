import { TooltipProvider } from '@/components/ui/ui-components';
import { Toaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Membership from './pages/Membership';
import Competition from './pages/Competition';
import CompetitieIntern from './pages/competitie/Intern';
import CompetitieExtern from './pages/competitie/Extern';
import CompetitieJeugd from './pages/competitie/Jeugd';
import CompetitiePrijzen from './pages/competitie/Prijzen';
import Contact from './pages/Contact';
import PrivacyBeleid from './pages/PrivacyBeleid';
import AlgemeneVoorwaarden from './pages/AlgemeneVoorwaarden';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

// Get base path from environment or import.meta
const getBasePath = () => {
  // In development, use root path
  if (import.meta.env.DEV) {
    return '/';
  }
  // In production, use the configured base
  return import.meta.env.BASE_URL || '/';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename={getBasePath()}>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/over-ons" element={<About />} />
              <Route path="/activiteiten" element={<Activities />} />
              <Route path="/lid-worden" element={<Membership />} />
              <Route path="/competitie" element={<Competition />} />
              <Route path="/competitie/intern" element={<CompetitieIntern />} />
              <Route path="/competitie/extern" element={<CompetitieExtern />} />
              <Route path="/competitie/jeugd" element={<CompetitieJeugd />} />
              <Route path="/competitie/prijzen" element={<CompetitiePrijzen />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-beleid" element={<PrivacyBeleid />} />
              <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
