import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import productsHero from "@/assets/products-hero.jpg";
import pigsNature from "@/assets/pigs-nature.jpg";
import blackPigs from "@/assets/black-pigs.jpg";
import animalWelfare from "@/assets/animal-welfare.jpg";

const Prodotti = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-start">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${productsHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            I Nostri Prodotti
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl">
            Prima di mostrarti l'assortimento di prelibatezze fresche, stagionate e salumi, presentiamo le tre linee del nostro allevamento.
          </p>
        </div>
      </section>

      {/* Product Lines Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Classic Line */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img
                  src={animalWelfare}
                  alt="Produzione Fiore Classic"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Produzione Fiore Classic
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Linea allevata indoor a bassa densità con dieta controllata conforme ai disciplinari Parma/ San Daniele
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="rounded-full px-8 bg-[#2d5016] hover:bg-[#3d6020] text-white"
              >
                Scopri di Più: Classic
              </Button>
            </div>

            {/* Brado Line */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img
                  src={pigsNature}
                  alt="Produzione Fiore Brado"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Produzione Fiore Brado
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Linea esclusiva dell'azienda: suini allevati allo stato semi brado fra querce, ghiande e piscine naturali; movimento costante, stress minimo e aromi delicati
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="rounded-full px-8 bg-[#2d5016] hover:bg-[#3d6020] text-white"
              >
                Scopri di più: Brado
              </Button>
            </div>

            {/* Mangalica Line */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img
                  src={blackPigs}
                  alt="Produzione Fiore Mangalica"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Produzione Fiore Mangalica
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Antica razza ungherese "maiale pecora", famosa come "<em>Kobe of pork</em>" per la marezzatura elevata, il grasso ricco di omega-3/6 e il gusto profondo
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="rounded-full px-8 bg-[#2d5016] hover:bg-[#3d6020] text-white"
              >
                Scopri di Più: Mangalica
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default Prodotti;
