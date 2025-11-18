import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-forest-green text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🐷</span>
              </div>
              <h3 className="text-2xl font-bold">ZooAgricolaFiore</h3>
            </div>
            <p className="text-white/80 mb-6">
              L'eccellenza del suino per voi
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-golden-yellow flex items-center justify-center hover:bg-golden-yellow/90 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-forest-green" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-golden-yellow flex items-center justify-center hover:bg-golden-yellow/90 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-forest-green" />
              </a>
            </div>
          </div>

          {/* Su di noi */}
          <div>
            <h4 className="text-xl font-bold mb-4">Su di noi</h4>
            <nav className="space-y-2">
              <a
                href="#eventi"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Riconoscimenti e Eventi
              </a>
              <a
                href="#cosa-ci-contraddistingue"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Cosa ci contraddistingue
              </a>
              <a
                href="#blog"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Blog
              </a>
            </nav>
          </div>

          {/* La nostra realtà */}
          <div>
            <h4 className="text-xl font-bold mb-4">La nostra realtà</h4>
            <nav className="space-y-2">
              <a
                href="#prodotti"
                className="block text-white/80 hover:text-white transition-colors"
              >
                I nostri prodotti
              </a>
              <a
                href="#storia"
                className="block text-white/80 hover:text-white transition-colors"
              >
                La nostra storia
              </a>
              <a
                href="#recensioni"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Recensioni
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              Iscriviti alla newsletter
            </h4>
            <p className="text-white/80 mb-4">
              Rimani aggiornato delle prossime novità
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="indirizzo email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-forest-green border-white/30 text-white placeholder:text-white/50 focus:border-golden-yellow"
              />
              <Button
                type="submit"
                variant="hero"
                className="w-full rounded-full"
              >
                Iscriviti
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/60 text-sm text-center">
            Realizzato da NovaFlow s.r.l.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
