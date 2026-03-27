import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Missão",
    text: "Transformar ideias em conexões reais. Potencializar marcas por meio de soluções inteligentes de comunicação que geram impacto, resultados e relevância.",
    accent: "from-gold/20 to-gold/5",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência em comunicação que move, emociona e converte. A agência que une inovação, propósito e resultados — que entrega além do esperado.",
    accent: "from-gold/15 to-transparent",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Criatividade com propósito. Transparência. Parceria verdadeira. Inovação como cultura. Responsabilidade, ética e a Atitude UP: energia para subir sempre.",
    accent: "from-gold/10 to-gold/5",
  },
];

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,215,0,0.02)_0%,transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4 text-base">NOSSO PROPÓSITO</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
            Missão, Visão & <span className="text-gold">Valores</span>
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting horizontal line — centered with icon boxes */}
          <div className="hidden md:block absolute top-[calc(1.5rem+2.5rem)] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative flex flex-col items-center text-center px-4 sm:px-8 py-6"
                >
                  {/* Circle node */}
                  <div className="relative z-10 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-[5rem] h-[5rem] rounded-2xl bg-gradient-to-br ${p.accent} border border-gold/20 flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.1)] backdrop-blur-sm`}
                    >
                      <Icon className="w-8 h-8 text-gold" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-3 text-gold capitalize">{p.title}</h3>
                  <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed max-w-xs">{p.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
