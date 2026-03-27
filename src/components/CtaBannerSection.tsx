import { motion, useInView } from "framer-motion";
import { useRef, useCallback, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const CtaBannerSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

            <CtaMagneticButton inView={inView} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBannerSection;
