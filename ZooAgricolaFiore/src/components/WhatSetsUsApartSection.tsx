import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import animalWelfare from "@/assets/animal-welfare.jpg";
import slowAging from "@/assets/slow-aging.jpg";
import familyRecipes from "@/assets/family-recipes.jpg";

const WhatSetsUsApartSection = () => {
  const features = [
    {
      badge: "Vita Serena",
      title: "Benessere Animale",
      description: "Spazi aperti, dieta naturale, vita serena: carne sana",
      image: animalWelfare,
    },
    {
      badge: "Tempo Maestro",
      title: "Stagionatura lenta",
      description: "Tempo e cura esaltano aromi, morbidezza, gusto intenso.",
      image: slowAging,
    },
    {
      badge: "Sapori Veraci",
      title: "Ricette Familiari",
      description: "Sale, pepe, aglio: tradizione norcina, zero additivi.",
      image: familyRecipes,
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Cosa Ci Contraddistingue
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <Button
              variant="hero"
              size="icon"
              className="rounded-full w-12 h-12"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="hero"
              size="icon"
              className="rounded-full w-12 h-12"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-forest-green rounded-2xl p-6 text-white"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApartSection;
