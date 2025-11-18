import { Users, Grape } from "lucide-react";
import { Button } from "@/components/ui/button";
import familyVintage from "@/assets/family-vintage.jpg";
import familyModern from "@/assets/family-modern.jpg";

const IdentitySection = () => {
  return (
    <section className="bg-forest-green py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Vintage Family Photo */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={familyVintage}
                alt="Four generations of the Fiore family since 1956"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Description Text */}
            <p className="text-white/85 text-base leading-relaxed">
              Tra le colline di Orte coltiviamo cereali, alleviamo suini e
              stagioniamo a tempo lento, mescolando tradizione norcina e
              sperimentazione sostenibile.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                className="rounded-full px-8 text-base"
              >
                Scopri di più su di noi
              </Button>
              <Button
                variant="hero"
                size="lg"
                className="rounded-full px-8 text-base"
              >
                I nostri prodotti
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <div className="border-2 border-golden-yellow rounded-full px-6 py-2">
                <span className="text-golden-yellow text-sm font-medium">
                  Ci presentiamo
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              La Nostra Identità
            </h2>

            {/* Feature 1: Radici Familiari */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-forest-green border-2 border-golden-yellow flex items-center justify-center">
                  <Users className="w-6 h-6 text-golden-yellow" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  Radici Familiari
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  Dal 1956 la stessa famiglia, quattro generazioni: dal bisnonno
                  Fiore al nipote Daniele, un sapere tramandato senza
                  interruzioni.
                </p>
              </div>
            </div>

            {/* Feature 2: Terra di Tuscia */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-forest-green border-2 border-golden-yellow flex items-center justify-center">
                  <Grape className="w-6 h-6 text-golden-yellow" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  Terra di Tuscia
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  Alleviamo suini e coltiviamo cereali nella campagna viterbese
                  di Orte, un microclima unico che dona sapori autentici e un
                  forte senso di appartenenza al territorio.
                </p>
              </div>
            </div>

            {/* Modern Family Photo */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={familyModern}
                alt="Current Fiore family team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;
