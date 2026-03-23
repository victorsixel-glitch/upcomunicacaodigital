import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, BarChart3, Zap, Users } from "lucide-react";
import { TiltCard } from "./ResultsSection";

const items = [
  { icon: Handshake, title: "Parceria de Verdade", desc: "Não somos fornecedores, somos parte do seu time. Acompanhamos cada etapa com proximidade e comprometimento." },
  { icon: BarChart3, title: "Estratégia orientada a dados", desc: "Cada decisão criativa é validada por métricas e dados reais, garantindo ROI em todas as frentes." },
  { icon: Zap, title: "Agilidade e flexibilidade", desc: "Processos enxutos e time dedicado permitem entregas rápidas sem sacrificar a qualidade." },
  { icon: Users, title: "Equipe multidisciplinar", desc: "Designers, filmmakers, estrategistas e devs trabalhando juntos sob uma visão unificada." },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-3">POR QUE A UP</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            O que nos torna diferentes
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <TiltCard>
                  <div className="glass-card p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,215,0,0.2)] transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-display font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
