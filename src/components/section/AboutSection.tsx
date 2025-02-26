import { SectionWrapper } from "./SectionWrapper";

interface AboutSectionProps {
    title: string;
    description: string;
    values: { title: string; description: string }[];
}

const AboutSection = ({ title, description, values }: AboutSectionProps) => {
    return (
        <SectionWrapper idSection="about">
            <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold">{value.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{value.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;
