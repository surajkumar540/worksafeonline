"use client";
import { bigShoulders } from '@/app/layout';
import Button from '@/components/common/Button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { IoStarSharp } from 'react-icons/io5';
import { FaArrowRightLong } from "react-icons/fa6";
import { div } from 'framer-motion/client';
import { GoPersonFill } from "react-icons/go";



const ProductFeatures = () => {
    const [content, setContent] = useState("description");

    const handleChangeContent = (query: string) => setContent(query);

    return (
        <div>
            {/* Description, Additional Information, and Reviews buttons */}
            <div className="flex justify-center items-center w-full mt-[60px] gap-4">
                {/* Buttons */}
                <Button
                    text="DESCRIPTION"
                    classes={`!rounded-full text w-full md:w-fit text-2xl py-3 font-semibold border-none tracking-tight !px-10 ${content === "description" ? "bg-black text-white" : "text-[#000000]"}  hover:bg-[#000000]`}
                    onClick={() => handleChangeContent("description")}
                />
                <Button
                    text="ADDITIONAL INFORMATION"
                    classes={`!rounded-full text w-full md:w-fit text-2xl py-3 font-semibold border-none tracking-tight !px-10 ${content === "additional" ? "bg-black text-white" : "text-[#000000]"}  hover:bg-[#000000]`}
                    onClick={() => handleChangeContent("additional")}
                />
                <Button
                    text={`REVIEWS (5)`}
                    classes={`!rounded-full text w-full md:w-fit text-2xl py-3 font-semibold border-none tracking-tight !px-10 ${content === "reviews" ? "bg-black text-white" : "text-[#000000]"}  hover:bg-[#000000]`}
                    onClick={() => handleChangeContent("reviews")}
                />
            </div>

            {/* Description Content */}
            {content === "description" && (
                <div className="mt-10 flex flex-col gap-6">
                    <h2 className={`${bigShoulders.className} uppercase text-3xl font-bold`}>
                        Product Descriptions
                    </h2>
                    <div className="block md:flex">
                        <div className="flex text-gray-500 text-xl flex-col gap-5 w-full md:pr-12">
                            <p>
                                Creating handcrafted paintings involves a wide range of techniques, styles, and materials, so product details can vary significantly depending on the specific artwork and artist. However, here are some common product details that you might find when purchasing or describing a handcrafted painting:
                            </p>
                            <p>
                                When purchasing or selling a handcrafted painting, it’s essential to have a clear understanding of these product details to make an informed decision and to provide potential buyers with a comprehensive description of the artwork. Additionally, the value and significance of a handcrafted painting can be influenced by factors like the artist’s reputation, the rarity of the piece, and the demand for their work in the art market.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 w-full mt-5 md:mt-0">
                            <Image
                                src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/single-product.jpg"
                                height={100}
                                width={100}
                                alt="Product Image"
                                className="w-full rounded-md"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            )}
            {content === "additional" && (
                <div className="mt-10 flex flex-col gap-6">
                    <div className="block md:flex">
                        <div className="flex flex-col gap-5 w-[44%]">
                            <h2 className={`${bigShoulders.className} uppercase text-xl font-bold`}>
                                Features :
                            </h2>
                        </div>
                        <div className="flex flex-col gap-5 w-full mt-5 md:mt-0">
                            <div>
                                <p className='uppercase font-bold'>
                                    Main material</p>
                                <p className='text-gray-500'>
                                    100% cotton, 11 oz
                                </p>
                            </div>
                            <div className="bg-gray-300 h-[1px] " />

                            <div>
                                <p className='uppercase font-bold'>
                                    Lining</p>
                                <p className='text-gray-500'>
                                    Pile-lined body, Quilt lining in sleeve
                                </p>
                            </div>
                            <div className="bg-gray-300 h-[1px] " />

                            <div>
                                <p className='uppercase font-bold'>
                                    Details
                                </p>
                                <p className='text-gray-500'>
                                    Metal buttons
                                    <p>
                                        High collar with zipper
                                    </p>
                                </p>
                            </div>
                            <div className="bg-gray-300 h-[1px] " />

                            <div>
                                <p className='uppercase font-bold'>
                                    Front closure
                                </p>
                                <p className='text-gray-500'>
                                    Robust hidden one-way plastic zipper
                                </p>
                            </div>
                            <div className="bg-gray-300 h-[1px] " />

                            <div>
                                <p className='uppercase font-bold'>
                                    Pockets
                                </p>
                                <p className='text-gray-500'>
                                    <p>
                                        Chest pockets with flap
                                    </p>
                                    <p>
                                        Inset pockets
                                    </p>
                                    <p>
                                        Inner pockets, one with telephone pocket
                                    </p>
                                    <p>
                                        Sleeve pocket with zipper and pen pockets
                                    </p>
                                </p>
                            </div>
                            <div className="bg-gray-300 h-[1px] " />
                            <div>
                                <p className='uppercase font-bold'>
                                    Finish
                                </p>
                                <p className='text-gray-500'>
                                    <p>
                                        Extended back, Adjustable hem with press studs
                                    </p>
                                    <p>
                                        Adjustable sleeve end with press studs
                                    </p>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {content === "reviews" && (
                <div className="mt-10 flex flex-col gap-6">
                    {/* <div className="flex">
                        <div className='w-full'>
                            <div className="flex text-gray-500 text-xl gap-5 ">
                                <h2 className={`${bigShoulders.className} fonyt text-yellow-400 text-5xl font-bold`}>
                                    4.4
                                </h2>
                                <div>
                                    <div className="flex flex-col ">
                                        <div className="flex items-center">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <IoStarSharp
                                                    size={15}
                                                    key={`full-${i}`}
                                                    className="text-black"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-black text-[15px]">
                                            5 verified ratings
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='relative mt-4'>
                                <Button
                                    text={` Write a review`}
                                    classes="!rounded-full bg-black px-16 pl-10 uppercase w-full md:w-fit text-sm font-semibold border-2 tracking-tight  hover:bg-black border-black text-white"
                                    onClick={() => handleChangeContent("reviews")}
                                />
                                <FaArrowRightLong className='absolute top-[28%] right-4 text-white' />
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 w-full mt-5 md:mt-0">
                            <div className="flex flex-col items-center">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <div key={i} className="flex items-center gap-1 justify-center">
                                        <p>{5 - i}</p> 
                                        <IoStarSharp size={15} className="text-black" />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div> */}

                    <div className='flex gap-4'>
                        <div>
                            <GoPersonFill size={48} className='bg-gray-300 rounded-full px-1 pt- text-white' />
                        </div>
                        <div>
                            <div className="flex items-center">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <IoStarSharp
                                        size={15}
                                        key={`full-${i}`}
                                        className="text-black"
                                    />
                                ))}
                            </div>
                            <div className='mt-2 flex flex-col gap-3'>
                                <div className='flex gap-2'>
                                    <p className='text-black'>Join Hiddleston</p>
                                    <span className='text-gray-500'> – February 22, 2024</span>
                                </div>
                                <p className='font-normal' >
                                    Quality is good though. Lots of pockets for hand tools and storage. Fit reminds me of 90’s jeans. Down size for length and waist is true to size.

                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductFeatures;
