import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    number: "01",
    title: "Missão",
    desc: "Transformar ideias em conexões reais. Potencializar marcas por meio de soluções inteligentes de comunicação que geram impacto, resultados e relevância.",
  },
  {
    number: "02",
    title: "Visão",
    desc: "Ser referência em comunicação que move, emociona e converte. A agência que une inovação, propósito e resultados — que entrega além do esperado.",
  },
  {
    number: "03",
    title: "Valores",
    desc: "Criatividade com propósito. Transparência. Parceria verdadeira. Inovação como cultura. Responsabilidade, ética e a Atitude UP: energia para subir sempre.",
  },
];

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative glass-card p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,215,0,0.2)] transition-all duration-500 overflow-hidden group"
            >
              {/* Outline number */}
              <span className="outline-number top-2 right-4 text-[6rem]">{item.number}</span>

              <div className="relative z-10">
                {/* Badge */}
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 text-gold font-display font-bold text-sm mb-6">
                  {item.number}
                </span>

                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
