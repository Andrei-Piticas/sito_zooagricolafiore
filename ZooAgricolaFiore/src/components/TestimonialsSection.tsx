const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Un'azienda che trasmette cura in ogni dettaglio, dai prodotti al modo in cui accolgono i clienti. Daniele sa quello che fa. E oggi è una cosa sempre più rara trovare persone che gestiscono un'attività con passione. Grandissima disponibilità anche come fornitore sia per le consegne sia per la sperimentazione insieme. Complimenti!",
      name: "Michele Nicola Schirripa",
      title: "Owner di Lab restaurant & drink e Zero",
    },
    {
      quote:
        "Persone splendide e prodotti eccezionali. Da professionista posso affermare che provare il loro mangalica è un'esperienza mistica. Consigliatissimo per chi cerca una qualità sopra la media e un prodotto unico.",
      name: "Davide Ceccarelli",
      title: "Proprietario di Martello bbq",
    },
    {
      quote:
        "Daniele è un'artista del maiale in tutte le sue forme. Salumi spettacolari, allevamento fatto con rispetto e un'attenzione rara verso ogni fase della produzione. Tradizione e passione sono le parole chiave di questa stupenda realtà.",
      name: "Alice Sisto",
      title: "Proprietaria Hotel Aquila",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block mb-6">
            <div className="border-2 border-forest-green rounded-full px-6 py-2">
              <span className="text-forest-green text-sm font-medium">
                Clienti soddisfatti
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Dicono di noi
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-border hover:border-forest-green transition-colors duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Quote */}
              <p className="text-foreground text-base leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Author Info */}
              <div>
                <h3 className="text-forest-green text-xl font-bold mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
