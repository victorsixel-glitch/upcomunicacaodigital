import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Instagram, Mail, Send, Phone } from "lucide-react";
import logoUp from "@/assets/logo-up.png";
import victorSixelDark from "@/assets/victor-sixel-dark.png";
import victorSixelLight from "@/assets/victor-sixel-light.png";

const FooterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-primary-foreground mb-8 leading-tight">
                Pronto para dar o UP que<br />sua marca precisa?
              </h2>
              <p className="text-primary-foreground/70 font-body text-xl mb-10 max-w-xl">
                Preencha o formulário e nossa equipe entrará em contato em até <strong className="text-primary-foreground">48 horas</strong> com uma proposta personalizada.
              </p>
              <a
                href="https://wa.me/5563984257831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-dark text-foreground font-display font-bold text-lg rounded-xl hover:bg-dark-card transition-colors duration-300 shadow-2xl group"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Ou fale direto no WhatsApp
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[rgba(0,0,0,0.15)] backdrop-blur-xl rounded-2xl border border-[rgba(0,0,0,0.1)] p-10"
            >
              <h3 className="text-2xl font-display font-bold text-primary-foreground mb-8">
                Receba um orçamento em até 48h
              </h3>
              <div className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-5 py-4 bg-[rgba(0,0,0,0.2)] border border-[rgba(0,0,0,0.15)] rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 font-body text-base focus:outline-none focus:border-primary-foreground/40 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-5 py-4 bg-[rgba(0,0,0,0.2)] border border-[rgba(0,0,0,0.15)] rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 font-body text-base focus:outline-none focus:border-primary-foreground/40 transition-colors"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  className="w-full px-5 py-4 bg-[rgba(0,0,0,0.2)] border border-[rgba(0,0,0,0.15)] rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 font-body text-base focus:outline-none focus:border-primary-foreground/40 transition-colors resize-none"
                />
                <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-dark text-foreground font-display font-bold text-base rounded-xl hover:bg-dark-card hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 group">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Enviar Solicitação
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-dark py-16 border-t border-[rgba(255,255,255,0.05)]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src={logoUp} alt="UP Comunicação" className="h-12 w-auto mb-4" />
              <p className="text-base text-muted-foreground font-body leading-relaxed">
                Agência de comunicação digital premium.<br />Palmas, TO · Atuação nacional.
              </p>
            </div>
            <div>
              <h4 className="text-base font-display font-semibold mb-5 text-foreground">Links</h4>
              <nav className="flex flex-col gap-3">
                {["Início", "Agência", "Serviços", "Portfólio"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-base text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 font-body">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-base font-display font-semibold mb-5 text-foreground">Contato</h4>
              <a href="mailto:upcomunicacaopmw@gmail.com" className="flex items-center gap-2 text-base text-muted-foreground font-body mb-3 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-gold" />
                upcomunicacaopmw@gmail.com
              </a>
              <a href="https://wa.me/5563984257831" className="flex items-center gap-2 text-base text-muted-foreground font-body hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                (63) 98425-7831
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[rgba(255,255,255,0.05)] gap-4">
            <p className="text-sm text-muted-foreground font-body">
              © 2025 UP Comunicação Digital. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/upcomunicacaopmw/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:upcomunicacaopmw@gmail.com"
                className="w-11 h-11 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Victor Sixel credit */}
          <div className="flex flex-col items-center justify-center mt-10 pt-6 border-t border-[rgba(255,255,255,0.03)]">
            <p className="text-xs text-muted-foreground/60 font-body mb-2">Pensado e desenvolvido por</p>
            <img
              src={victorSixelDark}
              alt="Victor Sixel - Designer Gráfico"
              className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ filter: "invert(1)" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
