import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFarm from "@/assets/hero-farm.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import blogOmega3 from "@/assets/blog-omega3.jpg";

const MangimeNaturale = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={heroFarm} alt="Mangime Naturale" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Mangime naturale e filiera circolare: come alimentare suini in modo sostenibile
            </h1>
            <p className="text-xl text-white/90">
              Dal campo aziendale alla stalla: perché il mangime autoprodotto fa la differenza in qualità, ambiente ed economia locale
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-forest-green text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Esplora tutta la nostra conoscenza</h3>
                  <div className="space-y-4 mt-6">
                    <Link to="/blog/carni-suine-sostenibili-innovazione" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogSustainable} alt="Carni Sostenibili" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Carni suine sostenibili</p>
                          <p className="text-xs opacity-75">25 Set, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/agricoltura-rigenerativa-suinicoltura" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={heroFarm} alt="Agricoltura Rigenerativa" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Agricoltura rigenerativa</p>
                          <p className="text-xs opacity-75">15 Set, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/omega3-cla-profilo-nutrizionale" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogOmega3} alt="Omega-3 e CLA" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Omega-3 e CLA</p>
                          <p className="text-xs opacity-75">15 Ott, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/benefici-produzione-locale" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogSustainable} alt="Produzione Locale" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Produzione locale</p>
                          <p className="text-xs opacity-75">16 Giu, 2025</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="bg-forest-green text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Eccellenza suina da quattro generazioni</h3>
                  <Link to="/contatti"><Button variant="secondary" className="w-full">Contattaci</Button></Link>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-9">
              <div className="mb-6">
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">25 Ott, 2025</span>
              </div>
              <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">Mangime naturale e filiera circolare</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={heroFarm} alt="Mangime Naturale" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    Dal campo aziendale alla stalla: perché il mangime autoprodotto fa la differenza in qualità, ambiente ed economia locale
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default MangimeNaturale;
