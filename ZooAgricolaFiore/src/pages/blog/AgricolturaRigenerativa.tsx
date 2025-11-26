import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFarm from "@/assets/hero-farm.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import blogOmega3 from "@/assets/blog-omega3.jpg";

const AgricolturaRigenerativa = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={heroFarm} alt="Agricoltura Rigenerativa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6 pt-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Agricoltura rigenerativa e suinicoltura: quando il suolo ringrazia
            </h1>
            <p className="text-xl text-white/90">
              Come i maiali possono diventare alleati per la salute del terreno nelle fattorie italiane.
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
                    <Link to="/blog/mangime-naturale-filiera-circolare" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={heroFarm} alt="Mangime Naturale" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Mangime naturale</p>
                          <p className="text-xs opacity-75">25 Ott, 2025</p>
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
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">15 Set, 2025</span>
              </div>
              <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">Agricoltura rigenerativa e suinicoltura: quando il suolo ringrazia</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={heroFarm} alt="Agricoltura Rigenerativa" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Integrare i suini in sistemi di agricoltura rigenerativa significa restituire al terreno nutrienti preziosi, aumentare la sostanza organica e chiudere i cicli della fertilità: un approccio che riduce input esterni, migliora la resilienza climatica e valorizza il ruolo del maiale come alleato del suolo nelle fattorie italiane.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Rotational grazing – spostare i maiali su parcelle diverse a intervalli regolari – imita il movimento naturale degli animali selvatici e attiva i quattro processi ecosistemici (ciclo dell'acqua, mineralizzazione, biodiversità e flusso energetico) che definiscono l'agricoltura rigenerativa. La loro attività di grufolamento area il terreno, incorpora residui colturali e favorisce la germinazione di cover crops, aumentando la porosità e la capacità di trattenere acqua nelle prime settimane dopo il passaggio.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Le deiezioni dei suini apportano azoto, fosforo e micronutrienti in forma facilmente assimilabile, riducendo la necessità di concimi di sintesi; studi europei mostrano un incremento del carbonio organico del suolo tra 8 % e 14 % in rotazioni di cinque anni con suini all'aperto. L'integrazione con biochar prodotto da scarti agricoli e letame di maiale moltiplica i benefici: esperimenti italiani hanno rilevato +45 % di acido oleico nei suoli trattati, segno di maggiore attività microbica e stabilità della struttura.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  La strategia PAC 2023-27 sostiene l'allevamento estensivo integrato ai seminativi, premiando la riduzione degli input chimici e il sequestro di carbonio nei suoli. Linee guida europee per l'Animal Welfare 4.0 indicano che sistemi outdoor con suini migliorano la qualità del terreno e favoriscono paesaggi diversificati, condizione essenziale per la transizione agro-ecologica nazionale.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Esempi virtuosi non mancano: negli Appennini emiliano-romagnoli, ricerche dell'Università di Bologna testimoniano l'effetto positivo del pascolo boschivo dei suini su biodiversità fungina e cicli del carbonio. In Sicilia, il Nero dei Nebrodi si nutre di ghiande e castagne, distribuendo sostanza organica e propagando specie arboree autoctone attraverso la disseminazione indiretta.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Modelli simili sono inclusi nella Strategia italiana per la Biodiversità 2030, che punta ad ampliare del 25% le superfici a pratiche agro-ecologiche. Monitoraggi eseguiti in aziende biologiche europee mostrano che l'integrazione maiali-seminativi permette di ridurre i costi di fertilizzazione del 30%, grazie al riutilizzo del letame in loco e alla maggiore efficienza dei cicli nutritivi.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  La suinicoltura rigenerativa unisce antiche pratiche pastorali a moderne conoscenze sull'ecologia del suolo, trasformando il maiale da semplice produttore di carne a partner strategico per la salute dell'agro-ecosistema. Dalla rotazione controllata alla gestione integrata dei residui, queste tecniche consolidano la fertilità, arricchiscono la biodiversità e proiettano le fattorie italiane verso un futuro a basse emissioni e sprechi ridotti.
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    Dalla rotazione in campo al pascolo boschivo: i maiali come motore di fertilità e biodiversità.
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

export default AgricolturaRigenerativa;
