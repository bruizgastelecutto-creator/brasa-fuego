"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, ChefHat, Users, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    description:
      "Trabajamos con productores locales que seleccionan lo mejor de cada estación.",
  },
  {
    icon: ChefHat,
    title: "Cocina Artesanal",
    description:
      "Cada plato se elabora a mano, con técnicas de fuego vivo y tiempos de cocción precisos.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description:
      "Un equipo dedicado a que cada visita se sienta única, de principio a fin.",
  },
  {
    icon: Sparkles,
    title: "Ambiente Exclusivo",
    description:
      "Un espacio diseñado para las grandes ocasiones y los encuentros memorables.",
  },
];

export function About() {
  return (
    <section id="sobre-nosotros" className="relative bg-background-alt py-28 sm:py-36">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
                alt="Chef preparando ingredientes frescos en la cocina de Brasa & Fuego"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden w-48 rounded-xl border border-gold/20 bg-background/90 p-6 backdrop-blur-md sm:block">
              <p className="font-serif text-4xl font-bold text-gold">12+</p>
              <p className="mt-1 text-sm text-muted">años de trayectoria en gastronomía de autor</p>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-start gap-4 text-left"
            >
              <span className="section-eyebrow flex items-center gap-3 text-gold">
                <span className="h-px w-8 bg-gold" />
                Nuestra Historia
              </span>
              <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Una pasión que nació del fuego
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 space-y-4 text-muted"
            >
              <p>
                Brasa & Fuego nació en 2012 del sueño de dos hermanos criados entre
                asados familiares y viajes por las cocinas del mundo. Desde entonces,
                nuestra misión no cambió: honrar el fuego como técnica y como
                encuentro.
              </p>
              <p>
                En nuestra cocina conviven la tradición de la parrilla argentina con
                técnicas contemporáneas, dando lugar a una propuesta de autor que
                sorprende sin perder la calidez de lo casero.
              </p>
              <p>
                Cada corte, cada guarnición y cada copa de vino son elegidos con el
                mismo criterio: ofrecer una experiencia que se recuerde mucho después
                de la última mesa.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl border border-line bg-surface/50 p-8 transition-colors duration-300 hover:border-gold/40"
            >
              <pillar.icon
                className="text-gold transition-transform duration-300 group-hover:scale-110"
                size={28}
              />
              <h3 className="mt-5 font-serif text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
