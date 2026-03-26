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
          <p className="section-subtitle mb-4 text-base">METODOLOGIA</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
            O Caminho para o <span className="text-gold">UP</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center line - hidden on mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-px origin-top hidden md:block"
            style={{
              height: lineHeight,
              background: "linear-gradient(to bottom, hsl(51 100% 50%), hsl(51 100% 50% / 0.6))",
              boxShadow: "0 0 12px hsl(51 100% 50% / 0.6), 0 0 30px hsl(51 100% 50% / 0.3)",
            }}
          />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isRight ? 60 : -60 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  className="relative"
                >
                  {/* Center dot - hidden on mobile */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_24px_rgba(255,215,0,0.7)] z-10 top-12 hidden md:block" />

                  <div className={`flex ${isRight ? "md:justify-end" : "md:justify-start"} justify-start`}>
                    <div className="w-full md:w-[calc(50%-2.5rem)]">
                      <div className={`glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden border border-border hover:border-gold/30 hover:shadow-[0_0_30px_rgba(255,215,0,0.08)] transition-all duration-500 group ${!isRight ? "text-right" : ""}`}>
                        {/* Number positioned away from icon */}
                        <span
                          className="absolute text-[5rem] md:text-[7rem] font-display font-extrabold leading-none select-none pointer-events-none opacity-[0.04] top-2"
                          style={{ [isRight ? 'right' : 'left']: '1rem' }}
                        >
                          {step.number}
                        </span>
                        <div className={`relative z-10 ${!isRight ? "flex flex-col items-end text-right" : ""}`}>
                          <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                            <Icon className="w-7 h-7 text-gold" />
                          </div>
                          <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                          <p className="text-muted-foreground font-body text-base leading-relaxed">{step.desc}</p>
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
