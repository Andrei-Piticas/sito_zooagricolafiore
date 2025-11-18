import { Phone, Mail, MapPin, Instagram, Calendar } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <section className="bg-golden-yellow py-20 relative overflow-hidden">
      {/* Decorative pig pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-32 h-32 border-4 border-black rounded-full" />
        <div className="absolute top-40 right-32 w-24 h-24 border-4 border-black rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-black rounded-full" />
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
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Contattaci:
              </h3>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-forest-green flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-golden-yellow" />
                </div>
                <div className="flex-1">
                  <a
                    href="tel:+393896749889"
                    className="text-xl font-semibold text-foreground hover:text-forest-green transition-colors block mb-1"
                  >
                    +39 389 674 9889
                  </a>
                  <a
                    href="mailto:Zooagricolafiore@alice.it"
                    className="text-lg text-foreground hover:text-forest-green transition-colors block mb-1"
                  >
                    Zooagricolafiore@alice.it
                  </a>
                  <a
                    href="https://wa.me/393896749889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-forest-green font-medium hover:underline"
                  >
                    Scrivici su whatsapp
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Posizione:
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-forest-green flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-golden-yellow" />
                </div>
                <div className="flex-1">
                  <a
                    href="https://maps.google.com/?q=Vocabolo+mario+villani+6+01028+Orte+VT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-foreground hover:text-forest-green transition-colors"
                  >
                    Vocabolo mario villani, 6, 01028 Orte VT
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Social Media */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Seguici sui social
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-forest-green flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-8 h-8 text-golden-yellow" />
                </div>
                <div className="flex-1 space-y-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-foreground hover:text-forest-green transition-colors block"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-foreground hover:text-forest-green transition-colors block"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Orario estivo:
              </h3>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-forest-green flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-golden-yellow" />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-foreground">
                    Giovedì 17-20; Venerdì 9-13 e 17-20; Sabato 9-13
                  </p>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-foreground mb-6">
                Orario invernale:
              </h3>
              <p className="text-lg text-foreground ml-20">
                Giovedì 16-19; Venerdì 9-13 e 16-19; Sabato: 9-13
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
