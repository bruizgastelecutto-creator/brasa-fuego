import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { restaurant, hours } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-background pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#inicio" className="font-serif text-2xl font-bold">
              Brasa <span className="text-gold">&amp;</span> Fuego
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Cocina de fuego vivo y experiencia gastronómica de autor en el corazón
              de Buenos Aires.
            </p>
            <a
              href={restaurant.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold hover:text-gold"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold">Horarios</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-foreground/70">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold">Ubicación</h4>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              {restaurant.address}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`tel:${restaurant.phoneHref}`}
                  className="flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Phone size={16} /> {restaurant.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurant.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Mail size={16} /> {restaurant.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Brasa & Fuego. Todos los derechos reservados.</p>
          <p>
            Diseño y desarrollo por{" "}
            <span className="font-medium text-gold">Nexora Studio</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
