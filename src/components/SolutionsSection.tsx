import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Video, TrendingUp, Globe, PenTool, Megaphone } from "lucide-react";

const services = [
  { icon: Palette, title: "Branding & Identidade Visual", desc: "Construímos identidades visuais memoráveis que posicionam sua marca no mercado.", span: "col-span-1 md:col-span-2" },
  { icon: Video, title: "Filmmaker & Produção", desc: "Vídeos institucionais, reels e conteúdo audiovisual de alta qualidade.", span: "col-span-1" },
  { icon: TrendingUp, title: "Tráfego Pago & Performance", desc: "Campanhas de mídia paga com foco em conversão e ROI otimizado.", span: "col-span-1" },
  { icon: Globe, title: "Web Design & Desenvolvimento", desc: "Sites e landing pages responsivas, rápidas e otimizadas para SEO.", span: "col-span-1 md:col-span-2" },
  { icon: PenTool, title: "Social Media", desc: "Gestão estratégica de redes sociais com conteúdo que engaja e converte.", span: "col-span-1" },
  { icon: Megaphone, title: "Marketing de Conteúdo", desc: "Estratégias de conteúdo que educam, atraem e fidelizam clientes.", span: "col-span-1" },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solucoes" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-3">O QUE FAZEMOS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Soluções para sua marca
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${service.span} group`}
              >
                <div className="glass-card p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,215,0,0.2)] transition-all duration-500 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500" />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-lg font-display font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.desc}</p>
                    <span className="inline-block mt-4 text-sm font-semibold text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Saiba Mais →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
