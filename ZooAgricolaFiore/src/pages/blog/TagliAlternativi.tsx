import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogCooking from "@/assets/blog-cooking.jpg";
import blogPigWelfare from "@/assets/blog-pig-welfare.jpg";
import blogGrilling from "@/assets/blog-grilling.jpg";
import blogWinePairing from "@/assets/blog-wine-pairing.jpg";

const TagliAlternativi = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={blogCooking} alt="Tagli Alternativi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Il mondo del maiale in cucina: tagli alternativi e piatti che sorprendono
            </h1>
            <p className="text-xl text-white/90">
              Guance, zampetti, orecchie: riscopriamo i sapori dimenticati del suino.
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
                    <Link to="/blog/nose-to-tail-usare-tutto-maiale" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogPigWelfare} alt="Nose to Tail" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Nose to Tail</p>
                          <p className="text-xs opacity-75">25 Ago, 2025</p>
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
                        <img src={blogCooking} alt="Prosciutto 4.0" className="w-16 h-16 object-cover rounded-lg" />
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
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">5 Ott, 2025</span>
              </div>
              <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">Il mondo del maiale in cucina: tagli alternativi e piatti che sorprendono</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={blogCooking} alt="Tagli Alternativi" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Nel panorama della cucina saporita e consapevole, riscoprire i "tagli poveri" del maiale significa aprire una porta sulla creatività, sulla sostenibilità e su piatti che raccontano storia e territorio. Le guance, i zampetti, le orecchie e altri ritagli spesso ignorati sono vere miniere di sapore: quando trattati con cura, diventano protagonisti di preparazioni gourmet capaci di sorprendere il palato.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Quando si pensa al maiale in cucina, i tagli più celebri — lonza, braciola, costata — vengono subito alla mente. Tuttavia, esiste un intero universo di carne e tessuto connettivo che merita attenzione: le guance (o "jowl"), i zampetti o trotters, le orecchie e persino la cotenna diventano strumenti culinari per chef e appassionati che vogliono andare oltre il classico. Nei piatti tradizionali italiani queste parti sono state per lungo tempo valorizzate — pensiamo alla "cassoeula" lombarda.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Le guance di maiale, ad esempio, sono famose nella cucina romana sotto forma di "guanciale": un salume trattato e stagionato ricavato dalla jowl che dona morbidezza, marezzatura e un profilo di grasso che si scioglie in bocca. Ma anche fresche, le guance ben brasate diventano un secondo sontuoso: la combinazione di tessuto connettivo e grasso crea una consistenza burrosa e un aroma intenso.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  I zampetti o trotters di maiale, invece, sono simbolo della cucina che non spreca. Ricchi di collagene, pelle, tendini, richiedono lunghe cotture per trasformarsi in consistenze gelatinose e sapori profondi. In Italia un esempio è lo "zampone" dell'Emilia-Romagna.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Le orecchie di maiale — spesso tagliate a strisce o sottili, lessate o croccanti — sono protagoniste della cassoeula, dove si accostano a parti più nobili come costine e cotenna. Il loro utilizzo si estende anche in cucina creativa per snack gourmet o "tacos" di orecchia croccante.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Questi tagli alternativi sono potenti non solo dal punto di vista gastronomico, ma anche sotto il profilo della sostenibilità: valorizzare ogni parte dell'animale riduce gli scarti, rende l'allevamento più efficiente e premia l'intera filiera artigianale.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Riscoprire il mondo del maiale in cucina significa intraprendere un viaggio fra sapori autentici, tecniche dimenticate e scelte consapevoli. Tagli alternativi come guance, zampetti e orecchie rappresentano un'opportunità per elevare la qualità, celebrare la filiera artigianale e dare valore completo all'animale.
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    Guance, zampetti, orecchie e altri tagli dimenticati: riscopriamo il maiale nella sua interezza, tra tradizione, gusto e creatività.
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

export default TagliAlternativi;
