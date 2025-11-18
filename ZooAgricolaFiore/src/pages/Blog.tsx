import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import blogHero from "@/assets/blog-hero.jpg";
import blogGenetics from "@/assets/blog-genetics.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import blogOmega3 from "@/assets/blog-omega3.jpg";
import blogCooking from "@/assets/blog-cooking.jpg";
import blogPigWelfare from "@/assets/blog-pig-welfare.jpg";
import blogProsciutto from "@/assets/blog-prosciutto.jpg";
import blogAntibioticFree from "@/assets/blog-antibiotic-free.jpg";
import blogWinePairing from "@/assets/blog-wine-pairing.jpg";
import blogGrilling from "@/assets/blog-grilling.jpg";

const Blog = () => {
  const blogPosts = [
    {
      date: "Nov 5, 2025",
      title: "Investire nel futuro: come la selezione genetica sta cambiando la suinicoltura",
      image: blogGenetics,
    },
    {
      date: "Oct 25, 2025",
      title: "Mangime naturale e filiera circolare: come alimentare suini in modo sostenibile",
      image: blogSustainable,
    },
    {
      date: "Oct 15, 2025",
      title: "Omega-3 e CLA: il profilo nutrizionale del maiale tradizionale",
      image: blogOmega3,
    },
    {
      date: "Oct 5, 2025",
      title: "Il mondo del maiale in cucina: tagli alternativi e piatti che sorprendono",
      image: blogCooking,
    },
    {
      date: "Sep 25, 2025",
      title: "Carni suine sostenibili: innovazione e qualità nella filiera del maiale italiano",
      image: blogPigWelfare,
    },
    {
      date: "Sep 15, 2025",
      title: "Agricoltura rigenerativa e suinicoltura: quando il suolo ringrazia",
      image: blogSustainable,
    },
    {
      date: "Sep 5, 2025",
      title: "Prosciutto 4.0: tradizione e innovazione verso il 2025",
      image: blogProsciutto,
    },
    {
      date: "Aug 25, 2025",
      title: "Dal naso alla coda: l'arte di usare tutto il maiale e dire addio agli sprechi",
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
      image: blogPigWelfare,
    },
    {
      date: "Jul 25, 2025",
      title: "Wine & Ham: guida agli abbinamenti perfetti con il prosciutto artigianale",
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
      image: blogPigWelfare,
    },
    {
      date: "Jun 16, 2025",
      title: "Benefici di scegliere una produzione locale come la nostra",
      image: blogSustainable,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-start">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blogHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Blog e News
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Rimani Aggiornato
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  <span className="text-golden-yellow text-sm font-medium">
                    {post.date}
                  </span>
                  <h3 className="text-white text-xl font-bold leading-tight">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      
      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-4">
            <span className="inline-block px-6 py-2 rounded-full border-2 border-primary text-primary font-medium text-sm">
              Alcuni scatti
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-16">
            Galleria
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={blogPigWelfare}
                alt="Suini al pascolo"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={blogCooking}
                alt="Lavorazione artigianale"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={blogProsciutto}
                alt="Prosciutto artigianale"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={blogOmega3}
                alt="Tagli di carne"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={blogGrilling}
                alt="Mercato e eventi"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={blogSustainable}
                alt="Allevamento sostenibile"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default Blog;
