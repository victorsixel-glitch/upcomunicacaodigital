import { motion } from "framer-motion";
import { useRef, useCallback } from "react";

const HeroSection = () => {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (btnRef.current) btnRef.current.style.transform = "translate(0, 0)";
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,215,0,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,215,0,0.03)_0%,transparent_50%)]" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mb-4"
          >
            BRANDING · FILMMAKER · PERFORMANCE
          </motion.p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold leading-[1.05] tracking-[-0.02em] mb-6">
            Sua agência de alta performance em{" "}
            <span className="text-gold">Palmas</span>, pronta para o{" "}
            <span className="text-gold">Brasil</span>.
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mb-10 font-body">
            Construímos marcas com estratégia, criatividade e dados.
            Da identidade visual à performance digital, elevamos o seu negócio.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              ref={btnRef}
              href="#orcamento"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="inline-flex items-center px-8 py-4 bg-gold text-primary-foreground font-display font-bold text-base rounded-xl btn-magnetic hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-300"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center px-8 py-4 border border-[rgba(255,255,255,0.2)] text-foreground font-display font-semibold text-base rounded-xl glass-card hover:border-[rgba(255,255,255,0.4)] transition-all duration-300"
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
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card overflow-hidden rounded-2xl aspect-[3/4] relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-display font-extrabold text-gold/20">UP</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs text-muted-foreground font-body">Palmas, Tocantins</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card overflow-hidden rounded-2xl aspect-[3/4] mt-12 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-gold/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-gold/30 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gold/40 rounded-full" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs text-muted-foreground font-body">Filmmaker & Estúdio</p>
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
