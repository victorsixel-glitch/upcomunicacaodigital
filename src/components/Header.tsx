import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Agência", href: "#sobre" },
  { label: "Serviços", href: "#solucoes" },
  { label: "Portfólio", href: "#portfolio" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card border-b border-[rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#inicio" className="group flex items-center gap-2">
          <span className="text-2xl font-display font-extrabold text-foreground transition-all duration-300 group-hover:text-gold">
            UP
          </span>
          <span className="text-xs font-body text-muted-foreground hidden sm:block">
            Comunicação Digital
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gold after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#orcamento"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-gold text-primary-foreground font-display font-semibold text-sm rounded-lg btn-magnetic hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300"
        >
          Orçamento
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card mx-4 mb-4 p-6 rounded-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#orcamento"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 text-center px-6 py-2.5 bg-gold text-primary-foreground font-display font-semibold rounded-lg"
          >
            Orçamento
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
