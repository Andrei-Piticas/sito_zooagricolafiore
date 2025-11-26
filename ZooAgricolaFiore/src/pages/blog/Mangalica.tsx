import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogStoriaSapori from "@/assets/blog-storia-sapori.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import blogGenetics from "@/assets/blog-genetics.jpg";
import blogPigWelfare from "@/assets/blog-pig-welfare.jpg";

const Mangalica = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={blogStoriaSapori} alt="Mangalica" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6 pt-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Mangalica: storia e sapori
            </h1>
            <p className="text-xl text-white/90">
              Dalla razza "maiale-pecora" ungherese a prelibatezze gastronomiche dal gusto unico
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
                    <Link to="/blog/rare-breed-pork-razze-antiche" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogSustainable} alt="Rare Breed" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Rare Breed Pork</p>
                          <p className="text-xs opacity-75">5 Ago, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/selezione-genetica-suinicoltura" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogGenetics} alt="Selezione Genetica" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Selezione genetica</p>
                          <p className="text-xs opacity-75">5 Nov, 2025</p>
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
                    <Link to="/blog/wine-ham-abbinamenti-prosciutto" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogStoriaSapori} alt="Wine & Ham" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Wine & Ham</p>
                          <p className="text-xs opacity-75">25 Lug, 2025</p>
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
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">16 Lug, 2025</span>
              </div>
              <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">Mangalica: storia e sapori</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={blogStoriaSapori} alt="Mangalica" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il Mangalica, noto come "maiale-pecora" per il suo fitto pelo riccio, nasce nella Mitteleuropa della metà dell'Ottocento ed è sopravvissuto all'estinzione grazie a progetti di recupero iniziati negli anni '90. È celebrato per la sua carne altamente marmorizzata, dal gusto intenso, con ricchezza di grassi insaturi e omega‑3, che lo rendono il "Kobe dei suini" e apprezzato da chef e buongustai di tutto il mondo.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il Mangalica, soprannominato "maiale-pecora" per il suo folto mantello riccio, è il frutto di un incrocio tra il carattere selvatico del cinghiale europeo e la tradizione zootecnica della Mitteleuropa. Le sue origini risalgono alla metà del XIX secolo: nasce in Ungheria e nei territori dell'Impero austro‑ungarico, grazie all'iniziativa di allevatori e nobili come l'Arciduca Giuseppe che, nel 1833, ottenne capi di razza serba Šumadinka dal principe Miloš Obrenović, dando vita alle varietà bionda, rossa e detta "di pancia di rondine".
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Per circa un secolo, fino alla metà del Novecento, il Mangalica fu la razza suina predominante nel territorio, valorizzato per la sua resistenza, qualità del lardo e adattabilità all'allevamento estensivo. Tuttavia, con l'avvento dell'allevamento intensivo e l'uso della refrigerazione, la razza rischiò seriamente di scomparire: negli anni '70 e '80 gli esemplari scesero sotto quota 200. Fu solo dagli anni '90, con progetti di recupero in Ungheria, Austria e persino Spagna (come quello di Monte Nevado), che la specie riprese vigore, arrivando oggi a contare circa 60.000 capi allevati in Europa.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Esteticamente, il Mangalica si distingue per il suo pelo lanoso, doppio strato di setole folte che in inverno lo protegge dal freddo, lasciando intravedere solo occhi e muso, mentre in estate la pelliccia si dirada ma conserva riccioli evidenti. Raggiunge facilmente i 200–300 kg da adulto, con spesse vene di grasso intramuscolare fino a 20 cm, che rendono la carne incredibilmente marezzata e saporita. I suini, robusti e a bassa fertilità, si adattano perfettamente all'allevamento all'aperto, anche in inverno, limitando malattie e stress.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il pregio del Mangalica si percepisce già a tavola. La carne è tra le più marmorizzate tra i suini, dal sapore intenso e dalla tenerezza unica, tanto che viene paragonata al famigerato "Kobe dei suini". Questo livello di marezzatura conferisce succulenza ai tagli e una persistenza gustativa ineguagliabile. Ma non è solo gusto: il profilo lipidico è estremamente ricco di grassi monoinsaturi e omega‑3, con una riduzione di grassi saturi del 12–16% e un incremento di grassi insaturi tra l'8 e il 10% rispetto ai suini moderni. Inoltre, contiene CLA, vitamine B e minerali come zinco e ferro, rendendolo un alimento nutriente e digeribile.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il Mangalica è quindi non solo una prelibatezza per il palato, ma un simbolo di sostenibilità e biodiversità. La sua carne, il lardo e i salumi derivati (dal téliszalámi al prosciutto stagionato) rappresentano eccellenze gastronomiche, spesso firmate da piccoli produttori artigianali in Italia e all'estero. La sua riscoperta contribuisce a preservare razze autoctone e a promuovere sistemi agroalimentari sostenibili, in cui il rispetto per l'animale e l'ambiente è prioritario.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Trovare Mangalica autentico significa verificare la razza (bionda, rossa o swallow‑belly), l'allevamento estensivo e la tracciabilità della filiera, spesso riconosciuta attraverso herd‑book e certificazioni genetiche. Avere sulla tavola una fetta di Mangalica significa custodire una storia antica fatta di nobiltà, estro zootecnico e sapori genuini, un piccolo lusso da condividere con gusto e consapevolezza.
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    "Mangalica: dove la lana diventa lardo pregiato."
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

export default Mangalica;
