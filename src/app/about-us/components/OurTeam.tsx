import { bigShoulders } from "@/app/layout";
import ProductSwiper from "./TeamSwiper";
import { FaArrowRightLong } from "react-icons/fa6";

const OurTeam = () => {
    return (
        <section className="py-16">
            <div className="max-w-screen-xl mx-auto lg:px-6">
                <div className={`relative ${bigShoulders.className}`}>
                    <h1 className="text-6xl md:text-9xl font-bold text-center tracking-wider bg-gradient-to-b mb-10 from-gray-300 via-gray-200 uppercase to-white bg-clip-text text-transparent">
                        Meet People
                    </h1>
                    <p
                        className={`uppercase text-3xl md:text-5xl text-center absolute font-black whitespace-nowrap bottom-0 md:bottom-10 left-1/2 translate-x-[-50%] translate-y-1/2`}
                    >
                        OUR TEAM
                    </p>
                </div>

            </div>
            <ProductSwiper />

            <div className="mt-20 w-full flex justify-center items-center">
                <span className="relative font-sans uppercase font-semibold w-fit mt-8 flex bg-white text-black space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary hover:border-primary border-black/10 py-4 pl-36 pr-4 overflow-hidden group">
                    <span className="absolute whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
                        Contact Us
                    </span>
                    <span className="absolute whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
                        Contact Us
                    </span>
                    <FaArrowRightLong className="ml-2" />
                </span>
            </div>
        </section>
    );
};

export default OurTeam;
