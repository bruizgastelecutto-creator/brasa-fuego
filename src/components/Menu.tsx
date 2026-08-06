"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { menu } from "@/lib/data";

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const activeCategory = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="relative bg-background py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Nuestra Carta"
          title="Un menú pensado para el fuego"
          description="Ingredientes de estación, cortes seleccionados y una cava pensada para acompañar cada plato."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-2 sm:gap-3">
          {menu.map((category) => (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 sm:px-6 ${
                active === category.id
                  ? "bg-gradient-to-r from-copper via-ember to-gold text-black shadow-lg shadow-gold/20"
                  : "border border-line text-muted hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            key={activeCategory.id + "-image"}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:sticky lg:top-32"
          >
            <Image
              src={activeCategory.image}
              alt={activeCategory.label}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="font-serif text-3xl font-semibold text-white">
                {activeCategory.label}
              </span>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="divide-y divide-line"
            >
              {activeCategory.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-start justify-between gap-6 py-6 first:pt-0"
                >
                  <div>
                    <h3 className="font-serif text-xl font-semibold transition-colors group-hover:text-gold sm:text-2xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-muted sm:text-base">
                      {item.description}
                    </p>
                  </div>
                  <span className="whitespace-nowrap font-serif text-lg font-semibold text-gold sm:text-xl">
                    {item.price}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
