import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import { restaurant } from "@/lib/data";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://brasayfuego.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${restaurant.name} | Parrilla Premium y Cocina de Autor en Buenos Aires`,
    template: `%s | ${restaurant.name}`,
  },
  description: restaurant.description,
  keywords: [
    "restaurante premium Buenos Aires",
    "parrilla de autor",
    "carnes premium",
    "restaurante Palermo",
    "reservar restaurante",
    "Brasa & Fuego",
  ],
  authors: [{ name: "Nexora Studio" }],
  creator: "Nexora Studio",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: restaurant.name,
    title: `${restaurant.name} | Sabores que dejan huella`,
    description: restaurant.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: `${restaurant.name} — Experiencia gastronómica premium`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurant.name} | Sabores que dejan huella`,
    description: restaurant.description,
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  image:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  description: restaurant.description,
  servesCuisine: ["Argentina", "Parrilla", "Cocina de autor"],
  priceRange: "$$$",
  telephone: restaurant.phoneDisplay,
  email: restaurant.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address,
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "19:30",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "19:30",
      closes: "01:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:30",
      closes: "16:00",
    },
  ],
  sameAs: [restaurant.instagramUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${manrope.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
