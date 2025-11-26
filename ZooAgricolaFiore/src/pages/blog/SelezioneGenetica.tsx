import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogGenetics from "@/assets/blog-genetics.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import blogStoriaSapori from "@/assets/blog-storia-sapori.jpg";
import heroFarm from "@/assets/hero-farm.jpg";

const SelezioneGenetica = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img
            src={blogGenetics}
            alt="Selezione Genetica"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Investire nel futuro: come la selezione genetica sta cambiando la suinicoltura
            </h1>
            <p className="text-xl text-white/90">
              Heritage breeds, performance e nuovi mercati nel breeding europeo al 2033.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Sidebar */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-forest-green text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Esplora tutta la nostra conoscenza
                  </h3>
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
                    <Link to="/blog/mangalica-storia-sapori" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogStoriaSapori} alt="Mangalica" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Mangalica: storia e sapori</p>
                          <p className="text-xs opacity-75">16 Lug, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/agricoltura-rigenerativa-suinicoltura" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={heroFarm} alt="Agricoltura Rigenerativa" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Agricoltura rigenerativa</p>
                          <p className="text-xs opacity-75">15 Set, 2025</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/blog/carni-suine-sostenibili-innovazione" className="block group">
                      <div className="flex gap-3 items-start">
                        <img src={blogSustainable} alt="Carni Sostenibili" className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold group-hover:text-golden-yellow transition-colors">Carni suine sostenibili</p>
                          <p className="text-xs opacity-75">25 Set, 2025</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="bg-forest-green text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Eccellenza suina da quattro generazioni
                  </h3>
                  <Link to="/contatti">
                    <Button variant="secondary" className="w-full">
                      Contattaci
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-9">
              <div className="mb-6">
                <span className="inline-block bg-golden-yellow/15 text-golden-yellow px-4 py-2 rounded-full text-sm font-medium">
                  5 Nov, 2025
                </span>
              </div>

              <h2 className="text-lg md:text-3xl font-bold text-foreground mb-8">
                Investire Nel Futuro: Come La Selezione Genetica Sta Cambiando La Suinicoltura
              </h2>

              <div className="rounded-2xl overflow-hidden mb-8">
                <img
                  src={blogGenetics}
                  alt="Selezione Genetica"
                  className="w-full h-[600px] object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Nel cuore della suinicoltura del futuro ci sono geni, performance e sostenibilità: la selezione genetica avanzata sta ridefinendo le razze, migliorando efficienza, qualità della carne e adattamento all'ambiente. Per un'azienda che produce carni suine, investire in genetica significa guardare oltre il presente verso mercati premium e filiere resilienti.
                </p>

                <p className="text-foreground/80 text-lg leading-relaxed">
                  La selezione genetica nei suini ha compiuto passi significativi negli ultimi decenni. In Italia, ad esempio, i programmi sulle linee Italian Large White, Landrace e Duroc evidenziano miglioramenti continui in prolificità, longevità e resa carne per il suino pesante destinato alla stagionatura. Ma l'orizzonte va molto più lontano: secondo ricerche di mercato, il settore del "breeding pig" – l'allevamento di riproduttori suini – è destinato a una crescita importante entro il 2033, trainato da maggiore automazione, genetica da precisione e domanda di carni di qualità.
                </p>

                <p className="text-foreground/80 text-lg leading-relaxed">
                  Per capire come la genetica stia cambiando la suinicoltura, possiamo considerare tre grandi direttrici. La prima è l'Efficienza produttiva e minori input: i programmi genetici puntano a migliorare il tasso di conversione alimentare (FCR), la crescita e la resistenza alle malattie, riducendo così risorse impiegate e impatto ambientale. Il report "Pig genetics for sustainable and quality pork production" evidenzia come la genetica stia diventando uno strumento concreto di sostenibilità.
                </p>

                <p className="text-foreground/80 text-lg leading-relaxed">
                  La seconda direttrice è la Qualità della carne e caratteristiche premium: la genetica non serve solo a produrre più maiali, ma a migliorare marezzatura, tenerezza, struttura del grasso, caratteristiche che favoriscono carni ed elaborati di fascia alta. Le razze heritage, meno "intensive", cominciano a beneficiare di selezione che le rende compatibili con i mercati gourmet.
                </p>

                <p className="text-foreground/80 text-lg leading-relaxed">
                  La terza è rappresentata da Nuovi mercati e heritage breeds: il mercato globale delle carni di razze antiche ("heritage pork") è stimato in 1,48 miliardi USD nel 2024, con un tasso annuo previsto del 7,2 % fino al 2033. Questo trend riguarda anche l'Europa, dove gli allevamenti su razze selezionate stanno crescendo in visibilità e valore. Investire in genetica significa anche accedere a filiere specializzate, marchi riconoscibili e consumatori disposti a pagare di più per qualità, autenticità e storicità.
                </p>

                <p className="text-foreground/80 text-lg leading-relaxed">
                  Dal punto di vista pratico per un allevatore o azienda agricola, questo significa: scegliere riproduttori con valori genetici elevati, adottare strumenti di analisi (SNP, genomica), gestire l'allevamento in maniera tale da esprimere al massimo il potenziale genetico (dieta, ambiente, benessere). Significa anche saper comunicare al consumatore che dietro la carne c'è uno sforzo genetico che si traduce in gusto, qualità e sostenibilità.
                </p>

                <p className="text-foreground/80 text-lg leading-relaxed">
                  In Italia, ad esempio, il programma "THE HAM Breeds" (linee Italian Large White, Landrace e Duroc) ha lavorato fin dal 1987 con obiettivi precisi: migliorare resa, qualità della carne da stagionatura e robustezza degli animali. È un esempio concreto di come la genetica si incastri con le esigenze del territorio e del prodotto tipico.
                </p>

                <p className="text-foreground/80 text-lg leading-relaxed">
                  Infine, guardando al futuro 2033, la selezione genetica potrà contribuire a: razze più adatte al pascolo, al sistema estensivo o semibrado; minori emissioni per kg di carne prodotta grazie a animali più efficienti; carni più profilate dal punto di vista nutrizionale e sensoriale (marezzatura, grassi "buoni"); filiere certificate e "heritage", capaci di generare valore sul piano marketing e territorio.
                </p>

                <p className="text-foreground/80 text-lg leading-relaxed">
                  Investire nella selezione genetica della suinicoltura significa guardare avanti: non solo più animali, ma animali migliori, carni migliori, filiere più robuste e sostenibili. Per un'azienda che vuole distinguersi nella qualità e nella responsabilità, la genetica è un pilastro strategico. Prepararsi per il 2033 significa oggi scegliere razze, investire in selezione, comunicare la storia della carne e valorizzare l'origine.
                </p>

                <div className="bg-forest-green/10 border-l-4 border-forest-green p-6 rounded-r-lg mt-8">
                  <p className="text-forest-green font-semibold text-lg">
                    Come la selezione genetica e le razze potranno ridefinire la suinicoltura europea entro il 2033.
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

export default SelezioneGenetica;
