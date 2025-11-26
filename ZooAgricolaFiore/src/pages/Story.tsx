import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatSetsUsApartSection from "@/components/WhatSetsUsApartSection";
import AwardsEventsSection from "@/components/AwardsEventsSection";
import ContactInfoSection from "@/components/ContactInfoSection";
import storyHero from "@/assets/story-hero.jpg";

const Story = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={storyHero}
            alt="Four generations of the Fiore family"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              La nostra storia
            </h1>
            <p className="text-2xl text-white/90">
              Radici contadine, sguardo al futuro.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content Section - Desktop order */}
      <section className="hidden md:block bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Title */}
            <div>
              <div className="inline-block mb-6">
                <div className="border-2 border-forest-green rounded-full px-6 py-2">
                  <span className="text-forest-green text-sm font-medium">
                    La nostra storia
                  </span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Dalle marche alla Tuscia: il nostro viaggio
              </h2>
            </div>

            {/* Right Column - Story Text */}
            <div className="space-y-4 text-foreground/80 text-base leading-relaxed">
              <p>
                La nostra storia ha inizio nel 1949, quando la famiglia Magnaterra dalle Marche si trasferisce nel Lazio.
              </p>
              <p>
                Dopo poco tempo uno dei fratelli, Ferdinando (detto Fiore), decide di intraprendere un percorso autonomo e di staccarsi dalla famiglia patriarcale: insieme al figlio Piero acquista una piccola azienda agricola, dando così vita, nel 1956, a un allevamento di bovini da latte.
              </p>
              <p>
                Spinti dalla volontà di offrire un prodotto genuino e locale, avviano anche una piccola latteria, anticipando quella che oggi conosciamo come filosofia del "chilometro zero": coltivare, trasformare e consumare nello stesso territorio, riducendo trasporti, sprechi e impatto ambientale.
              </p>
              <p>
                Con il tempo, arriva l'occasione di rilevare una macelleria e la produzione aziendale si evolve: accanto ai bovini da carne, viene introdotto l'allevamento dei suini, aprendo la strada alla vendita diretta. Nel 1970, per rispondere alle esigenze della clientela, inizia anche la produzione di salumi e insaccati stagionati. Le ricette, tramandate dalla tradizione, sono naturali e prive di conservanti e antiossidanti.
              </p>
              <p>
                Il successo non si fa attendere: Piero e Anna si dedicano con passione alla preparazione di porchette, lonze, lombetti, prosciutti, spalle, pancette, coppa e salsicce.
              </p>
              <p>
                Negli anni successivi, Maurizio, figlio di Piero, entra in azienda e insieme al nonno Fiore si occupa dell'allevamento suinicolo, si specializza e ottiene l'ingresso nei Consorzi di Tutela del Prosciutto di Parma e di San Daniele.
              </p>
              <p>
                In questa fase, l'allevamento bovino viene abbandonato per concentrarsi interamente sui suini.
              </p>
              <p>
                Nel 2003, per limiti di età e di tempo, il negozio viene chiuso per dedicarsi completamente alle colture e all'allevamento.
              </p>
              <p>
                Nel 2010, Daniele, figlio di Maurizio, decide di dedicare la sua vita a portare avanti la tradizione di famiglia: apre un punto vendita all'interno dell'azienda e recupera le antiche ricette della nonna, reinterpretandole secondo i gusti delle nuove generazioni. Completa la visione con un investimento strategico: un impianto per lo stoccaggio delle materie prime necessarie all'alimentazione dei suini, così da garantire una dieta il più naturale possibile e un controllo ottimale della qualità.
              </p>
              <p>
                Oggi, la nostra produzione resta fedele alla semplicità e alla cura di sempre. Con orgoglio, lavoriamo ogni giorno per offrire il meglio ai nostri clienti, nel nome del nonno Fiore, a cui abbiamo voluto dedicare la nostra azienda.
              </p>
              <p>
                Perché non dimentichiamo mai da dove veniamo. E sappiamo bene dove vogliamo andare.
              </p>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-[#E8EDE8] rounded-3xl p-8">
              <div className="text-5xl font-bold mb-4">
                <span className="text-forest-green">4</span>
                <span className="text-golden-yellow">+</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Generazioni</h3>
            </div>

            <div className="bg-[#E8EDE8] rounded-3xl p-8">
              <div className="text-5xl font-bold mb-4">
                <span className="text-forest-green">65</span>
                <span className="text-golden-yellow">+</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Anni di esperienza</h3>
            </div>

            <div className="bg-[#E8EDE8] rounded-3xl p-8">
              <div className="text-5xl font-bold mb-4">
                <span className="text-forest-green">3</span>
                <span className="text-golden-yellow">+</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Filiere produttive</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile order: Ci presentiamo first, then story */}
      <div className="md:hidden">
        <section className="bg-background py-12">
          <div className="container mx-auto px-6">
            <div className="inline-block mb-6">
              <div className="border-2 border-forest-green rounded-full px-6 py-2">
                <span className="text-forest-green text-sm font-medium">
                  Ci presentiamo
                </span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              La Nostra Identità
            </h2>
            <p className="text-foreground/80 text-base leading-relaxed mb-6">
              Tra le colline di Orte coltiviamo cereali, alleviamo suini e
              stagioniamo a tempo lento, mescolando tradizione norcina e
              sperimentazione sostenibile.
            </p>
          </div>
        </section>

        {/* Story Content for Mobile */}
        <section className="bg-background py-12">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <div className="inline-block mb-4">
                <div className="border-2 border-forest-green rounded-full px-6 py-2">
                  <span className="text-forest-green text-sm font-medium">
                    La nostra storia
                  </span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground leading-tight mb-6">
                Dalle marche alla Tuscia: il nostro viaggio
              </h2>
            </div>

            <div className="space-y-4 text-foreground/80 text-base leading-relaxed">
              <p>
                La nostra storia ha inizio nel 1949, quando la famiglia Magnaterra dalle Marche si trasferisce nel Lazio.
              </p>
              <p>
                Dopo poco tempo uno dei fratelli, Ferdinando (detto Fiore), decide di intraprendere un percorso autonomo e di staccarsi dalla famiglia patriarcale: insieme al figlio Piero acquista una piccola azienda agricola, dando così vita, nel 1956, a un allevamento di bovini da latte.
              </p>
              <p>
                Spinti dalla volontà di offrire un prodotto genuino e locale, avviano anche una piccola latteria, anticipando quella che oggi conosciamo come filosofia del "chilometro zero": coltivare, trasformare e consumare nello stesso territorio, riducendo trasporti, sprechi e impatto ambientale.
              </p>
              <p>
                Con il tempo, arriva l'occasione di rilevare una macelleria e la produzione aziendale si evolve: accanto ai bovini da carne, viene introdotto l'allevamento dei suini, aprendo la strada alla vendita diretta. Nel 1970, per rispondere alle esigenze della clientela, inizia anche la produzione di salumi e insaccati stagionati. Le ricette, tramandate dalla tradizione, sono naturali e prive di conservanti e antiossidanti.
              </p>
              <p>
                Il successo non si fa attendere: Piero e Anna si dedicano con passione alla preparazione di porchette, lonze, lombetti, prosciutti, spalle, pancette, coppa e salsicce.
              </p>
              <p>
                Negli anni successivi, Maurizio, figlio di Piero, entra in azienda e insieme al nonno Fiore si occupa dell'allevamento suinicolo, si specializza e ottiene l'ingresso nei Consorzi di Tutela del Prosciutto di Parma e di San Daniele.
              </p>
              <p>
                In questa fase, l'allevamento bovino viene abbandonato per concentrarsi interamente sui suini.
              </p>
              <p>
                Nel 2003, per limiti di età e di tempo, il negozio viene chiuso per dedicarsi completamente alle colture e all'allevamento.
              </p>
              <p>
                Nel 2010, Daniele, figlio di Maurizio, decide di dedicare la sua vita a portare avanti la tradizione di famiglia: apre un punto vendita all'interno dell'azienda e recupera le antiche ricette della nonna, reinterpretandole secondo i gusti delle nuove generazioni. Completa la visione con un investimento strategico: un impianto per lo stoccaggio delle materie prime necessarie all'alimentazione dei suini, così da garantire una dieta il più naturale possibile e un controllo ottimale della qualità.
              </p>
              <p>
                Oggi, la nostra produzione resta fedele alla semplicità e alla cura di sempre. Con orgoglio, lavoriamo ogni giorno per offrire il meglio ai nostri clienti, nel nome del nonno Fiore, a cui abbiamo voluto dedicare la nostra azienda.
              </p>
              <p>
                Perché non dimentichiamo mai da dove veniamo. E sappiamo bene dove vogliamo andare.
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 gap-6 mt-12">
              <div className="bg-[#E8EDE8] rounded-3xl p-8">
                <div className="text-5xl font-bold mb-4">
                  <span className="text-forest-green">4</span>
                  <span className="text-golden-yellow">+</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Generazioni</h3>
              </div>

              <div className="bg-[#E8EDE8] rounded-3xl p-8">
                <div className="text-5xl font-bold mb-4">
                  <span className="text-forest-green">65</span>
                  <span className="text-golden-yellow">+</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Anni di esperienza</h3>
              </div>

              <div className="bg-[#E8EDE8] rounded-3xl p-8">
                <div className="text-5xl font-bold mb-4">
                  <span className="text-forest-green">3</span>
                  <span className="text-golden-yellow">+</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Filiere produttive</h3>
              </div>
            </div>
          </div>
        </section>
      </div>

      <WhatSetsUsApartSection />
      <AwardsEventsSection />
      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default Story;
