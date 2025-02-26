/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://tu-dominio.com",
  generateRobotsTxt: true, // Genera el archivo robots.txt
  exclude: ["/admin", "/private"], // Opcional: rutas a excluir
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/private"] },
    ],
  },
};

module.exports = config;
