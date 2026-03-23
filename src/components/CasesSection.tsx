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
          <p className="section-subtitle mb-3">PORTFÓLIO</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Cases de Sucesso
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Featured (large) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={featured}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 group relative overflow-hidden rounded-2xl cursor-pointer aspect-[16/10]"
              onClick={() => setFeatured((featured + 1) % cases.length)}
            >
              <img
                src={cases[featured].image}
                alt={cases[featured].title}
                className="absolute inset-0 w-full h-full object-contain bg-dark-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">{cases[featured].category}</p>
                <h3 className="text-2xl font-display font-bold text-foreground">{cases[featured].title}</h3>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Side thumbnails */}
          <div className="flex flex-row lg:flex-col gap-4">
            {others.map((item) => {
              const originalIndex = cases.findIndex(c => c.title === item.title);
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  onClick={() => setFeatured(originalIndex)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer flex-1 aspect-[16/10] lg:aspect-auto"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-contain bg-dark-card group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[10px] text-gold font-semibold uppercase tracking-wider mb-0.5">{item.category}</p>
                    <h4 className="text-sm font-display font-bold text-foreground">{item.title}</h4>
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
