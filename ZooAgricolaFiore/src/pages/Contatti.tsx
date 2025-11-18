import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import contattiHero from "@/assets/contatti-hero.jpg";
import butcherProfessional from "@/assets/butcher-professional.jpg";
import { Button } from "@/components/ui/button";

const Contatti = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-start">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contattiHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Contattaci
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            Inviaci le tue domande o questioni, e saremo da te il prima possibile!
          </p>
        </div>
      </section>

      {/* Contact Request Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-6 py-2 border-2 border-forest-green text-forest-green rounded-full text-sm font-medium">
                  Contattaci
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                Inviaci La Tua Richiesta
              </h2>
              
              <div>
                <a
                  href="https://wa.me/393123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-forest-green hover:text-forest-green/80 transition-colors"
                >
                  Scrivici su whatsapp
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={butcherProfessional}
                  alt="Contatta il nostro team"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default Contatti;
