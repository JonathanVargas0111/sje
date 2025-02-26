import Script from "next/script";


export default function SEO() {
    return (
        <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LegalService",
                    name: "SJE - Soluciones Jurídicas Efectivas",
                    description: "Asesoría legal profesional para resolver cualquier desafío legal.",
                    url: "https://sje.com",
                    logo: "https://sje.com/logo.png",
                    image: "https://sje.com/team.jpg",
                    telephone: "+57 123 456 7890",
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "Carrera 7 #45-23",
                        addressLocality: "Bogotá",
                        addressRegion: "Cundinamarca",
                        postalCode: "110111",
                        addressCountry: "CO",
                    },
                    sameAs: [
                        "https://www.facebook.com/sjelegal",
                        "https://www.linkedin.com/company/sjelegal",
                    ],
                    openingHours: "Mo-Fr 09:00-18:00",
                    contactPoint: {
                        "@type": "ContactPoint",
                        telephone: "+57 123 456 7890",
                        contactType: "customer service",
                        availableLanguage: ["Spanish", "English"],
                    },
                }),
            }}
        />
    );
}