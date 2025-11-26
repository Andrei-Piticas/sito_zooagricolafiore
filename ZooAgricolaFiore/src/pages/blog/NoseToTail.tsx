import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogPigWelfare from "@/assets/blog-pig-welfare.jpg";
import blogCooking from "@/assets/blog-cooking.jpg";
import blogGrilling from "@/assets/blog-grilling.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";

const NoseToTail = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={blogPigWelfare} alt="Nose to Tail" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Dal naso alla coda: l'arte di usare tutto il maiale e dire addio agli sprechi
            </h1>
            <p className="text-xl text-white/90">
              Tecniche creative, sostenibilità e nuovi sapori dalla testa alla coda
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
                    <Link to="/blog/tagli-alternativi-maiale-cucina" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogCooking} alt="Tagli Alternativi" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Tagli alternativi</p>
                          <p className="text-xs opacity-75">5 Ott, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/guida-grigliata-estiva" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogGrilling} alt="Grigliata Estiva" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Grigliata estiva</p>
                          <p className="text-xs opacity-75">6 Lug, 2025</p>
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
                    <Link to="/blog/perche-scegliere-suino-semibrado" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogPigWelfare} alt="Suino Semibrado" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Suino semibrado</p>
                          <p className="text-xs opacity-75">26 Giu, 2025</p>
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
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">25 Ago, 2025</span>
              </div>
              <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">Dal naso alla coda: l'arte di usare tutto il maiale e dire addio agli sprechi</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={blogPigWelfare} alt="Nose to Tail" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  "Nose‑to‑Tail" è molto più di una tendenza culinaria: è un modello etico e sostenibile che trasforma il maiale in un intero tesoro alimentare, valorizzando ogni parte, dalla testa alla coda. Questo approccio riduce gli sprechi, ottimizza risorse e costi, e offre ai consumatori sapori dimenticati e nutrizionalmente densi – una scelta intelligente e responsabile che sta conquistando chef e famiglie in tutta Europa.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  La filosofia nose‑to‑tail invita a riscoprire tagli come guance, orecchie, piedi, zampe, lingua e cartilagini, spesso ignorate dalle cucine convenzionali. Invece di sfruttare solo le parti più pregiate, questo approccio recupera tutto: ossa, grasso, interiora diventano ingredienti preziosi per brodi ricchi, ragù saporiti o piatti regionali come la cassoeula lombarda, preparata con costine, cotenna e zampetti. Come la coppa e la Trippa o i fagioli con le cotiche.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il risultato è un'alimentazione più sana — gli organi sono ricchi di vitamine, minerali e proteine — e una grande riduzione degli scarti: basti pensare che fino a un terzo del peso di un animale finisce in discarica nella filiera industriale. Per agriturismi e piccole aziende artigianali, il nose‑to‑tail diventa strategia sostenibile e vantaggio competitivo: acquistare carcasse intere riduce i costi per kg e incentiva la creatività in cucina, trasformando tagli economici in piatti gourmet luoghi dove il rispetto del maiale diventa visibile nel piatto.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Chef e norcini moderni interpretano ricette della tradizione con nuovi linguaggi, dando valore culturale ai tagli poveri: guance brasate, zampetti croccanti, fegato in pastelle, punta di petto affumicata. Questa cultura alimentare contemporanea nasce proprio dalla riscoperta di tecniche e sapori che da sempre hanno caratterizzato le cucine rurali, ma che solo oggi trovano uno spazio riconosciuto nelle tavole urbane.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  In effetti, l'approccio nose‑to‑tail risponde a esigenze moderne: consumatori attenti all'impatto ambientale e alla trasparenza chiedono piatti zero‑waste, tagli alternativi per una qualità consapevole, e un legame con il territorio. Secondo recenti ricerche, il 32 % dei Millennials privilegia soluzioni sostenibili, e il 66 % è disposto a spendere di più per offerte etiche e sostenibili.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Adottare il nose‑to‑tail non significa solo recuperare i sapori autentici, ma anche promuovere un modello alimentare più giusto, rispettoso e rigenerativo. Utilizzare ogni parte del maiale riduce rifiuti, alimenta la creatività gastronomica e trasforma un animale intero in valore, gusto e nutrimento. Prossimamente nel blog ti guideremo tra tecniche di cucina nose‑to‑tail, ricette regionali e consigli per iniziare a casa o in cucina professionale.
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    Scopri come l'approccio nose-to-tail trasforma ogni parte del maiale in gusto, sostenibilità e creatività.
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

export default NoseToTail;
