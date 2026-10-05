import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/content";
import { HydrationFlag } from "@/components/HydrationFlag";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const interTight = localFont({
  src: "./fonts/inter-tight-latin-wght-normal.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: { icon: "/img/logo-dark.png" },
};

export const viewport: Viewport = { themeColor: "#fff7ed" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${interTight.variable}`}>
      <head>
        {/* Reveal-on-scroll styles apply only while JS is alive; if React hasn't hydrated in 2.5 s, show everything. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var d=document.documentElement;d.classList.add('js');setTimeout(function(){if(!window.__hydrated)d.classList.remove('js')},2500)",
          }}
        />
      </head>
      <body>
        <HydrationFlag />
        {children}
      </body>
    </html>
  );
}
