import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    number: "01",
    title: "Missão",
    text: "Transformar ideias em conexões reais. Potencializar marcas por meio de soluções inteligentes de comunicação que geram impacto, resultados e relevância.",
  },
  {
    icon: Eye,
    number: "02",
    title: "Visão",
    text: "Ser referência em comunicação que move, emociona e converte. A agência que une inovação, propósito e resultados — que entrega além do esperado.",
  },
  {
    icon: Heart,
    number: "03",
    title: "Valores",
    text: "Criatividade com propósito. Transparência. Parceria verdadeira. Inovação como cultura. Responsabilidade, ética e a Atitude UP: energia para subir sempre.",
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group"
              >
                <div className="glass-card p-10 rounded-2xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.06)] transition-all duration-500 h-full relative overflow-hidden">
                  <span className="outline-number top-1 right-3 text-[7rem]">{p.number}</span>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4">{p.title}</h3>
                    <p className="text-muted-foreground font-body text-base leading-relaxed">{p.text}</p>
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

export default MissionSection;
