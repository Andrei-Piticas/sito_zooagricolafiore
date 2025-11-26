import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogGrilling from "@/assets/blog-grilling.jpg";
import blogCooking from "@/assets/blog-cooking.jpg";
import blogPigWelfare from "@/assets/blog-pig-welfare.jpg";
import blogWinePairing from "@/assets/blog-wine-pairing.jpg";

const GrigliatEstiva = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={blogGrilling} alt="Grigliata Estiva" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Guida definitiva alla grigliata estiva
            </h1>
            <p className="text-xl text-white/90">
              I migliori tagli di maiale e 10 ricette rapide per un ferragosto indimenticabile
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
                    <Link to="/blog/nose-to-tail-usare-tutto-maiale" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogPigWelfare} alt="Nose to Tail" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Nose to Tail</p>
                          <p className="text-xs opacity-75">25 Ago, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/wine-ham-abbinamenti-prosciutto" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogWinePairing} alt="Wine & Ham" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Wine & Ham</p>
                          <p className="text-xs opacity-75">25 Lug, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/prosciutto-40-tradizione-innovazione" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogGrilling} alt="Prosciutto 4.0" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Prosciutto 4.0</p>
                          <p className="text-xs opacity-75">5 Set, 2025</p>
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
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">6 Lug, 2025</span>
              </div>
              <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">Guida definitiva alla grigliata estiva</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={blogGrilling} alt="Grigliata Estiva" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  L'estate è la stagione ideale per grigliate all'aperto con famiglia e amici. La nostra guida propone i tagli di maiale più adatti alla brace (costine, braciole, pancetta, salsicce e pulled pork) e 10 ricette facili e gustose per trasformare il Ferragosto in un'esperienza culinaria indimenticabile, esaltando il sapore autentico delle carni di ZooAgricola Fiore.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  L'estate è il momento perfetto per riunire amici e famiglia intorno a una griglia fumante, dove profumi di carne e allegria si intrecciano in un'esperienza gastronomica memorabile. In questa guida scoprirai i tagli di maiale ideali per la brace, tecniche di cottura a prova di inesperti e 10 ricette rapide e gustose, perfette per un Ferragosto da ricordare, valorizzando al meglio le carni di ZooAgricola Fiore.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  I tagli da scegliere con cura sono le costine (ribs), che con la loro marezzatura richiedono una cottura lenta e marinature speziate; le braciole da carré, tenere e versatili, ideali sia salate che in salamoia; la pancetta e le salsicce, grasse, succose e cotte perfettamente su spiedini; infine il pulled pork (spalla o coppa), simbolo del barbecue, da sfilacciare dopo una lunga cottura indiretta.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Per ottenere una grigliata perfetta, il setup della brace è fondamentale: si raccomanda un'area calda per rosolatura e una zona indiretta per finire la cottura. Le braci devono essere ben ardenti, a temperatura tra 230 °C e 260 °C (450–500 °F) nella zona di rosolatura. Dopo una breve rosolatura, si sposta la carne nella zona a calore più dolce, coprendo la griglia per un finish succoso e uniforme. È essenziale monitorare la temperatura interna: 65–70 °C per costine e braciole, 63 °C con tre minuti di riposo per tagli magri come la lonza.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Ecco le 10 ricette che renderanno speciale il tuo Ferragosto: Costine BBQ al miele – brasate in brodo, poi glassate con miele e salsa barbecue per un finale dolce-affumicato. Spiedini misti – alterna maiale, pollo e agnello, marinati in olio e erbe per un tocco tipicamente umbro. Pulled pork classico – spalla con dry rub e aceto di mele, cotta lentamente fino a diventare sfilacciabile. Braciole in salamoia – succose e aromatizzate, grazie a un breve bagno salino prima della cottura. Salsicce e pancetta grigliate – irresistibili per il loro croccante grasso e sapore intenso. Ribs alla paprika – costine con dry rub speziato e lenta affumicatura. Braciole al rosmarino – marinatura semplice con olio, sale e rosmarino, che esalta la carne. Pulled pork BBQ box – pensato per condividere, per 4–8 persone, servito in pratici contenitori. Costine birra e senape – marinate e cotte fino a creare una crosticina croccante. Spiedini di polpettine e pancetta – rustici e facili, con polpettine avvolte nella pancetta per un contrasto perfetto.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Per elevare l'esperienza, ecco alcuni consigli extra: usa utensili robusti, un buon termometro da carne e pinze lunghe; mantieni le griglie pulite e oleate per evitare attaccamenti; e lascia riposare la carne 5–10 minuti prima di servire per preservare succosità. Accompagna il tutto con verdure grigliate, salse fresche e birre chiare o rosé per un abbinamento estivo perfetto.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Con pochi passaggi – scegliere tagli giusti, gestire bene il calore, rispettare i tempi – puoi trasformare un semplice Ferragosto in un'esperienza culinaria memorabile, esaltando la qualità genuina delle carni ZooAgricola Fiore. Buona grigliata e buon Ferragosto!
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    "In una grigliata perfetta, ogni taglio ha la sua voce: dal croccante al succoso, dalla marinatura dolce al profumo di erbe estive."
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

export default GrigliatEstiva;
