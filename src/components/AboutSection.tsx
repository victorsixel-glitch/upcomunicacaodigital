import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const badges = ["Branding", "Estratégia", "SEO", "Performance", "Social Media", "Filmmaker"];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-subtitle mb-3">SOBRE</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Conheça a <span className="text-gold">UP</span> Comunicação
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
              Somos uma agência de comunicação digital completa, sediada em Palmas, TO, com atuação nacional.
              Combinamos criatividade, dados e tecnologia para construir marcas que se destacam e geram resultados reais.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
              Nossa equipe multidisciplinar atua desde a concepção da identidade visual até campanhas de
              performance avançadas, sempre com foco em entregar valor mensurável.
            </p>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.15)] text-sm font-body text-muted-foreground hover:border-gold/40 hover:text-foreground hover-scale cursor-default transition-colors duration-300"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl aspect-[4/3] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl font-display font-extrabold text-gold/15">UP</span>
                  <p className="text-sm text-muted-foreground mt-2">Equipe UP Comunicação</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-gold/5 to-transparent rounded-3xl blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
