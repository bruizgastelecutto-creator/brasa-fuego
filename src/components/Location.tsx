"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { restaurant, hours } from "@/lib/data";

export function Location() {
  return (
    <section id="ubicacion" className="relative bg-background-alt py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Visitanos"
          title="Horarios y Ubicación"
          description="Te esperamos en el corazón de Palermo Chico para vivir la experiencia Brasa & Fuego."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-line"
          >
            <iframe
              title="Ubicación de Brasa & Fuego"
              src={restaurant.mapsEmbedSrc}
              width="100%"
              height="100%"
              className="min-h-[420px] w-full grayscale invert-[0.92] contrast-[1.1] lg:min-h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div
              id="horarios"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-2xl border border-line bg-surface/50 p-8"
            >
              <div className="flex items-center gap-3 text-gold">
                <Clock size={20} />
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Horarios de Atención
                </h3>
              </div>
              <ul className="mt-5 divide-y divide-line">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-3 text-sm sm:text-base"
                  >
                    <span className="text-muted">{h.day}</span>
                    <span className="font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              id="contacto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl border border-line bg-surface/50 p-8"
            >
              <div className="flex items-center gap-3 text-gold">
                <MapPin size={20} />
                <h3 className="font-serif text-xl font-semibold text-foreground">Contacto</h3>
              </div>
              <div className="mt-5 space-y-4">
                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-sm text-muted transition-colors hover:text-gold sm:text-base"
                >
                  <MapPin size={18} className="mt-0.5 shrink-0" />
                  {restaurant.address}
                </a>
                <a
                  href={`tel:${restaurant.phoneHref}`}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-gold sm:text-base"
                >
                  <Phone size={18} className="shrink-0" />
                  {restaurant.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${restaurant.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-gold sm:text-base"
                >
                  <MessageCircle size={18} className="shrink-0" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${restaurant.email}`}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-gold sm:text-base"
                >
                  <Mail size={18} className="shrink-0" />
                  {restaurant.email}
                </a>
                <a
                  href={restaurant.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-gold sm:text-base"
                >
                  <InstagramIcon size={18} className="shrink-0" />
                  {restaurant.instagram}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
