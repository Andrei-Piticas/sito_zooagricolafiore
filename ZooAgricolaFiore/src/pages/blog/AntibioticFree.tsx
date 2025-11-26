import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogAntibioticFree from "@/assets/blog-antibiotic-free.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import blogPigWelfare from "@/assets/blog-pig-welfare.jpg";
import blogOmega3 from "@/assets/blog-omega3.jpg";

const AntibioticFree = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={blogAntibioticFree} alt="Antibiotic Free" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Antibiotic‑Free Pork: la rivoluzione della carne sana
            </h1>
            <p className="text-xl text-white/90">
              Agriculture Life
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
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">15 Ago, 2025</span>
              </div>
              <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">Antibiotic‑Free Pork: la rivoluzione della carne sana</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={blogAntibioticFree} alt="Antibiotic Free" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il maiale allevato "Antibiotic‑Free" rappresenta oggi una vera rivoluzione nel settore zootecnico europeo: la crescente consapevolezza tra i consumatori sulla resistenza agli antibiotici, unita a normative stringenti, ha fatto crescere del 9,9 % annuo il mercato della carne senza antibiotici, trasformando una nicchia in una nuova frontiera di qualità, trasparenza e sicurezza alimentare.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Nel cuore di questa evoluzione c'è la domanda crescente di carni più naturali e salutari. Secondo un rapporto del 2025, il mercato globale della carne senza antibiotici passerà da 167 a 184 miliardi di dollari nel giro di un anno, sostenuto da consumatori sempre più attenti alla qualità, alla sicurezza alimentare e alle sfide legate all'antibiotico-resistenza.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il concetto di "Antibiotic‑Free Pork" non significa soltanto eliminare i farmaci dalla dieta degli animali: è un impegno totale per il benessere suino, la biosicurezza, le pratiche di igiene avanzate e il rafforzamento del sistema immunitario attraverso una gestione attenta dell'allevamento. In Danimarca, ridurre l'uso di antibiotici ha comportato un miglioramento del benessere degli animali e un calo delle malattie, dimostrando che questo approccio non solo tutela la salute umana, ma rafforza quella dei maiali.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  I benefici si riflettono anche sul consumatore finale. Studi in Polonia e Va-ce hanno rilevato che oltre il 75 % degli acquirenti preferisce carne portante etichetta "raised without antibiotics", considerandola più sicura e disposta a pagarne il 10–20 % in più. Questa tendenza è particolarmente marcata tra donne e over 45, utenti attenti alla qualità, al benessere animale e all'origine tracciata delle carni, a dimostrazione del valore percepito del prodotto.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Sul piano normativo, l'Unione Europea ha imposto il divieto dell'uso di antibiotici a scopo promozionale già dal 2006, e molti Paesi come la Svezia, la Danimarca e i Paesi Bassi hanno introdotto regole ancora più rigide, limitando l'impiego solo a trattamenti individuali su prescrizione veterinaria. Questo ha portato a una drastica riduzione complessiva e a un controllo epidemiologico più efficace, con ricadute preventive sulla salute pubblica.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Nonostante le sfide – come la necessità di bio-sicurezza avanzata e l'aumento dei costi di allevamento – diversi allevamenti europei si sono adattati con successo, dimostrando che la carne senza antibiotici non è una moda, ma una scelta sistemica. L'approccio si integra perfettamente con modelli più sostenibili e attenti al benessere animale, creando un circolo virtuoso tra qualità, responsabilità e trasparenza.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Adottare il modello "Antibiotic‑Free Pork" significa scegliere una carne che riflette valori profondi: rispetto per gli animali, responsabilità verso l'ambiente e una salute pubblica migliore. In Europa, dove la domanda cresce a ritmi del 9–10 % all'anno, questa direzione segna il futuro dell'allevamento suino.
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    Scopri perché il maiale allevato senza antibiotici è una scelta di salute, sostenibilità e gusto.
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

export default AntibioticFree;
