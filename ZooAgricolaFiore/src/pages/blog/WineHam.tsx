import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogWinePairing from "@/assets/blog-wine-pairing.jpg";
import blogProsciutto from "@/assets/blog-prosciutto.jpg";
import blogCooking from "@/assets/blog-cooking.jpg";
import blogGrilling from "@/assets/blog-grilling.jpg";

const WineHam = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img src={blogWinePairing} alt="Wine and Ham" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Wine & Ham: Guida Agli Abbinamenti Perfetti Con Il Prosciutto Artigianale
            </h1>
            <p className="text-xl text-white/90">
              Dal Chenin Blanc al rosato umbro, i calici che esaltano sapidità e dolcezza del crudo
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
                    <Link to="/blog/prosciutto-40-tradizione-innovazione" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogProsciutto} alt="Prosciutto 4.0" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Prosciutto 4.0</p>
                          <p className="text-xs opacity-75">5 Set, 2025</p>
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
                    <Link to="/blog/guida-grigliata-estiva" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogGrilling} alt="Grigliata Estiva" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Grigliata estiva</p>
                          <p className="text-xs opacity-75">6 Lug, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/mangalica-storia-sapori" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogWinePairing} alt="Mangalica" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Mangalica</p>
                          <p className="text-xs opacity-75">16 Lug, 2025</p>
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
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">25 Lug, 2025</span>
              </div>
              <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">Wine & Ham: Guida Agli Abbinamenti Perfetti</h2>
              <div className="rounded-2xl overflow-hidden mb-8">
                <img src={blogWinePairing} alt="Wine and Ham" className="w-full h-[600px] object-cover" />
              </div>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Prosciutto crudo e vino parlano la stessa lingua sensoriale: la sapidità, l'umami e la dolcezza naturale del grasso trovano equilibrio in vini freschi, acidi o leggermente amabili che detergono il palato e amplificano gli aromi: è qui che nascono gli abbinamenti "wine & ham", un viaggio gustativo fra terroir, bollicine e vitigni autoctoni.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Il prosciutto ha grasso scioglievole, umami e sale: l'acidità e l'effervescenza del vino tagliano la grassezza, mentre residui zuccherini minimi o note fruttate bilanciano il sale e l'amaro di eventuali stagionature lunghe. Quando aumenta la dolcezza del crudo (stagionature oltre 20 mesi), serve un vino con corpo medio e acidità marcata: da qui la scelta di bianchi nervosi, rosati o rossi delicati con tannino lieve.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  I bianchi "affilati": freschezza e frutto. Chenin Blanc (Loira o Sud Africa) – leggermente off-dry, regala pera, miele e fumo che abbracciano il lardo dolce del crudo senza coprire gli aromi. Verdicchio dei Castelli di Jesi – note di mandorla, agrume e spiccata acidità, perfette con i grassi delicati del Prosciutto di Parma. Dry Riesling – mineralità e lime per pulire la bocca dopo ogni fetta; ideale con crudi sapidi o affumicati.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Bollicine e frizzanti: l'arma segreta. Le bollicine svolgono il "lavoro" della lama: CO₂ fine, acidità e talvolta zuccheri residui impercettibili eliminano la patina grassa e rinfrescano. TrentoDOC o Franciacorta Rosé – fragolina, agrume, lieviti e spuma cremosa: provare con culaccia o prosciutto e fichi. Lambrusco di Sorbara ancestrale – acidità tagliente, frutto rosso croccante, pressione contenuta: tradizionale compagno del Prosciutto di Parma in Emilia-Romagna. Prosecco Brut – la bollicina continua, con note di mela verde, addolcisce il sale e amplifica la dolcezza del crudo dolce.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Rosati mediterranei: un ponte aromatico. Un rosato strutturato porta frutto rosso, tannino leggero e salinità che si sposa con la carne rosa del prosciutto. Rosato umbro da Sagrantino o Ciliegiolo – ciliegia, ribes, buona spalla acida, perfetto con crudi leggermente stagionati o serviti con melone. Chiaretto del Garda – lampone e agrumi; la sua sapidità naturale esalta l'anima del prosciutto.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Rossi leggeri e aromi delicati. Pinot Noir (Borgogna o Alto Adige) – acidità vivace, tannino setoso e note di fragola; regala equilibrio senza coprire. Sangiovese giovane o Chianti – ciliegia, violetta e tannino fine che pulisce il palato; ottimo con crudi più sapidi o in panini gourmet.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Fuori dai sentieri battuti. Fino Sherry – secco, salino, nocciolato: un abbinamento "terroir-gemello" alle note salate del prosciutto; la flor amplifica l'umami. Lambrusco rosa ancestrale – quando si vuole un frizzante rosé secco e meno alcolico: l'acidità bilancia, il frutto sostiene dolcezza e sale.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Un ottimo abbinamento nasce dall'equilibrio fra grasso, sale e acidità: Chenin Blanc per la dolcezza, Lambrusco per freschezza regionale, rosato umbro per un twist mediterraneo, Pinot Noir per eleganza e Fino Sherry per sorprendere con note secche e saline. Scegliendo il calice giusto, ogni fetta di prosciutto artigianale diventa un viaggio sensoriale che onora la tradizione e invita alla scoperta.
                </p>
                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    Dalla freschezza del Chenin Blanc all'eleganza del rosato umbro: i vini che esaltano sapidità, dolcezza e profumi del prosciutto crudo.
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

export default WineHam;
