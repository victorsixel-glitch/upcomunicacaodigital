import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const placeholderLogos = [
  "Cliente A", "Cliente B", "Cliente C", "Cliente D",
  "Cliente E", "Cliente F", "Cliente G", "Cliente H",
];

const MarqueeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-subtitle mb-3">NOSSOS CLIENTES</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold">
            Marcas que confiam no nosso <span className="text-gold">UP</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...placeholderLogos, ...placeholderLogos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-16 px-8 opacity-40 hover:opacity-100 hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.4)] transition-all duration-500 cursor-pointer"
            >
              <span className="text-lg font-display font-semibold text-foreground whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
