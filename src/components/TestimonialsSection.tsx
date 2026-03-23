import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Carlos Mendes", role: "CEO, TechStart", text: "A UP transformou completamente nossa presença digital. Em 6 meses, triplicamos nosso engajamento e dobramos as conversões." },
  { name: "Ana Beatriz", role: "Diretora, Viva Tocantins", text: "Profissionalismo e criatividade em outro nível. A identidade visual que criaram para nós superou todas as expectativas." },
  { name: "Roberto Silva", role: "Fundador, Tchê Burguer", text: "Do branding ao packaging, a UP entendeu exatamente o que precisávamos. Nosso faturamento cresceu 40% após o rebranding." },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle mb-3">DEPOIMENTOS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            O que nossos clientes <span className="text-gold">dizem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group"
            >
              <div className="glass-card p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] hover:border-gold/20 hover:shadow-[0_0_25px_rgba(255,215,0,0.06)] transition-all duration-500 h-full relative overflow-hidden">
                <Quote className="w-8 h-8 text-gold/20 mb-4 group-hover:text-gold/40 transition-colors duration-500" />
                <p className="text-foreground/90 font-body text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold font-display font-bold text-sm">{t.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <div>
                    <p className="text-sm font-display font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground font-body">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
