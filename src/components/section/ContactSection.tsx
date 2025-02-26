import ContactForm from "../ui/contact-form";
import { SectionWrapper } from "./SectionWrapper";

interface ContactSectionProps {
    title: string;
}

const ContactSection = ({ title }: ContactSectionProps) => {
    return (
        <SectionWrapper idSection="contact">
            <h2 className="mb-6 text-2xl font-bold text-center">{title}</h2>
            <ContactForm />
        </SectionWrapper>
    );
};

export default ContactSection;
