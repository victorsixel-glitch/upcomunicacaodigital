import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Instagram, Linkedin, Mail, Send } from "lucide-react";

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
      <section id="orcamento" className="py-20 md:py-28 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.1)_0%,transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: CTA text */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground mb-6 leading-tight">
                Pronto para dar o UP que<br />sua marca precisa?
              </h2>
              <p className="text-primary-foreground/70 font-body text-lg mb-8 max-w-xl">
                Preencha o formulário e nossa equipe entrará em contato em até <strong className="text-primary-foreground">48 horas</strong> com uma proposta personalizada.
              </p>
              <a
                href="https://wa.me/5563999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-dark text-foreground font-display font-bold text-base rounded-xl hover:bg-dark-card transition-colors duration-300 shadow-2xl group"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Ou fale direto no WhatsApp
              </a>
            </div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[rgba(0,0,0,0.15)] backdrop-blur-xl rounded-2xl border border-[rgba(0,0,0,0.1)] p-8"
            >
              <h3 className="text-xl font-display font-bold text-primary-foreground mb-6">
                Receba um orçamento em até 48h
              </h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 bg-[rgba(0,0,0,0.2)] border border-[rgba(0,0,0,0.15)] rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:border-primary-foreground/40 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 bg-[rgba(0,0,0,0.2)] border border-[rgba(0,0,0,0.15)] rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:border-primary-foreground/40 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar?"
                    rows={3}
                    className="w-full px-4 py-3 bg-[rgba(0,0,0,0.2)] border border-[rgba(0,0,0,0.15)] rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:border-primary-foreground/40 transition-colors resize-none"
                  />
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-dark text-foreground font-display font-bold text-sm rounded-xl hover:bg-dark-card hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 group">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              <span className="text-2xl font-display font-extrabold text-foreground">UP</span>
              <p className="text-sm text-muted-foreground mt-3 font-body leading-relaxed">
                Agência de comunicação digital premium.<br />Palmas, TO · Atuação nacional.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-display font-semibold mb-4 text-foreground">Links</h4>
              <nav className="flex flex-col gap-2">
                {["Início", "Agência", "Serviços", "Portfólio"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 font-body">
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-sm font-display font-semibold mb-4 text-foreground">Contato</h4>
              <p className="text-sm text-muted-foreground font-body mb-2">contato@upcomunicacao.com.br</p>
              <p className="text-sm text-muted-foreground font-body">(63) 99999-9999</p>
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
                  className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:-translate-y-1 transition-all duration-300"
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
