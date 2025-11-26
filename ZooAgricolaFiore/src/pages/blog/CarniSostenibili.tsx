import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import heroFarm from "@/assets/hero-farm.jpg";
import blogPigWelfare from "@/assets/blog-pig-welfare.jpg";

const CarniSostenibili = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[50vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={blogSustainable} alt="Carni Sostenibili" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Carni suine sostenibili: innovazione e qualità nella filiera del maiale italiano
            </h1>
            <p className="text-xl text-white/90">
              Dall'allevamento responsabile alla trasformazione, cosa significa davvero "suino sostenibile"
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
                    <Link to="/blog/agricoltura-rigenerativa-suinicoltura" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={heroFarm} alt="Agricoltura Rigenerativa" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Agricoltura rigenerativa</p>
                          <p className="text-xs opacity-75">15 Set, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/antibiotic-free-pork-carne-sana" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogPigWelfare} alt="Antibiotic Free" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Antibiotic-Free Pork</p>
                          <p className="text-xs opacity-75">15 Ago, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/perche-scegliere-suino-semibrado" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogSustainable} alt="Suino Semibrado" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Suino semibrado</p>
                          <p className="text-xs opacity-75">26 Giu, 2025</p>
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
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">25 Set, 2025</span>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-foreground mb-8">Carni suine sostenibili: innovazione e qualità nella filiera del maiale italiano</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={blogSustainable} alt="Carni Sostenibili" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Una filiera suinicola sostenibile non è soltanto sinonimo di allevamento "naturale": significa ottimizzare le risorse, ridurre gli impatti ambientali, valorizzare le materie prime locali e garantire trasparenza dalla nascita dell'animale fino al piatto. Per chi sceglie carne suina italiana di qualità, capire cosa si cela dietro l'etichetta "sostenibile" è la chiave per un acquisto consapevole e gustoso.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Nel momento in cui la domanda di carne suina cresce anche in contesti gourmet, la sostenibilità emerge come elemento decisivo per differenziare l'offerta. In Italia, progetti come SUIS - Suinicoltura Italiana Sostenibile - puntano a rendere più sostenibili gli allevamenti tradizionali e le produzioni tutelate di qualità, realizzando un modello che coniuga innovazione e patrimonio genetico locale. Ma cosa significa concretamente "suino sostenibile"? Si tratta di un insieme di pratiche che abbracciano diversi ambiti: dal benessere degli animali, alla gestione delle deiezioni, dalla dieta all'interno dell'allevamento alle emissioni di gas serra, fino alla trasformazione e al trasporto.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Cominciamo dal benessere animale: allevamenti più etici prevedono spazi più ampi, accesso all'aperto o alla penombra, densità ridotte e dieta attentamente bilanciata. Ad esempio, alcune aziende italiane applicano standard tali che i suini devono pascolare all'aperto per almeno 12 mesi con densità massima di 10 animali per ettaro. Questo approccio si lega anche alla sostenibilità ambientale e alla qualità finale della carne: animali meno stressati producono carni più gustose, con tessuti meglio strutturati e aromi più complessi.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Sul piano ambientale, uno degli aspetti fondamentali è la gestione delle risorse: coltivare mangimi locali, ridurre le importazioni di proteine (come la soia) e trasformare i reflui in fertilizzante o biogas. Un esempio concreto è il progetto So‑ppeso: il suino pesante ma sostenibile che in Lombardia ha sperimentato colture alternative (orzo, sorgo, pisello) per alimentare suini, riducendo l'impatto ambientale complessivo della filiera. Nel contesto della suinicoltura italiana, migliorare l'efficienza nell'uso di acqua, energia e terra è indispensabile per rendere l'intero sistema realmente sostenibile.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  La trasparenza e la tracciabilità sono anch'esse pilastri della carne suina sostenibile. Sapere che l'animale è nato, allevato secondo standard, nutrito con alimenti controllati e trasformato in azienda con profilatura chiara significa offrire al consumatore finale un prodotto di cui fidarsi.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  In fase di trasformazione, invece, l'approccio sostenibile si manifesta nella scelta di macchinari efficienti, nella valorizzazione dei tagli meno richiesti, nel recupero degli scarti e nella scelta di packaging a basso impatto. Questo tipo di strategia permette di legare la qualità del prodotto alla filiera corta e all'autenticità, elementi sempre più ricercati dai consumatori.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Una filiera del maiale veramente sostenibile è più di un'etichetta: è un percorso consapevole che parte dal suino e arriva alla tavola con rispetto, qualità e identità. Ogni fetta diventa testimonianza di un allevamento attento, di terreni rigenerati, di risorse ottimizzate. In un tempo in cui i consumatori cercano significato oltre la carne, questa visione rappresenta non solo una risposta etica, ma anche un vantaggio competitivo.
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    Qualità, innovazione e sostenibilità: esploriamo cosa significa davvero "suino sostenibile" nella filiera italiana.
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

export default CarniSostenibili;
