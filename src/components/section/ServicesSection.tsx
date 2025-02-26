import { Service } from "@/interfaces/service.interface";
import { SectionWrapper } from "./SectionWrapper";

interface ServicesSectionProps {
    title: string,
    services: Service[];
}

const ServicesSection = ({ title, services }: ServicesSectionProps) => {
    return (
        <SectionWrapper idSection={"services"}>
            <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
            <div className="space-y-8">
                {services.map((serviceCategory, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold border-b pb-2 mb-4">{serviceCategory.category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {serviceCategory.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="p-4 border rounded-lg shadow-sm">
                                    <h4 className="text-lg font-semibold">{item.title}</h4>
                                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default ServicesSection;
