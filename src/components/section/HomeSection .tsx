import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";

interface HomeSectionProps {
    title: string;
    description: string;
    callToAction: string;
}

const HomeSection = ({ title, description, callToAction }: HomeSectionProps) => {
    return (
        <SectionWrapper idSection="home" className="text-center">
            <h1 className="mb-4 text-3xl font-bold">{title}</h1>
            <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-700">{description}</p>
            <Link href={'#contact'} className="px-6 py-3 text-white transition bg-black rounded-lg shadow-md hover:bg-gray-800">
                {callToAction}
            </Link>
        </SectionWrapper>
    );
};

export default HomeSection;
