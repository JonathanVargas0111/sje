import AboutSection from "@/components/section/AboutSection";
import ContactSection from "@/components/section/ContactSection";
import HomeSection from "@/components/section/HomeSection ";
import ServicesSection from "@/components/section/ServicesSection";

import { legalServicesData } from "@/data/legalServicesData";

export default function Home() {
  const service = legalServicesData.services;
  const aboutData = legalServicesData.about;
  const home = legalServicesData.home;

  return (
    <>
      <main className="flex flex-col items-center row-start-2 gap-8 sm:items-start">
        <HomeSection
          title={home.title}
          description={home.description}
          callToAction={home.callToAction}
        />

        <AboutSection
          title={aboutData.title}
          description={aboutData.description}
          values={aboutData.values}
        />

        <ServicesSection
          title="Nuestros Servicios"
          services={service}
        />

        <ContactSection
          title="Contáctanos"
        />

      </main>
    </>
  );
}
