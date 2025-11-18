import { Button } from "@/components/ui/button";
import rotaryAward from "@/assets/rotary-award.jpg";
import storeOpening from "@/assets/store-opening.jpg";
import storeRestyling from "@/assets/store-restyling.jpg";
import tastingEvent from "@/assets/tasting-event.jpg";

const AwardsEventsSection = () => {
  const events = [
    {
      title: "Rotary Club Viterbo",
      image: rotaryAward,
    },
    {
      title: "Inaugurazione punto vendita",
      image: storeOpening,
    },
    {
      title: "Restyling punto vendita",
      image: storeRestyling,
    },
    {
      title: "Degustazione stalla San Sebastiano cantina Von Blumen",
      image: tastingEvent,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background via-amber-50/30 to-amber-100/50 py-24">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Badge and Title */}
          <div>
            <div className="inline-block mb-6">
              <div className="border-2 border-forest-green rounded-full px-6 py-2">
                <span className="text-forest-green text-sm font-medium">
                  Non solo allevamento
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Riconoscimenti Ed Eventi
            </h2>
          </div>

          {/* Right: Description */}
          <div className="flex items-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I nostri premi e gli eventi a cui partecipiamo dimostrano, in modo
              concreto, la qualità del nostro lavoro e la passione con cui lo
              portiamo avanti. Scopri i traguardi che rendono ZooAgricolaFiore
              un'eccellenza riconosciuta.
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-96"
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold leading-tight">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            variant="hero"
            size="lg"
            className="rounded-full px-12 text-base"
          >
            Scopri di più
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AwardsEventsSection;
