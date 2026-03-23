import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Megaphone, MessageCircle } from "lucide-react";
import aboutTeam from "@/assets/about-team.png";

const badges = [
  { icon: Lightbulb, label: "Branding que fortalece sua marca" },
  { icon: Target, label: "Estratégia com foco em resultados" },
  { icon: Megaphone, label: "SEO, Conteúdo e Mídia Paga" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="section-subtitle mb-3">SOBRE</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Conheça a <span className="text-gold">UP</span> Comunicação
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {badges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full glass-card border border-[rgba(255,255,255,0.1)] hover:border-gold/30 hover:scale-105 transition-all duration-300 group cursor-default"
                >
                  <Icon className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-body text-foreground">{badge.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
              Somos uma agência de comunicação digital completa, sediada em Palmas, TO, com atuação nacional.
              Combinamos criatividade, dados e tecnologia para construir marcas que se destacam e geram resultados reais.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
              Nossa equipe multidisciplinar atua desde a concepção da identidade visual até campanhas de
              performance avançadas, sempre com foco em entregar valor mensurável.
            </p>

            <motion.a
              href="#orcamento"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground font-display font-bold text-base rounded-xl hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Solicitar Orçamento
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl overflow-hidden relative group">
              <div className="h-[320px] md:h-[380px] overflow-hidden">
                <img
                  src={aboutTeam}
                  alt="Equipe UP Comunicação analisando resultados"
                  className="w-full h-[140%] object-cover object-center -mt-[15%] group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-dark/20 rounded-2xl" />
            </div>
            <div className="absolute -z-10 -inset-3 bg-gradient-to-r from-gold/5 to-transparent rounded-2xl blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
