import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import animalWelfare from "@/assets/animal-welfare.jpg";
import slowAging from "@/assets/slow-aging.jpg";
import familyRecipes from "@/assets/family-recipes.jpg";
import energySolar from "@/assets/energy-solar.jpg";
import kmZero from "@/assets/km-zero.jpg";
import innovation from "@/assets/innovation.jpg";

const WhatSetsUsApartSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-scroll for mobile only
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      badge: "Vita Serena",
      title: "Benessere Animale",
      description: "Spazi aperti, dieta naturale, vita serena: carne sana",
      image: animalWelfare,
      link: "/benessere-animale",
    },
    {
      badge: "Tempo Maestro",
      title: "Stagionatura lenta",
      description: "Tempo e cura esaltano aromi, morbidezza, gusto intenso.",
      image: slowAging,
      link: "/stagionatura-lenta",
    },
    {
      badge: "Sapori Veraci",
      title: "Ricette Familiari",
      description: "Sale, pepe, aglio: tradizione norcina, zero additivi.",
      image: familyRecipes,
      link: "/ricette-familiari",
    },
    {
      badge: "Energia Pulita",
      title: "Energia Solare",
      description: "Fotovoltaico: emissioni ridotte, allevamento quasi autosufficiente.",
      image: energySolar,
      link: "/energia-solare",
    },
    {
      badge: "Filiera corta",
      title: "Km Zero",
      description: "Materie prime locali, filiera corta, freschezza quotidiana garantita.",
      image: kmZero,
      link: "/km-zero",
    },
    {
      badge: "Miglioramento continuo",
      title: "Innovazione",
      description: "Come garantire una qualità continuativamente alta",
      image: innovation,
      link: "/innovazione",
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Header with navigation */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Cosa Ci Contraddistingue
            </h2>
            
            {/* Navigation Arrows - Desktop only */}
            <div className="hidden md:flex gap-3">
              <Button
                variant="hero"
                size="icon"
                className="rounded-full w-12 h-12"
                aria-label="Previous"
                onClick={() => setCurrentIndex((currentIndex - 1 + features.length) % features.length)}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="hero"
                size="icon"
                className="rounded-full w-12 h-12"
                aria-label="Next"
                onClick={() => setCurrentIndex((currentIndex + 1) % features.length)}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Cards Carousel */}
        <div className="overflow-hidden">
          {/* Desktop: 3 cards */}
          <div 
            className="hidden md:flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {[...features, ...features.slice(0, 3)].map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="bg-forest-green rounded-2xl p-6 text-white flex-shrink-0 hover:bg-forest-green/90 transition-colors cursor-pointer block"
              style={{ width: 'calc(33.333% - 16px)' }}
            >
              {/* Image */}
              <div className="mb-5 rounded-xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Badge */}
              <div className="inline-block mb-3">
                <div className="border-2 border-golden-yellow rounded-full px-4 py-1">
                  <span className="text-golden-yellow text-xs font-medium">
                    {feature.badge}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>

              {/* Separator */}
              <div className="w-full h-px bg-white/20 mb-3" />

              {/* Description */}
              <p className="text-white/85 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
          </div>

          {/* Mobile: 1 card at a time */}
          <div 
            className="md:hidden flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="bg-forest-green rounded-2xl p-6 text-white flex-shrink-0 hover:bg-forest-green/90 transition-colors cursor-pointer block w-full"
            >
              {/* Image */}
              <div className="mb-5 rounded-xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Badge */}
              <div className="inline-block mb-3">
                <div className="border-2 border-golden-yellow rounded-full px-4 py-1">
                  <span className="text-golden-yellow text-xs font-medium">
                    {feature.badge}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>

              {/* Separator */}
              <div className="w-full h-px bg-white/20 mb-3" />

              {/* Description */}
              <p className="text-white/85 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
          </div>
        </div>

        {/* Navigation Arrows - Mobile only (below cards) */}
        <div className="md:hidden flex justify-center gap-3 mt-6">
          <Button
            variant="hero"
            size="icon"
            className="rounded-full w-12 h-12"
            aria-label="Previous"
            onClick={() => setCurrentIndex((currentIndex - 1 + features.length) % features.length)}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="hero"
            size="icon"
            className="rounded-full w-12 h-12"
            aria-label="Next"
            onClick={() => setCurrentIndex((currentIndex + 1) % features.length)}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApartSection;
