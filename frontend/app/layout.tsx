import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";

import NavBar from "@/Components/assets/NavBar/HeaderContent";
import Cursor from "@/Components/assets/utils/cursor/Cursor";

import "@/app/globals.css";

// ------------------
//     FONTS
// ------------------

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-merriweather",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

// ------------------
//     METADATA SEO
// ------------------

export const metadata: Metadata = {
  metadataBase: new URL("https://lusmo-portfolio.vercel.app"),

  title: {
    default: "Lusmo Dev - Portfolio Développeur Full Stack",
    template: "%s | Lusmo Dev",
  },

  description:
    "Portfolio de Lusmo Dev, développeur Full Stack spécialisé en React, Next.js, TypeScript et Node.js. Découvrez mes projets et compétences en développement web moderne.",

  keywords: [
    "développeur",
    "full stack",
    "react",
    "next.js",
    "typescript",
    "portfolio",
    "web developer",
    "lusmo",
  ],

  authors: [{ name: "Lusmo Dev", url: "https://lusmo-portfolio.vercel.app" }],
  creator: "Lusmo Dev",
  publisher: "Lusmo Dev",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lusmo-portfolio.vercel.app",
    siteName: "Lusmo Dev Portfolio",
    title: "Lusmo Dev - Portfolio Développeur Full Stack",
    description:
      "Portfolio de Lusmo Dev, développeur Full Stack spécialisé en React, Next.js, TypeScript et Node.js.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lusmo Dev Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lusmo Dev - Portfolio Développeur Full Stack",
    description:
      "Portfolio de Lusmo Dev, développeur Full Stack spécialisé en React, Next.js, TypeScript et Node.js.",
    creator: "@lusmo_dev",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "votre-code-google-search-console",
  },
};

// ------------------
//     ROOT LAYOUT
// ------------------

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${merriweather.variable} ${roboto.variable} ${poppins.variable}`}
    >
      <body className="antialiased">
        <Cursor />
        <NavBar />

        {children}
      </body>
    </html>
  );
}
