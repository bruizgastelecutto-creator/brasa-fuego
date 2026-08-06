"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { specialties } from "@/lib/data";

export function Specialties() {
  return (
    <section id="especialidades" className="relative bg-background-alt py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Lo Más Pedido"
          title="Nuestras Especialidades"
          description="Los platos que definen a Brasa & Fuego, elegidos por nuestros comensales una y otra vez."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {specialties.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-7 transition-transform duration-500 ease-out group-hover:translate-y-0 sm:p-8">
                <h3 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                  {dish.name}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-500 ease-out group-hover:max-h-24 group-hover:opacity-100 sm:text-base">
                  {dish.description}
                </p>
              </div>
              <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
