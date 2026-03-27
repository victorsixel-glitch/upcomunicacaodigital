import { motion, useInView } from "framer-motion";
import { useRef, useCallback, useState } from "react";
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
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 180;
    if (dist < maxDist) {
      const strength = 1 - dist / maxDist;
      setBtnOffset({ x: dx * strength * 0.45, y: dy * strength * 0.45 });
    } else {
      setBtnOffset({ x: 0, y: 0 });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setBtnOffset({ x: 0, y: 0 });
  }, []);

  return (
    <section id="sobre" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-4 text-base">SOBRE</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-8">
            Conheça a <span className="text-gold">UP</span> Comunicação
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {badges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-full glass-card border border-[rgba(255,255,255,0.1)] hover:border-gold/30 hover:scale-105 transition-all duration-300 group cursor-default"
                >
                  <Icon className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-base font-body text-foreground">{badge.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Somos uma agência de comunicação digital completa, sediada em Palmas, TO, com atuação nacional.
              Combinamos criatividade, dados e tecnologia para construir marcas que se destacam e geram resultados reais.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
              Nossa equipe multidisciplinar atua desde a concepção da identidade visual até campanhas de
              performance avançadas, sempre com foco em entregar valor mensurável.
            </p>

            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ padding: "40px", margin: "-40px" }}
            >
              <motion.a
                ref={btnRef}
                href="https://wa.me/5563984257831?text=Olá! Vim pelo site e gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  x: btnOffset.x,
                  y: btnOffset.y,
                  boxShadow: [
                    "0 0 20px rgba(255,215,0,0.3), 0 0 40px rgba(255,215,0,0.15)",
                    "0 0 30px rgba(255,215,0,0.5), 0 0 60px rgba(255,215,0,0.25)",
                    "0 0 20px rgba(255,215,0,0.3), 0 0 40px rgba(255,215,0,0.15)",
                  ],
                }}
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 15, mass: 0.5 },
                  y: { type: "spring", stiffness: 200, damping: 15, mass: 0.5 },
                  boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-primary-foreground font-display font-bold text-lg rounded-xl group"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Solicitar Orçamento
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl overflow-hidden relative group">
              <div className="h-[360px] md:h-[440px] overflow-hidden">
                <img
                  src={aboutTeam}
                  alt="Equipe UP Comunicação"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
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
