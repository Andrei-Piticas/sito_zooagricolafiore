import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogProsciutto from "@/assets/blog-prosciutto.jpg";
import blogWinePairing from "@/assets/blog-wine-pairing.jpg";
import blogCooking from "@/assets/blog-cooking.jpg";
import blogPigWelfare from "@/assets/blog-pig-welfare.jpg";

const Prosciutto40 = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[50vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={blogProsciutto} alt="Prosciutto 4.0" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Prosciutto 4.0: Tradizione E Innovazione Verso Il 2025
            </h1>
            <p className="text-xl text-white/90">
              Dalla stagionatura naturale alle nuove certificazioni digitali dei DOP italiani.
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
                    <Link to="/blog/wine-ham-abbinamenti-prosciutto" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogWinePairing} alt="Wine & Ham" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Wine & Ham</p>
                          <p className="text-xs opacity-75">25 Lug, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/tagli-alternativi-maiale-cucina" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogCooking} alt="Tagli Alternativi" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Tagli alternativi</p>
                          <p className="text-xs opacity-75">5 Ott, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/nose-to-tail-usare-tutto-maiale" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogPigWelfare} alt="Nose to Tail" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Nose to Tail</p>
                          <p className="text-xs opacity-75">25 Ago, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/selezione-genetica-suinicoltura" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogProsciutto} alt="Selezione Genetica" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Selezione genetica</p>
                          <p className="text-xs opacity-75">5 Nov, 2025</p>
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
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">5 Set, 2025</span>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-foreground mb-8">Prosciutto 4.0: Tradizione E Innovazione Verso Il 2025</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={blogProsciutto} alt="Prosciutto 4.0" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Nel 2025 la "rivoluzione 4.0" del prosciutto italiano promette di unire l'arte della stagionatura naturale con sistemi digitali di controllo e certificazione: un connubio che tutela l'autenticità del prodotto, rassicura i consumatori e apre nuove opportunità di mercato per le Dop nazionali.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  I prosciuttifici più innovativi installano reti di termometri e igrometri digitali che sorvegliano temperatura e umidità in tempo reale, prevenendo sbalzi dannosi e ottimizzando l'energia impiegata nelle celle di stagionatura. In Emilia-Romagna la ricerca universitaria applica modelli di Industria 4.0 alle PMI della carne, con PLC e piattaforme cloud che registrano ogni variazione microclimatica e avvisano i mastri salatori in caso di anomalie.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Dal 2019 il Consorzio del Prosciutto di San Daniele applica un QR code univoco a ogni vaschetta: in tre anni le scansioni hanno superato le 35 000, segno di un consumatore sempre più curioso di verificare origine e qualità. Progetti pilota basati su blockchain permettono di mutare le tappe della filiera — allevamento, macellazione, salagione, stagionatura, garantendo sicurezza dei dati e contrasto alle frodi.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  La valorizzazione culturale passa anche per tour virtuali in "Meta-cantina": visitatori e buyer possono esplorare, via avatar, le sale di stagionatura guidati da assistenti digitali che raccontano le fasi produttive, un progetto già adottato dal Consorzio friulano. Ricercatori dell'Università di Udine hanno inoltre studiato come i digital twin, copie virtuali della cantina fisica, permettono di simulare scenari climatici estremi e calibrare con anticipo ventilazione e tempi di riposo, salvaguardando la qualità.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Secondo l'ultimo report ASSICA, le vendite di salumi italiani crescono del 9,5 % in valore, spinte da prodotti premium con forte storytelling digitale e garanzie di autenticità tracciata. Brand storici come Galbani puntano su etichette smart, riconducendo in un'unica piattaforma i dati di produzione e le campagne social, per dialogare con un pubblico di nativi digitali.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il "Prosciutto 4.0" non sostituisce la tradizione: la stagionatura resta un'arte custodita da mani esperte, ma sensoristica, blockchain e digital twin ne amplificano la trasparenza e la resilienza, garantendo al consumatore del 2025 un prodotto identitario, sicuro e totalmente tracciabile. Il passo successivo sarà l'integrazione di certificazioni digitali uniche per tutte le Dop, un codice che racchiude storia, territorio e innovazione in un semplice gesto di scansione.
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    Dalla cantina al Cloud: come sensori, blockchain e QR Code stanno cambiando il mondo dei prosciutti DOP.
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

export default Prosciutto40;
