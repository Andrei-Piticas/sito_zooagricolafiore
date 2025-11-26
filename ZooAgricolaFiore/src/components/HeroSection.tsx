import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFarm from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen lg:min-h-[120vh] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroFarm})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-block mb-8">
            <div className="border-2 border-golden-yellow rounded-full px-6 py-2">
              <span className="text-golden-yellow text-sm font-medium">
                Quattro generazioni dal 1956
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none">
            ZooAgricolaFiore
          </h1>

          {/* Description */}
          <p className="text-white text-lg md:text-xl mb-12 leading-relaxed max-w-xl">
            Dal benessere dei suini alla stagionatura perfetta, ogni fase è
            calibrata con passione artigiana e rigore: nasce così un'eccellenza
            che trasforma l'esperienza del gusto in autentico piacere.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/prodotti">
              <Button variant="hero" size="lg" className="rounded-full px-10 text-base">
                I nostri prodotti
              </Button>
            </Link>
            <Link to="/storia">
              <Button variant="hero-outline" size="lg" className="rounded-full px-10 text-base">
                La nostra storia
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
