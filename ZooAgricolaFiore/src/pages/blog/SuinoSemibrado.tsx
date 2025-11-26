import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import blogPigWelfare from "@/assets/blog-pig-welfare.jpg";
import blogOmega3 from "@/assets/blog-omega3.jpg";
import heroFarm from "@/assets/hero-farm.jpg";

const SuinoSemibrado = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[50vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={blogSustainable} alt="Suino Semibrado" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Perché scegliere il suino semibrado
            </h1>
            <p className="text-xl text-white/90">
              Qualità superiore, benessere animale e gusto autentico in un'unica scelta consapevole
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
                    <Link to="/blog/antibiotic-free-pork-carne-sana" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogPigWelfare} alt="Antibiotic Free" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Antibiotic-Free Pork</p>
                          <p className="text-xs opacity-75">15 Ago, 2025</p>
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
                        <img src={heroFarm} alt="Produzione Locale" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Produzione locale</p>
                          <p className="text-xs opacity-75">16 Giu, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/carni-suine-sostenibili-innovazione" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogSustainable} alt="Carni Sostenibili" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Carni sostenibili</p>
                          <p className="text-xs opacity-75">25 Set, 2025</p>
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
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">26 Giu, 2025</span>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-foreground mb-8">Perché scegliere il suino semibrado</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={blogSustainable} alt="Suino Semibrado" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il suino semibrado offre una carne dal sapore intenso e ben bilanciato negli acidi grassi, derivante da una vita all'aperto e una dieta naturale. Rispetto agli allevamenti intensivi, il benessere animale e la sostenibilità ambientale risultano nettamente superiori. Scegliere Fiore Brado significa sostenere una produzione di nicchia che valorizza la tradizione locale, la biodiversità e il territorio.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Quando si parla di suino semibrado, si entra in un universo radicato nella natura e nelle tradizioni, dove la qualità della carne nasce da una vita vissuta all'aperto e da un'alimentazione genuina. L'allevamento semibrado è molto più di una tecnica: è un sistema capace di fondere benessere animale, sostenibilità ambientale e sapori intensi, restituendo al territorio una vocazione agricola autentica.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Gli animali allevati allo stato semibrado crescono in spazi aperti, boschi o recinti erbosi, dove possono muoversi liberamente, esprimere comportamenti naturali come il grufolamento e la ricerca di cibo tra ghiande, erbe, radici e insetti. Questa condizione di vita, lontana da ambienti chiusi e sovraffollati, riduce lo stress, migliora la salute e abbassa la necessità di interventi sanitari, aumentando al contempo la qualità finale del prodotto.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  La dieta varia e naturale influenza profondamente le caratteristiche organolettiche e nutrizionali della carne. I suini semibradi sviluppano una carne particolarmente tenera, morbida e ben marezzata, grazie all'equilibrio tra attività fisica, muscolatura definita e lipidi distribuiti uniformemente. I tagli sono saporiti, succulenti e dall'aroma intenso, rispettando l'ambiente in cui gli animali hanno vissuto.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Sul piano nutrizionale, le carni semi brade presentano un profilo lipidico più salutare: grazie alla dieta naturale, il contenuto di grassi saturi risulta ridotto, mentre aumenta la percentuale di acidi grassi insaturi, in particolare omega‑3 e omega‑6, nutrienti essenziali per il benessere cardiovascolare. Studi evidenziano che nei suini semibradi la carne è più ricca di acidi grassi polinsaturi, rendendola più digeribile e funzionale rispetto a quella proveniente da allevamenti intensivi.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Questo sistema di allevamento ha anche un impatto positivo sugli ecosistemi locali: le deiezioni naturali fertilizzano il suolo, promuovendo biodiversità, controllo dell'erosione e salute dell'habitat boschivo. Inoltre, la minore dipendenza da mangimi industriali e la valorizzazione delle risorse aziendali locali limitano emissioni e costi, favorendo modelli agricoli sostenibili e circolari.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Scegliere la linea "Fiore Brado" significa abbracciare questa gamma di vantaggi: la carne proviene da animali allevati in recinti naturali, nutriti con foraggi autoprodotti ed elementi integrati nel rispetto delle risorse locali, garantendo carne di pregio, sostenibile e nutritiva. La trasparenza del processo allevamento-produzione si unisce a un'offerta distintiva, ideale per chi cerca autenticità, gusto, rispetto del benessere animale e la valorizzazione delle tradizioni.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Questa scelta non è solo gastronomica: è un atto di responsabilità verso il territorio e verso il futuro. Optare per un suino semibrado significa sostenere un modello agricolo sostenibile, preservare razze autoctone e rafforzare l'economia locale. Dietro ogni boccone c'è la traccia di un paesaggio, la memoria di un bosco, la storia di una terra vissuta secondo natura, e il gusto intenso e indelebile del suino semibrado.
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    "Vivi la differenza: suino semibrado, sapore autentico e rispetto per la natura."
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

export default SuinoSemibrado;
