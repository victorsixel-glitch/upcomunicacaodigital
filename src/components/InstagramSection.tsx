import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, ArrowUpRight } from "lucide-react";

const InstagramSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.a
          href="https://www.instagram.com/upcomunicacaopmw/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="group block glass-card border border-border hover:border-gold/30 rounded-2xl p-10 md:p-14 text-center relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,215,0,0.08)]"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
              <Instagram className="w-8 h-8 text-gold" />
            </div>

            <div>
              <p className="section-subtitle mb-3 text-sm">ACOMPANHE NOSSO TRABALHO</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3">
                Siga a <span className="text-gold">@upcomunicacaopmw</span>
              </h3>
              <p className="text-muted-foreground font-body text-base max-w-lg mx-auto">
                Bastidores, cases, dicas e tudo sobre comunicação digital premium.
              </p>
            </div>

            <span className="inline-flex items-center gap-2 text-gold font-display font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              Seguir no Instagram
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default InstagramSection;
