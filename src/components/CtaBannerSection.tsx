import { motion, useInView } from "framer-motion";
import { useRef, useCallback, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/5563984257831?text=Olá! Vim pelo site e gostaria de solicitar um orçamento.";

const CtaBannerSection = () => {
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
    <section className="py-16 md:py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Gold gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold via-[hsl(43,100%,45%)] to-gold" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.1)_0%,transparent_60%)]" />
          
          {/* Decorative grid dots */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground leading-tight mb-4"
              >
                Pronto para levar sua marca ao próximo nível?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-primary-foreground/80 font-body text-lg"
              >
                Fale com a nossa equipe e receba uma proposta personalizada em até 48h.
              </motion.p>
            </div>

            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ padding: "40px", margin: "-40px" }}
              className="shrink-0"
            >
              <motion.a
                ref={btnRef}
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  x: btnOffset.x,
                  y: btnOffset.y,
                  boxShadow: [
                    "0 0 20px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                    "0 0 30px rgba(0,0,0,0.35), 0 0 60px rgba(0,0,0,0.15)",
                    "0 0 20px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
                  ],
                }}
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 15, mass: 0.5 },
                  y: { type: "spring", stiffness: 200, damping: 15, mass: 0.5 },
                  boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary-foreground text-gold font-display font-bold text-lg rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] group"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Falar com a UP
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBannerSection;
