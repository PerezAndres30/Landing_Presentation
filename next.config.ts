import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Permite abrir `npm run dev` desde otra IP de tu red (p. ej. http://192.168.56.1:3000).
  // Sin esto, Next bloquea los scripts de desarrollo y la página no se "activa".
  allowedDevOrigins: ["192.168.56.1", "192.168.*.*", "10.*.*.*", "172.16.*.*", "*.local"],
};

export default nextConfig;
