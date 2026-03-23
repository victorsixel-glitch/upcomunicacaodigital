import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cases = [
  { title: "Projeto Alpha", category: "Branding", span: "md:col-span-2 md:row-span-2" },
  { title: "Projeto Beta", category: "Performance", span: "md:col-span-1" },
  { title: "Projeto Gamma", category: "Filmmaker", span: "md:col-span-1" },
];

const ParallaxCard = ({ item, index, inView }: { item: typeof cases[0]; index: number; inView: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={cardRef}
      key={item.title}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`${item.span} group relative overflow-hidden rounded-2xl cursor-pointer`}
    >
      <div className="absolute inset-0 glass-card" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />

      {/* Parallax inner content */}
      <motion.div className="absolute inset-0 flex items-center justify-center" style={{ y }}>
        <span className="text-7xl font-display font-extrabold text-gold/10 group-hover:scale-110 transition-transform duration-700">
          UP
        </span>
      </motion.div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <div>
          <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">{item.category}</p>
          <h3 className="text-xl font-display font-bold text-foreground">{item.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const CasesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto auto-rows-[200px] md:auto-rows-[220px]">
          {cases.map((item, i) => (
            <ParallaxCard key={item.title} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
