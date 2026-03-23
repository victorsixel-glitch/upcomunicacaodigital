import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import vivaTocantins from "@/assets/clients/viva-tocantins.png";
import llSantana from "@/assets/clients/ll-santana.png";
import toemdia from "@/assets/clients/toemdia.png";
import tcheBurguer from "@/assets/clients/tche-burguer.png";
import gigante from "@/assets/clients/gigante.png";
import firstClass from "@/assets/clients/first-class.png";
import aee from "@/assets/clients/aee.png";
import client8 from "@/assets/clients/client-8.png";
import client9 from "@/assets/clients/client-9.png";

const clientLogos = [
  { src: vivaTocantins, alt: "Viva Tocantins" },
  { src: llSantana, alt: "L&L Santana" },
  { src: toemdia, alt: "Toemdia" },
  { src: tcheBurguer, alt: "Tchê Burguer" },
  { src: gigante, alt: "Gigante Atacadista" },
  { src: firstClass, alt: "First Class Home" },
  { src: aee, alt: "AEE" },
  { src: client8, alt: "Cliente" },
  { src: client9, alt: "Cliente" },
];

const MarqueeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-14 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-subtitle mb-3">NOSSOS CLIENTES</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold">
            Marcas que confiam no nosso <span className="text-gold">UP</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-10 flex items-center justify-center h-20 px-6 opacity-40 hover:opacity-100 hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.4)] transition-all duration-500 cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
