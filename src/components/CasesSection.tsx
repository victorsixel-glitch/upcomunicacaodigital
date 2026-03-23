import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import caseTche from "@/assets/case-tcheburger.png";
import caseToemdia from "@/assets/case-toemdia.png";
import caseViva from "@/assets/case-vivatocantins.jpg";

const cases = [
  { title: "Tchê Burguer", category: "Branding & Packaging", image: caseTche },
  { title: "Toemdia", category: "Identidade Visual", image: caseToemdia },
  { title: "Viva Tocantins", category: "Branding Institucional", image: caseViva },
];

const CasesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [featured, setFeatured] = useState(0);

  const others = cases.filter((_, i) => i !== featured);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4 text-base">PORTFÓLIO</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
            Cases de Sucesso
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Featured (large) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={featured}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 group relative overflow-hidden rounded-2xl cursor-pointer aspect-[16/10] glass-card"
              onClick={() => setFeatured((featured + 1) % cases.length)}
            >
              <img
                src={cases[featured].image}
                alt={cases[featured].title}
                className="absolute inset-0 w-full h-full object-contain bg-dark-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm text-gold font-semibold uppercase tracking-wider mb-2">{cases[featured].category}</p>
                <h3 className="text-3xl font-display font-bold text-foreground">{cases[featured].title}</h3>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Side thumbnails */}
          <div className="flex flex-row lg:flex-col gap-6">
            {others.map((item) => {
              const originalIndex = cases.findIndex(c => c.title === item.title);
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  onClick={() => setFeatured(originalIndex)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer flex-1 aspect-[16/10] lg:aspect-auto glass-card hover:border-gold/20 transition-all duration-500"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-contain bg-dark-card group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">{item.category}</p>
                    <h4 className="text-base font-display font-bold text-foreground">{item.title}</h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
