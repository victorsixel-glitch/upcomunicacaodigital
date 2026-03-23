import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Rocket } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Imersão & Diagnóstico", desc: "Mergulhamos no seu universo para entender desafios, mercado e oportunidades antes de qualquer ação." },
  { icon: Lightbulb, number: "02", title: "Estratégia & Criação", desc: "Transformamos insights em estratégias criativas e visuais que comunicam a essência da sua marca." },
  { icon: Rocket, number: "03", title: "Escala & Performance", desc: "Lançamos, medimos e otimizamos continuamente para garantir crescimento real e sustentável." },
];

const MethodologySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-subtitle mb-3">METODOLOGIA</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            O Caminho para o <span className="text-gold">UP</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex items-start gap-6 md:gap-12 mb-16 last:mb-0 ${
                  i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_20px_rgba(255,215,0,0.6)] z-10 mt-8" />

                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 1 ? "md:pr-16" : "md:pl-16 md:ml-auto"}`}>
                  <div className="glass-card p-8 rounded-2xl relative overflow-hidden border border-[rgba(255,215,0,0.08)] hover:border-[rgba(255,215,0,0.3)] transition-all duration-500 group">
                    <span className="outline-number top-2 right-4 text-[6rem]">{step.number}</span>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
