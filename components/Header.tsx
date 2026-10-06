"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes, Tab is trapped inside the open mobile menu.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>("a[href]") ?? []).concat(btnRef.current ? [btnRef.current] : []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
      if (e.key === "Tab") {
        const f = focusables();
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Principal" className="container-x grid h-[72px] grid-cols-[1fr_auto_1fr] items-center">
        <a href="#" aria-label="Inicio" className="group col-start-1 inline-flex min-h-11 items-center justify-self-start">
          <Image
            src="/img/logo-dark.png"
            alt=""
            width={677}
            height={369}
            priority
            className="h-10 w-auto transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:scale-110 group-hover:-rotate-3"
          />
        </a>

        <ul className="col-start-2 hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-full px-4 text-[0.9375rem] text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="col-start-3 flex items-center gap-2 justify-self-end">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-[0.9375rem] font-semibold text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_8px_24px_-8px_rgba(255,122,89,0.55)] active:translate-y-0"
          >
            Contacto
          </a>
          <button
            ref={btnRef}
            type="button"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border md:hidden"
          >
            <span className="relative block h-3 w-5" aria-hidden="true">
              <span className={`absolute left-0 h-0.5 w-5 bg-text-primary transition-transform duration-300 ${open ? "top-[5px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[10px] h-0.5 w-5 bg-text-primary transition-transform duration-300 ${open ? "top-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        ref={panelRef}
        hidden={!open}
        className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
      >
        <ul className="container-x flex flex-col py-4">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-border/60 font-display text-2xl tracking-tight"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
