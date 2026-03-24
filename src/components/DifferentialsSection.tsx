import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, BarChart3, Zap, Users } from "lucide-react";

const items = [
  { icon: Handshake, title: "Parceria de Verdade", desc: "Não somos fornecedores, somos parte do seu time. Acompanhamos cada etapa com proximidade e comprometimento.", stat: "100%", statLabel: "Dedicação" },
  { icon: BarChart3, title: "Estratégia orientada a dados", desc: "Cada decisão criativa é validada por métricas e dados reais, garantindo ROI em todas as frentes.", stat: "3x", statLabel: "Mais ROI" },
  { icon: Zap, title: "Agilidade e flexibilidade", desc: "Processos enxutos e time dedicado permitem entregas rápidas sem sacrificar a qualidade.", stat: "48h", statLabel: "Resposta" },
  { icon: Users, title: "Equipe multidisciplinar", desc: "Designers, filmmakers, estrategistas e devs trabalhando juntos sob uma visão unificada.", stat: "5+", statLabel: "Especialistas" },
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
          <p className="section-subtitle mb-4 text-base">POR QUE A UP</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
            O que nos torna diferentes
          </h2>
        </motion.div>

        {/* Bento-style asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isLarge = i === 0 || i === 3;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={isLarge ? "md:col-span-1" : "md:col-span-1"}
              >
                <div className={`glass-card rounded-2xl border border-[rgba(255,255,255,0.06)] hover:border-gold/20 hover:shadow-[0_0_30px_rgba(255,215,0,0.06)] transition-all duration-500 h-full ${isLarge ? "p-10" : "p-8"} group relative overflow-hidden`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-display font-extrabold text-gold">{item.stat}</span>
                      <p className="text-xs text-muted-foreground font-body">{item.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-base leading-relaxed">{item.desc}</p>
                  
                  {/* Subtle accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
