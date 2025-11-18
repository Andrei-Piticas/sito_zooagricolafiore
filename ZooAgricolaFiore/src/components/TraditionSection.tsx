import barrels from "@/assets/barrels.jpg";
import salami from "@/assets/salami.jpg";
import blackPigs from "@/assets/black-pigs.jpg";
import pigsNature from "@/assets/pigs-nature.jpg";

const TraditionSection = () => {
  const circleImages = [
    { src: barrels, alt: "Traditional barrel aging process" },
    { src: salami, alt: "Artisan salami and sausages" },
    { src: blackPigs, alt: "Heritage breed black pigs" },
  ];

  return (
    <section className="relative bg-golden-yellow py-24 overflow-hidden">
      {/* Decorative pig pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-32 h-32 border-4 border-black rounded-full" />
        <div className="absolute top-40 right-32 w-24 h-24 border-4 border-black rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-black rounded-full" />
        <div className="absolute bottom-40 right-20 w-28 h-28 border-4 border-black rounded-full" />
        {/* Pig face pattern */}
        <svg className="absolute top-1/3 right-1/4 w-64 h-64 opacity-50" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="black" strokeWidth="3" />
          <circle cx="70" cy="80" r="8" fill="black" />
          <circle cx="130" cy="80" r="8" fill="black" />
          <ellipse cx="100" cy="120" rx="40" ry="30" fill="none" stroke="black" strokeWidth="3" />
          <circle cx="90" cy="115" r="6" fill="black" />
          <circle cx="110" cy="115" r="6" fill="black" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side content */}
          <div className="space-y-12">
            {/* Three circular images */}
            <div className="flex gap-3 justify-start">
              {circleImages.map((image, index) => (
                <div
                  key={index}
                  className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Text content */}
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Ogni dettaglio è un impegno per il benessere dei nostri suini
              </h2>
            </div>
          </div>

          {/* Right side content */}
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-black">
              Natura, tradizione e famiglia
            </h3>

            {/* Large image of pigs in nature */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-black">
              <img
                src={pigsNature}
                alt="Pigs in natural environment"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionSection;
