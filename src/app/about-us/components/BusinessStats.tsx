import Image from "next/image";
import { bigShoulders } from "@/app/layout";

const BusinessStats: React.FC = () => {
    return (
        <div
            style={{
                clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
                overflow: "hidden",
            }}
            className="relative bg-gray-800 text-white h-[400px]"
        >
            {/* Full-width background image */}
            <Image
                fill
                priority
                alt="Contact-Us Banner"
                className="object-cover"
                src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/bc-page.jpg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Constrained content inside */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="max-w-screen-5xl mx-auto px-4 lg:px-6">
                    <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
                        {/* Stats Card */}
                        {[
                            { value: "24+", label: "Years in Business" },
                            { value: "12+", label: "Worldwide Stores" },
                            { value: "135+", label: "Trusted Experts" },
                            { value: "89K", label: "Satisfied Customers" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className={`relative ${bigShoulders.className} text-center`}
                            >
                                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter bg-gradient-to-t from-gray-900 via-gray-200 to-white bg-clip-text text-transparent uppercase">
                                    {stat.value}
                                </h1>
                                <p className="text-xl md:text-2xl text-yellow-500 font-extrabold mt-2">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessStats;
