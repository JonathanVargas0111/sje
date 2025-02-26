import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";
import { titleFont } from "@/config/fonts";

interface HomeSectionProps {
    title: string;
    description: string;
    callToAction: string;
}

const HomeSection = ({ title, description, callToAction }: HomeSectionProps) => {
    return (
        <SectionWrapper idSection="home" className="text-center">

            <div className="">
                <div className="top-0 w-full">
                    <h1 className={`my-4 md:my-16 text-3xl font-bold md:text-5xl xl:text-7xl ${titleFont.className}`}>{title}</h1>
                    <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-700">{description}</p>
                    <Link href={'#contact'} className="px-6 py-3 text-white transition bg-black rounded-lg shadow-md hover:bg-gray-800">
                        {callToAction}
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default HomeSection;
