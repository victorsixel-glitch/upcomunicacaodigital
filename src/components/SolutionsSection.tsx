import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, Briefcase, Palette, Camera, ClipboardCheck, Rocket, Globe } from "lucide-react";

const services = [
  { icon: Briefcase, title: "Consultoria em Marketing & Gestão de redes", category: "Estratégia & Gestão", desc: "A estratégia é o ponto de partida para qualquer resultado sólido. Oferecemos consultoria personalizada em marketing e gestão de redes sociais para potencializar sua presença digital." },
  { icon: Palette, title: "Branding & identidade visual", category: "Marca e Posicionamento", desc: "Marca não é só logotipo, é percepção. Desenvolvemos branding e identidade visual para transmitir os valores da sua empresa de forma clara, forte e memorável." },
  { icon: Camera, title: "Conteúdo, Filmmaker & fotografia", category: "Conteúdo & Produção", desc: "Conteúdo é o que conecta marcas a pessoas. Produzimos fotos, vídeos e materiais criativos que destacam a essência da sua empresa com narrativas visuais envolventes." },
  { icon: ClipboardCheck, title: "Consultoria & Auditoria para Empresas", category: "Estratégia & Gestão", desc: "Empresários e marcas precisam de direção estratégica. Oferecemos consultoria em negócios e auditoria de marketing para identificar oportunidades e traçar caminhos eficientes." },
  { icon: Rocket, title: "Lançamentos de Produtos & Serviços", category: "Marca e Posicionamento", desc: "Lançar é criar movimento. Planejamos e executamos lançamentos que posicionam seus produtos no mercado de forma criativa e estratégica." },
  { icon: Globe, title: "Sites & Manutenção", category: "Digital & Tecnologia", desc: "Um site bem estruturado é a vitrine digital da sua empresa. Criamos sites responsivos, seguros e otimizados para gerar credibilidade e potencializar vendas." },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="solucoes" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-dark-card/50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4 text-base">O QUE FAZEMOS</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
            Soluções para sua marca
          </h2>
        </motion.div>

        {/* Accordion-style numbered list */}
        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isOpen = active === i;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className={`w-full text-left group rounded-2xl border transition-all duration-500 overflow-hidden ${
                    isOpen
                      ? "glass-card border-gold/30 shadow-[0_0_30px_rgba(255,215,0,0.08)]"
                      : "glass-card border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)]"
                  }`}
                >
                  <div className="flex items-center gap-6 p-6 md:p-8">
                    <span className="text-3xl font-display font-extrabold text-gold/30 group-hover:text-gold/60 transition-colors min-w-[3rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-display font-bold truncate">{service.title}</h3>
                      <p className="text-gold/70 font-body text-sm">{service.category}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? "rotate-90" : ""}`} />
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pl-[7.5rem]">
                          <p className="text-muted-foreground font-body text-base leading-relaxed">{service.desc}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
