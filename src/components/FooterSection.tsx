import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Instagram, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [email, setEmail] = useState("");

  return (
    <footer ref={ref}>
      {/* CTA Band */}
      <section id="orcamento" className="py-20 md:py-28 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.1)_0%,transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground mb-6 leading-tight">
            Pronto para dar o UP que<br />sua marca precisa?
          </h2>
          <p className="text-primary-foreground/70 font-body text-lg mb-10 max-w-xl mx-auto">
            Fale com a nossa equipe e descubra como podemos elevar o seu negócio.
          </p>
          <a
            href="https://wa.me/5563999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-dark text-foreground font-display font-bold text-base rounded-xl hover:bg-dark-card transition-colors duration-300 shadow-2xl"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-dark py-16 border-t border-[rgba(255,255,255,0.05)]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="text-2xl font-display font-extrabold text-foreground">UP</span>
              <p className="text-sm text-muted-foreground mt-3 font-body leading-relaxed">
                Agência de comunicação digital premium.<br />Palmas, TO · Atuação nacional.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-display font-semibold mb-4 text-foreground">Links</h4>
              <nav className="flex flex-col gap-2">
                {["Início", "Agência", "Serviços", "Portfólio"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm font-display font-semibold mb-4 text-foreground">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="flex-1 px-4 py-2.5 bg-transparent border-b border-[rgba(255,255,255,0.15)] text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                />
                <button className="px-5 py-2.5 bg-gold text-primary-foreground font-display font-semibold text-sm rounded-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all">
                  Enviar
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[rgba(255,255,255,0.05)] gap-4">
            <p className="text-xs text-muted-foreground font-body">
              © 2026 UP Comunicação Digital. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
