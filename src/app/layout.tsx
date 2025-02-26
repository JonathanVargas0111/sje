import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import Footer from "@/components/ui/footer/Footer";
import { Sidebar } from "@/components/ui/sidebar/Sidebar";

// Font imports
import { geistMono, geistSans } from "@/config/fonts";

import "./globals.css";
import SEO from "@/components/common/SEO";

export const metadata = {
  title: "SJE - Abogados expertos en soluciones legales rápidas",
  description: "Asesoría legal confiable y efectiva para resolver tus problemas jurídicos.",
  keywords: "abogados, asesoría legal, derecho, soluciones jurídicas",
  openGraph: {
    title: "SJE - Soluciones Jurídicas Efectivas",
    description: "Protege tus intereses con asesoría legal profesional y eficiente.",
    url: "https://sje.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SJE - Soluciones Jurídicas Efectivas",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>SJE - Abogados expertos en soluciones legales rápidas</title>
        <meta name="description" content="Asesoría legal confiable y efectiva para resolver tus problemas jurídicos." />
        <meta name="keywords" content="abogados, asesoría legal, derecho, soluciones jurídicas" />
        <meta property="og:title" content="SJE - Soluciones Jurídicas Efectivas" />
        <meta property="og:description" content="Protege tus intereses con asesoría legal profesional y eficiente." />
        <meta property="og:image" content="/images/social-networks/imagen-redes.PNG" />

        <SEO />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopMenu />
        <Sidebar />
        <div className="px-0 sm:px-7">
          {children}

        </div>
        <Footer />
      </body>
    </html >
  );
}
