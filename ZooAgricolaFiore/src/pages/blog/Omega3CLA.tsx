import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogOmega3 from "@/assets/blog-omega3.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import blogCooking from "@/assets/blog-cooking.jpg";
import blogPigWelfare from "@/assets/blog-pig-welfare.jpg";

const Omega3CLA = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={blogOmega3} alt="Omega-3 e CLA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Omega-3 e CLA: il profilo nutrizionale del maiale tradizionale
            </h1>
            <p className="text-xl text-white/90">
              Scienza e gusto di grassi "buoni" nelle carni marmorizzate dei suini pesanti italiani.
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
                    <Link to="/blog/perche-scegliere-suino-semibrado" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogSustainable} alt="Suino Semibrado" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Suino semibrado</p>
                          <p className="text-xs opacity-75">26 Giu, 2025</p>
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
                    <Link to="/blog/antibiotic-free-pork-carne-sana" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogPigWelfare} alt="Antibiotic Free" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Antibiotic-Free Pork</p>
                          <p className="text-xs opacity-75">15 Ago, 2025</p>
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
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">15 Ott, 2025</span>
              </div>
              <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">Omega-3 e CLA: il profilo nutrizionale del maiale tradizionale</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={blogOmega3} alt="Omega-3 e CLA" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Quando si parla di carni suine di alta qualità, non è solo il sapore a fare la differenza: entrano in gioco anche i grassi 'buoni', come gli omega-3 e gli acidi grassi coniugati (CLA), che nei suini allevati in modo tradizionale risultano più presenti e possono contribuire alla salute del consumatore oltre che a un profilo organolettico superiore.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Negli allevamenti convenzionali di suini industriali, la dieta e il sistema produttivo tendono a privilegiare cereali e farine proteiche che favoriscono la crescita rapida, ma risultano in un rapporto omega-6/omega-3 spesso troppo alto. Uno studio ha rilevato che nel maiale allevato intensivamente la ratio omega-6:omega-3 può arrivare anche a circa 14:1 o più.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Al contrario, quando l'alimentazione è integrata con foraggi, erbe di pascolo o mangimi selezionati, il rapporto migliora sensibilmente: in uno studio su maiali pascolati il gruppo senza cereali ha registrato una ratio di circa 5,15:1 rispetto al gruppo "tradizionale" da supermercato con 29,40:1. Questo miglioramento riflette un maggior contenuto di omega-3 nel grasso intramuscolare, che è associato a minori rischi cardiovascolari, riduzione dell'infiammazione e un comportamento metabolico più favorevole.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Ma non sono solo gli omega-3 a fare la differenza: anche gli acidi grassi coniugati, detti CLA (Conjugated Linoleic Acid), pur essendo più noti nelle carni e nei latte di ruminanti, sono oggetto di studio anche nella suinicoltura. Pur con livelli inferiori rispetto a bovini e ovini, la ricerca evidenzia che modificando la dieta del maiale – introducendo oli ricchi di ALA (acido alfa-linolenico) o fonti vegetali selezionate – è possibile aumentare il contenuto di omega-3 e migliorare la composizione lipidica complessiva.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  In particolare, l'impiego di mangimi contenenti lino o oli vegetali ha permesso incrementi del 50-60% degli omega-3 nelle carni di maiale in alcuni studi sperimentali. Per l'allevatore e per il consumatore attento, questo significa che scegliere suini allevati con più attenzione dietetica e tempi di crescita maggiori può tradursi in una carne dal profilo nutrizionale davvero migliore: una marezzatura più evidente, un grasso più morbido e distribuito, e una sensibilmente migliorata presenza di grassi insaturi.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Naturalmente, la trasformazione, la stagionatura e la lavorazione del suino pesante influenzano ulteriormente queste caratteristiche: il grasso intramuscolare sciogliendosi durante la cottura libera gli omega-3 e contribuisce alla succosità e al sapore. Parallelamente, una densità maggiore di grasso buono migliora la marezzatura, la tenerezza e la sensazione al palato — aspetti che chef e intenditori riconoscono immediatamente.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il profilo nutrizionale del maiale tradizionale si sta evolvendo: grazie a pratiche di allevamento più attente e a una dieta che privilegia ingredienti naturali, la carne suina può diventare una scelta consapevole anche sul piano dei grassi "buoni". Scegliere carni con marezzatura, grasso ben distribuito e un profilo lipidico equilibrato significa unire gusto autentico, qualità artigianale e benefici per la salute.
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    I benefici dei grassi "buoni" nelle carni marmorizzate dei suini pesanti italiani: omega-3, CLA e gusto autentico.
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

export default Omega3CLA;
