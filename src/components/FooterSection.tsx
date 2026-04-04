import { motion, useInView } from "framer-motion";
import { useRef, useCallback, useState } from "react";
import { MessageCircle, Instagram, Mail, Phone, MousePointerClick } from "lucide-react";
import logoUp from "@/assets/logo-up.png";
import victorSixelAvatar from "@/assets/victor-sixel-avatar.png";

const WA_URL = "https://wa.me/5563984257831?text=Olá! Vim pelo site e gostaria de solicitar um orçamento.";

const FooterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
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
    <footer ref={ref}>
      {/* CTA Band */}
      <section id="orcamento" className="py-24 md:py-32 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.1)_0%,transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold text-primary-foreground mb-8 leading-tight">
              Pronto para dar o UP que sua marca precisa?
            </h2>
            <p className="text-primary-foreground/70 font-body text-xl mb-12 max-w-xl mx-auto">
              Fale direto com nossa equipe pelo WhatsApp e receba uma proposta personalizada em até <strong className="text-primary-foreground">48 horas</strong>.
            </p>
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ padding: "40px", margin: "-40px" }}
              className="inline-block"
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
                className="inline-flex items-center gap-3 px-12 py-6 bg-dark text-white font-display font-bold text-lg rounded-xl group"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Falar no WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer - always dark */}
      <div className="bg-dark py-16 border-t border-[rgba(255,255,255,0.05)]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src={logoUp} alt="UP Comunicação" className="h-12 w-auto mb-4" />
              <p className="text-base text-zinc-400 font-body leading-relaxed mb-6">
                Agência de comunicação digital premium.<br />Palmas, TO · Atuação nacional.
              </p>
              {/* Victor Sixel credit - right below description */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <p className="text-xs text-zinc-500 font-body mb-3">Pensado e desenvolvido por</p>
                <a
                  href="https://vsixel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:opacity-100 opacity-70 transition-opacity duration-300"
                >
                  <img
                    src={victorSixelAvatar}
                    alt="Victor Sixel - Designer Gráfico"
                    className="h-16 w-16 object-contain invert rounded-full"
                  />
                  <span className="text-base text-zinc-400 font-display font-semibold">Victor Sixel</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-base font-display font-semibold mb-5 text-white">Links</h4>
              <nav className="flex flex-col gap-3">
                {["Início", "Agência", "Serviços", "Portfólio"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-base text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 font-body">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-base font-display font-semibold mb-5 text-white">Contato</h4>
              <a href="mailto:upcomunicacaopmw@gmail.com" className="flex items-center gap-2 text-base text-zinc-400 font-body mb-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-gold" />
                upcomunicacaopmw@gmail.com
              </a>
              <a href="https://wa.me/5563984257831" className="flex items-center gap-2 text-base text-zinc-400 font-body mb-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                (63) 98425-7831
              </a>
              <a href="https://www.instagram.com/upcomunicacaopmw/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base text-zinc-400 font-body hover:text-white transition-colors">
                <Instagram className="w-4 h-4 text-gold" />
                @upcomunicacaopmw
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[rgba(255,255,255,0.05)] gap-4">
            <p className="text-sm text-zinc-500 font-body">
              © 2025 UP Comunicação Digital. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/upcomunicacaopmw/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-zinc-400 hover:text-gold hover:border-gold/40 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:upcomunicacaopmw@gmail.com"
                className="w-11 h-11 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-zinc-400 hover:text-gold hover:border-gold/40 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
