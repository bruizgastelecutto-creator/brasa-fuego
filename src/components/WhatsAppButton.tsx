"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { restaurant } from "@/lib/data";

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(
        "Hola, quisiera hacer una consulta sobre una reserva en Brasa & Fuego."
      )}`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)]"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </motion.a>
  );
}
