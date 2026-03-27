import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronRight, Briefcase, Palette, Camera, ClipboardCheck, Rocket, Globe, MessageCircle } from "lucide-react";

const services = [
  { icon: Briefcase, title: "Consultoria em Marketing & Gestão de redes", category: "Estratégia & Gestão", desc: "A estratégia é o ponto de partida para qualquer resultado sólido. Oferecemos consultoria personalizada em marketing e gestão de redes sociais para potencializar sua presença digital." },
  { icon: Palette, title: "Branding & identidade visual", category: "Marca e Posicionamento", desc: "Marca não é só logotipo, é percepção. Desenvolvemos branding e identidade visual para transmitir os valores da sua empresa de forma clara, forte e memorável." },
  { icon: Camera, title: "Conteúdo, Filmmaker & fotografia", category: "Conteúdo & Produção", desc: "Conteúdo é o que conecta marcas a pessoas. Produzimos fotos, vídeos e materiais criativos que destacam a essência da sua empresa com narrativas visuais envolventes." },
  { icon: ClipboardCheck, title: "Consultoria & Auditoria para Empresas", category: "Estratégia & Gestão", desc: "Empresários e marcas precisam de direção estratégica. Oferecemos consultoria em negócios e auditoria de marketing para identificar oportunidades e traçar caminhos eficientes." },
  { icon: Rocket, title: "Lançamentos de Produtos & Serviços", category: "Marca e Posicionamento", desc: "Lançar é criar movimento. Planejamos e executamos lançamentos que posicionam seus produtos no mercado de forma criativa e estratégica." },
  { icon: Globe, title: "Sites & Manutenção", category: "Digital & Tecnologia", desc: "Um site bem estruturado é a vitrine digital da sua empresa. Criamos sites responsivos, seguros e otimizados para gerar credibilidade e potencializar vendas." },
];

const ServiceItem = ({ service, i, isOpen, toggle }: { service: typeof services[0]; i: number; isOpen: boolean; toggle: () => void }) => {
  const itemRef = useRef(null);
  const inView = useInView(itemRef, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
    >
      <button
        onClick={toggle}
        className={`w-full text-left group rounded-2xl border transition-all duration-500 overflow-hidden ${
          isOpen
            ? "glass-card border-gold/30 shadow-[0_0_30px_rgba(255,215,0,0.08)]"
            : "glass-card border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)]"
        }`}
      >
        <div className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 md:p-8">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-gold/30 group-hover:text-gold/60 transition-colors min-w-[2.5rem] sm:min-w-[3rem]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg md:text-xl font-display font-bold truncate">{service.title}</h3>
            <p className="text-gold/70 font-body text-xs sm:text-sm">{service.category}</p>
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
              <div className="px-5 pb-6 sm:px-8 sm:pb-8 pl-[4.5rem] sm:pl-[7.5rem]">
                <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
};

const WA_URL = "https://wa.me/5563984257831?text=Olá! Vim pelo site e gostaria de solicitar um orçamento.";

const SolutionsCTAButton = ({ inView }: { inView: boolean }) => {
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
  const handleMouseLeave = useCallback(() => setBtnOffset({ x: 0, y: 0 }), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="text-center mt-12"
    >
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
              "0 0 20px rgba(255,215,0,0.3), 0 0 40px rgba(255,215,0,0.15)",
              "0 0 30px rgba(255,215,0,0.5), 0 0 60px rgba(255,215,0,0.25)",
              "0 0 20px rgba(255,215,0,0.3), 0 0 40px rgba(255,215,0,0.15)",
            ],
          }}
          transition={{
            x: { type: "spring", stiffness: 200, damping: 15, mass: 0.5 },
            y: { type: "spring", stiffness: 200, damping: 15, mass: 0.5 },
            boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-primary-foreground font-display font-bold text-lg rounded-xl group"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          Solicitar Orçamento
        </motion.a>
      </div>
    </motion.div>
  );
};

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  // Auto-open all items cumulatively on scroll
  useEffect(() => {
    if (inView) {
      services.forEach((_, i) => {
        setTimeout(() => {
          setOpenItems(prev => new Set([...prev, i]));
        }, i * 300);
      });
    }
  }, [inView]);

  const toggle = (i: number) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="solucoes" className="py-24 md:py-32 relative" ref={ref}>
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

        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service, i) => (
            <ServiceItem
              key={service.title}
              service={service}
              i={i}
              isOpen={openItems.has(i)}
              toggle={() => toggle(i)}
            />
          ))}
        </div>

        <SolutionsCTAButton inView={inView} />
      </div>
    </section>
  );
};

export default SolutionsSection;
