import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { number: "01", title: "Consultoria em Marketing & Gestão de redes", category: "Estratégia & Gestão", desc: "A estratégia é o ponto de partida para qualquer resultado sólido. Oferecemos consultoria personalizada em marketing e gestão de redes sociais para potencializar sua presença digital." },
  { number: "02", title: "Branding & identidade visual", category: "Marca e Posicionamento", desc: "Marca não é só logotipo, é percepção. Desenvolvemos branding e identidade visual para transmitir os valores da sua empresa de forma clara, forte e memorável." },
  { number: "03", title: "Conteúdo, Filmmaker & fotografia", category: "Conteúdo & Produção", desc: "Conteúdo é o que conecta marcas a pessoas. Produzimos fotos, vídeos e materiais criativos que destacam a essência da sua empresa com narrativas visuais envolventes." },
  { number: "04", title: "Consultoria & Auditoria para Empresas", category: "Estratégia & Gestão", desc: "Empresários e marcas precisam de direção estratégica. Oferecemos consultoria em negócios e auditoria de marketing para identificar oportunidades e traçar caminhos eficientes." },
  { number: "05", title: "Lançamentos de Produtos & Serviços", category: "Marca e Posicionamento", desc: "Lançar é criar movimento. Planejamos e executamos lançamentos que posicionam seus produtos no mercado de forma criativa e estratégica." },
  { number: "06", title: "Sites & Manutenção", category: "Digital & Tecnologia", desc: "Um site bem estruturado é a vitrine digital da sua empresa. Criamos sites responsivos, seguros e otimizados para gerar credibilidade e potencializar vendas." },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="glass-card p-10 rounded-2xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.06)] transition-all duration-500 h-full relative overflow-hidden">
                <span className="outline-number top-2 right-4 text-[7rem]">{service.number}</span>
                <div className="relative z-10">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-[rgba(255,255,255,0.15)] text-foreground font-display font-bold text-base mb-6">
                    {service.number}
                  </span>
                  <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-gold font-body text-sm italic mb-4">{service.category}</p>
                  <p className="text-muted-foreground font-body text-base leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
