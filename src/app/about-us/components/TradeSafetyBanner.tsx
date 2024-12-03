import { bigShoulders } from '@/app/layout';
import React from 'react';
import { CiMedal } from 'react-icons/ci';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuPencilRuler, LuTags } from 'react-icons/lu';

const TradeSafetyBanner = () => {
    return (
        <div className="container mx-auto sm:px-4 md:px-10 mt-20 py-10 ">
            {/* Headings */}
            <div className="w-full md:w-[85%]">
                <p
                    className={`uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold ${bigShoulders.className}`}
                >
                    We Are The workwear specialist destination for Trade, Safety and Uniforms
                </p>
                <p className="text-gray-500 text-left text-xl mt-4">
                    Axetor is Australia’s largest network of workwear specialist destinations for Trade, Safety and Uniforms. We are 90
                    stores strong, with bold plans for more. A steel-toe footprint stretching across the nation and working hard for our
                    local communities.
                </p>
            </div>

            {/* Images and Content */}
            <div className="lg:flex flex-row gap-10 my-6 w-full ">
                {/* Left Side Container */}
                <div className="flex flex-col md:flex-row  gap-10 p-2 justify-center border-b-2 md:border-0">
                    {/* Card 1 */}
                    <div className=" p-4">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="lg:aspect-[1/1] w-full md:max-w-[340px] rounded-md overflow-hidden ">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/049/569/013/non_2x/white-jacket-with-hood-on-transparent-background-png.png"
                                    className="object-cover w-full h-auto transition-transform duration-300 ease-in-out  bg-slate-600 transform hover:scale-110"
                                    alt="Jacket"
                                />
                            </div>
                            <p
                                className={`uppercase text-start w-full text-3xl md:text-4xl mt-4 lg:text-3xl tracking-tight font-extrabold ${bigShoulders.className}`}
                            >
                                Business idea
                            </p>
                            <p className="text-gray-500 text-left text-md mt-4">
                                We sell workwear, work gloves and work shoes for professionals with high demands on function, quality,
                                safety, and design. We sell our products through our online shop or through direct agreements with our
                                customer management.
                            </p>
                            <div className='flex justify-start w-full'>
                                <span className="relative font-sans uppercase font-semibold w-fit mt-8 flex bg-white text-black space-x-2 items-start cursor-pointer hover:text-primary py-4">
                                    <p className="w-full text-xs">see product range</p>
                                    <FaArrowRightLong className="ml-2 text-primary" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-[1px] h-[600px] lg:h-full hidden md:block bg-gray-400" />

                    {/* Card 2 */}
                    <div className=" p-4">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="lg:aspect-[1/1] w-full md:max-w-[340px] rounded-md overflow-hidden ">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/049/569/013/non_2x/white-jacket-with-hood-on-transparent-background-png.png"
                                    className="object-cover w-full h-auto transition-transform duration-300 ease-in-out  bg-slate-600 transform hover:scale-110"
                                    alt="Jacket"
                                />
                            </div>
                            <p
                                className={`uppercase text-start w-full text-3xl md:text-4xl mt-4 lg:text-3xl tracking-tight font-extrabold ${bigShoulders.className}`}
                            >
                                Business idea
                            </p>
                            <p className="text-gray-500 text-left text-md mt-4">
                                We sell workwear, work gloves and work shoes for professionals with high demands on function, quality,
                                safety, and design. We sell our products through our online shop or through direct agreements with our
                                customer management.
                            </p>
                            <div className='flex justify-start w-full'>
                                <span className="relative font-sans uppercase font-semibold w-fit mt-2 flex bg-white text-black space-x-2 items-center cursor-pointer hover:text-primary py-4">
                                    <span className="w-full text-xs">Find closet store</span>
                                    <FaArrowRightLong className="ml-2 text-primary" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Container */}
                <div className="w-full mt-4">
                    <div>
                        <p
                            className={`uppercase text-3xl md:text-4xl lg:text-3xl tracking-tight font-extrabold ${bigShoulders.className}`}
                        >
                            Trusted Name In Safety
                        </p>
                        <p className="text-gray-500 text-left text-xl mt-4">
                            Our success in our market has been driven by not only the depth and breadth of our product range, but also our
                            service commitment to our clients.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col md:justify-center gap-6">
                        <div className="flex md:justify-center gap-3 mt-6">
                            <div>
                                <CiMedal size={48} className="text-gray-600" />
                            </div>
                            <div className="flex flex-col">
                                <p className={`uppercase text-xl tracking-tight font-extrabold ${bigShoulders.className}`}>
                                    Quality products
                                </p>
                                <p className="text-gray-500 text-left text-md mt-4">
                                    Sed tellus augue, hendrerit eu rutrum in, porttitor at metus. Mauris ac hendrerit metus.
                                </p>
                            </div>
                        </div>

                        <div className="flex md:justify-center gap-3 mt-6">
                            <div>
                                <LuPencilRuler size={48} className="text-gray-600" />
                            </div>
                            <div className="flex flex-col">
                                <p className={`uppercase text-xl tracking-tight font-extrabold ${bigShoulders.className}`}>
                                    Custom branding
                                </p>
                                <p className="text-gray-500 text-left text-md mt-4">
                                    Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis blandit
                                    pretium
                                </p>
                            </div>
                        </div>

                        <div className="flex md:justify-center gap-3 mt-6">
                            <div>
                                <LuTags size={48} className="text-gray-600" />
                            </div>
                            <div className="flex flex-col">
                                <p className={`uppercase text-xl tracking-tight font-extrabold ${bigShoulders.className}`}>
                                    Competitive price
                                </p>
                                <p className="text-gray-500 text-left text-md mt-4">
                                    Mauris ac hendrerit metus. Phasellus mattis lectus commodo felis egestas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradeSafetyBanner;
