import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Marcas Atendidas" },
  { value: 50, suffix: "+", label: "Projetos Entregues por Ano" },
  { value: 98, suffix: "%", label: "de Retenção de Clientes" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-5xl sm:text-6xl font-display font-extrabold text-gold">
      {count}{suffix}
    </span>
  );
};

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  };

  const resetTilt = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={resetTilt}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-3">RESULTADOS QUE FALAM</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Números que constroem confiança
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <TiltCard>
                <div className="glass-card p-8 sm:p-10 text-center rounded-2xl border border-[rgba(255,215,0,0.1)] hover:border-[rgba(255,215,0,0.3)] transition-colors duration-500">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="mt-3 text-muted-foreground font-body text-base">{stat.label}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
export { TiltCard };
