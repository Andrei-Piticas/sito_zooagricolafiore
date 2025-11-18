import blogGenetics from "@/assets/blog-genetics.jpg";
import blogCooking from "@/assets/blog-cooking.jpg";
import blogOmega3 from "@/assets/blog-omega3.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import blogProsciutto from "@/assets/blog-prosciutto.jpg";
import blogPigWelfare from "@/assets/blog-pig-welfare.jpg";
import blogAntibioticFree from "@/assets/blog-antibiotic-free.jpg";
import blogWinePairing from "@/assets/blog-wine-pairing.jpg";
import blogGrilling from "@/assets/blog-grilling.jpg";
import heroFarm from "@/assets/hero-farm.jpg";

const BlogNewsSection = () => {
  const blogPosts = [
    {
      date: "Nov 5, 2025",
      title:
        "Investire nel futuro: come la selezione genetica sta cambiando la suinicoltura",
      image: blogGenetics,
    },
    {
      date: "Oct 25, 2025",
      title:
        "Mangime naturale e filiera circolare: come alimentare suini in modo sostenibile",
      image: heroFarm,
    },
    {
      date: "Oct 15, 2025",
      title: "Omega-3 e CLA: il profilo nutrizionale del maiale tradizionale",
      image: blogOmega3,
    },
    {
      date: "Oct 5, 2025",
      title:
        "Il mondo del maiale in cucina: tagli alternativi e piatti che sorprendono",
      image: blogCooking,
    },
    {
      date: "Sep 25, 2025",
      title:
        "Carni suine sostenibili: innovazione e qualità nella filiera del maiale italiano",
      image: blogSustainable,
    },
    {
      date: "Sep 15, 2025",
      title:
        "Agricoltura rigenerativa e suinicoltura: quando il suolo ringrazia",
      image: heroFarm,
    },
    {
      date: "Sep 5, 2025",
      title: "Prosciutto 4.0: tradizione e innovazione verso il 2025",
      image: blogProsciutto,
    },
    {
      date: "Aug 25, 2025",
      title:
        "Dal naso alla coda: l'arte di usare tutto il maiale e dire addio agli sprechi",
      image: blogPigWelfare,
    },
    {
      date: "Aug 15, 2025",
      title: "Antibiotic-Free Pork: la rivoluzione della carne sana",
      image: blogAntibioticFree,
    },
    {
      date: "Aug 5, 2025",
      title: "Rare Breed Pork: il mercato gourmet delle razze antiche",
      image: blogSustainable,
    },
    {
      date: "Jul 25, 2025",
      title:
        "Wine & Ham: guida agli abbinamenti perfetti con il prosciutto artigianale",
      image: blogWinePairing,
    },
    {
      date: "Jul 16, 2025",
      title: "Mangalica: storia e sapori",
      image: blogPigWelfare,
    },
    {
      date: "Jul 6, 2025",
      title: "Guida definitiva alla grigliata estiva",
      image: blogGrilling,
    },
    {
      date: "Jun 26, 2025",
      title: "Perché scegliere il suino semibrado",
      image: blogSustainable,
    },
    {
      date: "Jun 16, 2025",
      title: "Benefici di scegliere una produzione locale come la nostra",
      image: heroFarm,
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
                Rimani aggiornato
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Blog e news
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-72"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                {/* Date */}
                <div>
                  <span className="inline-block bg-golden-yellow/15 backdrop-blur-sm text-golden-yellow px-3 py-1 rounded-full text-xs font-medium">
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-bold leading-snug">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogNewsSection;
