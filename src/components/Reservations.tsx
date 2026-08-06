"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Clock, Loader2, Phone, User, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { restaurant } from "@/lib/data";

const timeSlots = [
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
];

type Status = "idle" | "loading" | "success" | "error";

export function Reservations() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
  });

  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="reservas" className="relative overflow-hidden bg-background py-28 sm:py-36">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-ember/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <Container>
        <SectionHeading
          eyebrow="Reservas"
          title="Reservá tu mesa"
          description="Completá el formulario y nuestro equipo confirmará tu reserva a la brevedad."
        />

        <div className="mt-16 grid gap-10 overflow-hidden rounded-3xl border border-line bg-surface/40 lg:grid-cols-2">
          <div className="relative hidden min-h-[500px] lg:block">
            <Image
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
              alt="Salón principal de Brasa & Fuego listo para recibir comensales"
              fill
              sizes="50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 space-y-4 text-white">
              <p className="font-serif text-2xl italic">
                &ldquo;El detalle está en cada mesa.&rdquo;
              </p>
              <div className="h-px w-16 bg-gold" />
              <p className="text-sm text-white/70">{restaurant.address}</p>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <CheckCircle2 className="text-gold" size={56} />
                <h3 className="font-serif text-2xl font-semibold">¡Reserva enviada!</h3>
                <p className="max-w-sm text-muted">
                  Gracias {form.name || ""}, recibimos tu solicitud para {form.guests}{" "}
                  persona(s) el {form.date} a las {form.time}. Te contactaremos al{" "}
                  {form.phone} para confirmarla.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", phone: "", guests: "2", date: "", time: "" });
                  }}
                  className="mt-4 text-sm font-medium text-gold underline underline-offset-4 hover:text-gold-light"
                >
                  Hacer otra reserva
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Field
                  icon={<User size={18} />}
                  label="Nombre completo"
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Tu nombre"
                />
                <Field
                  icon={<Phone size={18} />}
                  label="Teléfono"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  placeholder="+54 9 11 0000-0000"
                />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-muted">
                      <Users size={18} /> Personas
                    </label>
                    <select
                      required
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "persona" : "personas"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-muted">
                      <Clock size={18} /> Hora
                    </label>
                    <select
                      required
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                    >
                      <option value="" disabled>
                        Elegir
                      </option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-muted">
                    <CalendarDays size={18} /> Fecha
                  </label>
                  <input
                    required
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold [color-scheme:dark]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-copper via-ember to-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_8px_30px_rgba(203,162,96,0.25)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(203,162,96,0.45)] hover:scale-[1.01] disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="animate-spin" size={18} /> Enviando...
                    </>
                  ) : (
                    "Reservar"
                  )}
                </button>

                {status === "error" && (
                  <p className="text-center text-sm text-ember">
                    Ocurrió un error. Por favor, intentá nuevamente.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  icon,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-muted">
        {icon} {label}
      </label>
      <input
        required={required}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
