import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFarm from "@/assets/hero-farm.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import blogOmega3 from "@/assets/blog-omega3.jpg";
import blogPigWelfare from "@/assets/blog-pig-welfare.jpg";

const ProduzioneLocale = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={heroFarm} alt="Produzione Locale" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Benefici di scegliere una produzione locale come la nostra
            </h1>
            <p className="text-xl text-white/90">
              Freschezza, sostenibilità, economia del territorio: perché il chilometro zero fa la differenza
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
                    <Link to="/blog/mangime-naturale-filiera-circolare" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={heroFarm} alt="Mangime Naturale" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Mangime naturale</p>
                          <p className="text-xs opacity-75">25 Ott, 2025</p>
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
                    <Link to="/blog/omega3-cla-profilo-nutrizionale" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogOmega3} alt="Omega-3 e CLA" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Omega-3 e CLA</p>
                          <p className="text-xs opacity-75">15 Ott, 2025</p>
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
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">16 Giu, 2025</span>
              </div>
              <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">Benefici di scegliere una produzione locale come la nostra</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={heroFarm} alt="Produzione Locale" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Scegliere una produzione locale come quella di ZooAgricola Fiore significa portare in tavola prodotti freschissimi, nutrienti e stagionali, sostenendo allo stesso tempo l'economia del territorio e riducendo l'impatto ambientale legato al trasporto. Acquistare a chilometro zero vuol dire valorizzare le tradizioni agricole locali e instaurare un rapporto diretto con la filiera, per un consumo consapevole e responsabile.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Nel cuore della Tuscia, tra le dolci colline di Orte, ZooAgricola Fiore ha costruito la sua identità attorno a un concetto semplice ma profondo: portare sulla tavola dei clienti il meglio di ciò che il territorio sa offrire. Quattro generazioni – dal bisnonno Fiore al giovane Daniele – hanno percorso questa strada, trasformando una piccola realtà contadina in un'eccellenza rinomata per la qualità delle sue carni suine e salumi. La nostra storia inizia nel 1949 con l'arrivo della famiglia Magnaterra dal mare delle Marche, ma è nel 1956 che si piantano le radici del vero progetto: attenzione al km 0, allevamenti propri, ricette tradizionali e stagionature lente.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Scegliere una produzione locale come la nostra significa innanzitutto investire nella trasparenza: i suini nascono, crescono e vengono lavorati interamente in azienda, alimentati con mangimi coltivati direttamente nei nostri campi e allevati in condizioni di benessere – con spazi aperti, dieta naturale e bassa densità – secondo disciplinari rigorosi riconosciuti dai consorzi come Parma e San Daniele. Questo percorso, senza intermediazioni, non solo garantisce un controllo totale sulla qualità ma conferisce ai nostri clienti l'esperienza di un processo autentico, slegato dai ritmi accelerati della distribuzione industriale.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  L'importanza del concetto "filiera corta" non è teoria: è una scelta concreta che porta vantaggi tangibili. Ridurre i passaggi significa ridurre consumi energetici e costi logistici, tutto a beneficio del gusto, della freschezza e della salute. Ogni porchetta fragrante, ogni salame stagionato secondo la nostra ricetta – solo sale, pepe, aglio, finocchio e un goccio di vino – porta con sé l'essenza di una terra e di un lavoro generazionale.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il legame con il territorio si manifesta anche nella selezione delle razze: alleviamo suini "semibradi" e razze pregiate come il Mangalica – il celebre "maiale pecora" –, rinomato per la sua carne marezzata, ricca di omega 3 e omega 6, dal sapore inconfondibile e ricercata per le sue qualità nutrizionali. Un'offerta capace di soddisfare palati esigenti e di raccontare storie antiche, di rispetto per l'ambiente e per gli animali.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Ogni animale allevato da ZooAgricola Fiore cresce grazie a un'alimentazione interamente basata su mangimi naturali, coltivati direttamente nei nostri campi. Questo nutrimento di origine locale non solo assicura la massima trasparenza in tutto il ciclo produttivo, ma completa il concetto di economia circolare: le proteine per i suini derivano da cereali e legumi auto-prodotti, mentre ciò che esce dalla filiera – come le bucce o gli scarti vegetali – viene reinserito nei nostri sistemi agricoli come fertilizzante, evitando sprechi e valorizzando ogni risorsa.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Un'alimentazione 100% naturale significa una carne di qualità superiore: i suini nutrite della nostra farina, più ricchi in fibre e micronutrienti, mostrano un migliore stato di salute e benessere. Inoltre, la riduzione o totale eliminazione di farine proteiche "importate" come la soia riduce sensibilmente l'impatto ambientale della loro dieta, in coerenza con le migliori pratiche di sostenibilità nel settore.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Nella nostra visione, scegliere il locale significa anche rafforzare l'economia della Tuscia, sostenere le tradizioni e mantenere vivi quei saperi che rischiano di perdersi. La possibilità di incontrare direttamente il produttore, di chiedere consigli, di conoscere il sospeso, accende un rapporto di fiducia che va oltre il semplice acquisto. In un mondo di prodotti anonimi, i nostri clienti sanno chi siamo, dove siamo e come lavoriamo: questo è il vero valore del consumo consapevole.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Infine, il tempo: elemento fondamentale di ogni prodotto di qualità. Nella nostra stagionatura naturale e lenta non esistono scorciatoie: ogni salume aspira giorno dopo giorno ai sapori che meritano di raccontare un territorio e di rimanere impressi a lungo nella memoria. È la cura artigianale, l'assenza di conservanti o additivi, il ritmo della natura che, insieme, conferiscono a ogni prodotto un carattere unico.
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    "Mangiare locale non è solo gusto: è scelta etica, ambientale e di comunità."
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

export default ProduzioneLocale;
