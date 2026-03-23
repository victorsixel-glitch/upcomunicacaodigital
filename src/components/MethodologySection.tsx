import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

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

        <div className="relative max-w-4xl mx-auto">
          {/* Background line - centered */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.06)]" />
          {/* Neon glowing line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-px origin-top"
            style={{
              height: lineHeight,
              background: "linear-gradient(to bottom, hsl(51 100% 50%), hsl(51 100% 50% / 0.6))",
              boxShadow: "0 0 8px hsl(51 100% 50% / 0.6), 0 0 20px hsl(51 100% 50% / 0.3)",
            }}
          />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative"
                >
                  {/* Dot on center line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_20px_rgba(255,215,0,0.6)] z-10 top-10" />

                  {/* Card - alternating sides */}
                  <div className={`flex ${isRight ? "justify-end" : "justify-start"}`}>
                    <div className="w-full md:w-[calc(50%-2rem)]">
                      <div className={`glass-card p-8 rounded-2xl relative overflow-hidden border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,215,0,0.3)] transition-all duration-500 group ${!isRight ? "md:text-right" : ""}`}>
                        <span className="outline-number top-2 right-4 text-[6rem]">{step.number}</span>
                        <div className="relative z-10">
                          <div className={`w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors ${!isRight ? "md:ml-auto" : ""}`}>
                            <Icon className="w-6 h-6 text-gold" />
                          </div>
                          <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
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

export default MethodologySection;
