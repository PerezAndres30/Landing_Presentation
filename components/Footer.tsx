import Image from "next/image";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-background">
      <div className="container-x flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <Image src="/img/logo.png" alt="" width={677} height={369} className="h-10 w-auto " />
        <p className="text-sm text-background/75">{site.footer}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-background/30 px-5 text-sm transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            GitHub ↗
          </a>
          <a
            href="#"
            className="inline-flex min-h-11 items-center rounded-full border border-background/30 px-5 text-sm transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}