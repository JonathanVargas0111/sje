import Link from "next/link";
import { footerData } from "@/data/footerData";

const Footer = () => {
    return (
        <footer className="py-4 bg-gray-100">
            <div className="container mx-auto text-center text-black">
                <Link href="/">
                    <span className="font-bold">{footerData.brand}</span>
                    <span>{footerData.tagline}</span>
                    <span>&copy; {footerData.year}</span>
                </Link>

                <div className="mt-2">
                    {footerData.links.map((link, index) => (
                        <Link key={index} href={link.href} className="ml-2">
                            <span>| {link.label}</span>
                        </Link>
                    ))}
                </div>

                <div className="mt-2">
                    <span>Contacto: {footerData.contact.phone} | {footerData.contact.email}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
