# Portafolio · Andrés Pérez

Next.js (App Router) + TypeScript + Tailwind CSS v4. Estilo inspirado en la plantilla Portavia (Indesight / Craftwork).

## Uso
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

> **Si abres el dev server desde otra IP** (p. ej. `http://192.168.56.1:3000`): `next.config.ts` ya incluye `allowedDevOrigins` para redes locales. Si tu IP es otra, agrégala ahí y reinicia `npm run dev`. Sin ese permiso Next bloquea sus scripts y la página no se activa. Aun así, el contenido nunca queda oculto: si React no carga en 2.5 s, se muestra todo sin animaciones.

## Estructura
- `lib/content.ts` – todo el texto y los datos (edita aquí tu contenido).
- `components/` – una sección por archivo (Header, Hero, Skills, Projects, Events, Certifications, Footer) + `FloatingCard`/`CardSlot` (tarjeta viajera), `Reveal`, `SplitWords`.
- Para cambiar las paradas o el ángulo: props `rot` de cada `<CardSlot>`.
- `app/globals.css` – tokens (colores, tipografía, easing, duraciones) con `@theme`.
- `public/img/` – imágenes optimizadas (logo, foto, Expociencia, logos de tecnologías).

## Decisiones de contenido
- Animación del hero: tu **logo** y tu **foto** caen al cargar y siguen bajando con parallax al hacer scroll. Todo el texto es visible desde el primer instante.
- **Proyectos**: filas solo de texto, sin imágenes.
- **Expociencia**: foto del evento (`public/img/expociencia.jpg`).

## Fuentes
Inter y Inter Tight (variables, autoalojadas con `next/font/local`). Son sustitutos libres: no pude leer los estilos de Portavia.

## Inventario de movimiento
| Dónde | Disparador | Qué hace | Cómo |
|---|---|---|---|
| Tarjeta viajera (foto ↔ logo) | scroll (≥1024 px) | una sola tarjeta fija te sigue: reposa en el hero (foto) y en Lenguajes (logo); entre paradas se desliza, se inclina y se voltea (se ve de canto a 90°). Después sale de pantalla con la sección y no vuelve a aparecer | `FloatingCard` + `CardSlot`: rAF, `transform`/`opacity`, perspectiva 3D en CSS |
| Hero – textos | carga | suben en cascada (90 ms) | CSS keyframes con `backwards` (nunca quedan ocultos) |
| Títulos de sección | entrar al viewport (15 %) | palabra por palabra, 70 ms | CSS + IntersectionObserver |
| Tarjetas / filas | entrar al viewport | fade + subida, stagger 80 ms, 800 ms `cubic-bezier(.16,1,.3,1)` | CSS + IO |
| Foto Expociencia | entrar al viewport | revelado con `clip-path`; zoom en hover | CSS |
| Hovers | hover/focus | lift, desplazamiento, zoom 220–300 ms | CSS |
| Menú móvil | click | abre/cierra, foco atrapado, Escape | React |

`prefers-reduced-motion`: se mantienen los fades y se quita el movimiento. Sin JavaScript el contenido es visible.

## Pendiente / diferencias
- No pude abrir portavia.framer.website desde el entorno de build (403), así que fuentes, valores exactos y animaciones se aproximaron desde su estructura de contenido. Paleta cálida propia: crema, coral y ciruela (tokens en `app/globals.css`).
- Portavia tiene secciones (testimonios, FAQ, blog, formulario) que no existen en tu contenido; no se agregaron.
