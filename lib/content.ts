export type NavItem = { label: string; href: string };
export type Skill = { name: string; src: string; w: number; h: number };
export type Project = { index: string; title: string; description: string; tech: string[] };
export type EventItem = {
  tag: string;
  title: string;
  description: string;
  image: { src: string; alt: string; w: number; h: number };
};
export type Certification = { title: string; issuer: string; year: string };

export const site = {
  name: "Andrés Pérez",
  title: "Andrés Pérez | Desarrollo de software, frontend y UI/UX",
  description:
    "Portafolio de Andrés Pérez, estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital en la Universidad Politécnica de Chiapas. Desarrollo web full stack, diseño de interfaces y proyectos desplegados en AWS.",
  whatsapp:
    "https://wa.me/529681176457?text=Hola%20Andr%C3%A9s,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo",
  github: "https://github.com/PerezAndres30",
  footer: "© 2026 Andrés Pérez. Diseño y desarrollo desde cero.",
};

export const nav: NavItem[] = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Lenguajes", href: "#lenguajes" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Certificaciones", href: "#certificaciones" },
];

export const hero = {
  greeting: "Hola, soy",
  titleLines: ["Andrés", "Pérez"],
  tagline: "Build. Scale. Optimize.",
  description:
    "Estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital en la Universidad Politécnica de Chiapas. Diseño y desarrollo software de punta a punta, desde la interfaz hasta el backend y su despliegue en la nube, y coordino equipos de desarrollo estudiantiles.",
  cta: { label: "Ver mis proyectos", href: "#proyectos" },
  logoAlt: "Logotipo de Andrés Pérez",
  photoAlt: "Fotografía de Andrés Pérez",
};

export const skillsSection = {
  eyebrow: "Stack",
  title: "Lenguajes y tecnologías",
};

export const skills: Skill[] = [
  { name: "Java", src: "/img/tech-java.png", w: 194, h: 360 },
  { name: "Python", src: "/img/tech-python.png", w: 342, h: 360 },
  { name: "C++", src: "/img/tech-cpp.png", w: 262, h: 296 },
  { name: "C", src: "/img/tech-c.png", w: 326, h: 360 },
  { name: "HTML", src: "/img/tech-html.png", w: 256, h: 360 },
  { name: "CSS", src: "/img/tech-css.png", w: 256, h: 360 },
  { name: "MySQL", src: "/img/tech-mysql.png", w: 360, h: 297 },
  { name: "Figma", src: "/img/tech-figma.png", w: 360, h: 174 },
];

export const projectsSection = { eyebrow: "Trabajo", title: "Proyectos destacados" };

export const projects: Project[] = [
  {
    index: "01",
    title: "DeepSky",
    description:
      "Plataforma web de divulgación astronómica con datos de la NASA: imagen del día, seguimiento de asteroides cercanos a la Tierra, sistema solar en 3D, calendario de eventos, foro y retos de astrofotografía. Backend por capas con autenticación JWT, desplegado en AWS.",
    tech: ["Java", "Javalin", "React", "MySQL", "AWS"],
  },
  {
    index: "02",
    title: "MiniCatálogo",
    description:
      "Plataforma para que pequeños negocios creen y administren su catálogo digital. Los clientes consultan productos sin registrarse y envían su pedido por WhatsApp. Proyecto en equipo; mi aportación es el catálogo y la gestión de productos.",
    tech: ["Frontend", "UI/UX", "Git"],
  },
  {
    index: "03",
    title: "Calculadora de Combustible",
    description:
      "App Android que estima el costo de un viaje por persona a partir de la distancia, el rendimiento, el precio del combustible, los peajes y el número de pasajeros. Desarrollada en una semana, con liderazgo del proyecto y del análisis de requerimientos.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM"],
  },
  {
    index: "04",
    title: "Generador de Reportes",
    description:
      "Aplicación en Python que automatiza la generación de reportes en formato PDF y Excel a partir de los datos de entrada.",
    tech: ["Python"],
  },
];

export const eventsSection = { eyebrow: "Comunidad", title: "Eventos" };

export const events: EventItem[] = [
  {
    tag: "Expociencia",
    title: "Expociencia Chiapas 2026",
    description:
      "Presentación de DeepSky junto a mi equipo ante el público de Expociencia Chiapas 2026: una plataforma web que acerca la astronomía a través de datos reales de la NASA.",
    image: {
      src: "/img/expociencia.jpg",
      alt: "Stand del proyecto DeepSky en Expociencia Chiapas 2026, con visitantes frente al póster y las laptops",
      w: 1600,
      h: 1200,
    },
  },
];

export const certsSection = { eyebrow: "Formación", title: "Certificaciones y cursos" };

export const certifications: Certification[] = [
  { title: "Graduado de AWS Academy – Cloud Foundations", issuer: "Amazon Web Services (AWS)", year: "2025" },
  { title: "Introducción al IoT", issuer: "Cisco Networking Academy", year: "2025" },
  { title: "Fundamentos de Sistemas Operativos", issuer: "Cisco Networking Academy", year: "2025" },
  { title: "Soporte de Sistemas Operativos", issuer: "Cisco Networking Academy", year: "2025" },
  { title: "Fundamentos de Redes", issuer: "Cisco Networking Academy", year: "2025" },
  { title: "Estadística aplicada a los negocios", issuer: "Universidad Austral (Coursera)", year: "2025" },
  { title: "Introducción a la Minería de Datos", issuer: "Pontificia Universidad Católica de Chile (Coursera)", year: "2025" },
];