import { motion } from "framer-motion";
import { useRef, useCallback, useState } from "react";
import heroTeam from "@/assets/hero-team.png";
import heroPalmas from "@/assets/hero-palmas.png";

const HeroSection = () => {
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
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,215,0,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,215,0,0.04)_0%,transparent_50%)]" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mb-5 text-base"
          >
            BRANDING · FILMMAKER · PERFORMANCE
          </motion.p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold leading-[1.05] tracking-[-0.02em] mb-8">
            Sua agência de alta performance em{" "}
            <span className="text-gold">Palmas</span>, pronta para o{" "}
            <span className="text-gold">Brasil</span>.
          </h1>

          <p className="text-xl text-muted-foreground max-w-xl mb-12 font-body leading-relaxed">
            Construímos marcas com estratégia, criatividade e dados.
            Da identidade visual à performance digital, elevamos o seu negócio.
          </p>

          <div
            className="flex flex-wrap gap-5"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ padding: "40px", margin: "-40px" }}
          >
            <motion.a
              ref={btnRef}
              href="#orcamento"
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
              className="inline-flex items-center px-10 py-5 bg-gold text-primary-foreground font-display font-bold text-lg rounded-xl"
            >
              Solicitar Orçamento
            </motion.a>
            <a
              href="#portfolio"
              className="inline-flex items-center px-10 py-5 border border-[rgba(255,255,255,0.2)] text-foreground font-display font-semibold text-lg rounded-xl glass-card hover:border-[rgba(255,255,255,0.4)] transition-all duration-300"
            >
              Ver Portfólio
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          {/* Floating 3D Tags — positioned outside image grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{ delay: 0.8, duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="absolute -left-10 top-[5%] z-30 glass-card px-4 py-2.5 rounded-xl border border-gold/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(255,215,0,0.1)]"
            style={{ transform: "perspective(600px) rotateY(8deg)" }}
          >
            <span className="text-sm font-display font-bold text-gold">🎯 +98% Retenção</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.1, duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute -right-8 top-[10%] z-30 glass-card px-4 py-2.5 rounded-xl border border-gold/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(255,215,0,0.1)]"
            style={{ transform: "perspective(600px) rotateY(-6deg)" }}
          >
            <span className="text-sm font-display font-bold text-gold">🚀 100+ Marcas</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{ delay: 1.4, duration: 2.8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute left-[20%] -bottom-10 z-30 glass-card px-4 py-2.5 rounded-xl border border-gold/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(255,215,0,0.1)]"
            style={{ transform: "perspective(600px) rotateX(6deg)" }}
          >
            <span className="text-sm font-display font-bold text-gold">⚡ Alta Performance</span>
          </motion.div>

          <div className="grid grid-cols-2 gap-5 relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card overflow-hidden rounded-2xl aspect-[3/4] relative group"
            >
              <img
                src={heroPalmas}
                alt="Palmas, Tocantins"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-5 z-10">
                <p className="text-base font-display font-bold text-gold">Palmas, Tocantins</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card overflow-hidden rounded-2xl aspect-[3/4] mt-12 relative group"
            >
              <img
                src={heroTeam}
                alt="Equipe UP Comunicação Digital"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-gold/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-5 z-10">
                <p className="text-base font-display font-bold text-gold">Estratégia de Marketing & Branding</p>
              </div>
            </motion.div>
          </div>
          <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-gold/5 to-transparent rounded-3xl blur-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
