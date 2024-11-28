"use client";
import { bigShoulders } from '@/app/layout';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { IoStarSharp } from 'react-icons/io5';
import { TfiRulerAlt2 } from "react-icons/tfi";
import { GiWaterRecycling } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { LiaShippingFastSolid } from "react-icons/lia";



const ProductContent = () => {
    const [countItem, setCountItem] = useState(1);

    const increaseCount = () => setCountItem((prev) => prev + 1);
    const decreaseCount = () => setCountItem((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="w-full mt-4 lg:mt-0">
            <div>
                <span className="px-3 py-1 bg-[#C70A33] text-xs text-white rounded-full ">
                    Save 7%
                </span>
                <h1 className={`text-[55px] font-bold ${bigShoulders.className}`}>
                    Hi-Vis Zip Sweatshirt
                </h1>
            </div>

            <div className="flex items-center gap-3">
                <div>
                    <span className="rounded-full ">Brands: </span>
                    <span className=" text-yellow-500 rounded-full "> Vertrio</span>
                </div>

                <div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center">
                            {Array.from({ length: 5 }, (_, i) => (
                                <IoStarSharp
                                    size={15}
                                    key={`full-${i}`}
                                    className="text-black"
                                />
                            ))}
                        </div>
                        <Link href="#" className="hover:text-yellow-500">
                            (5 reviews)
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-1 text-green-500">
                    <BiCheck size={20} />
                    <span className="rounded-full "> In stock</span>
                </div>
            </div>

            <div className="bg-gray-300 h-[1px] mt-5" />

            <p className="mt-4 text-gray-500">
                Voluptatibus animi ea suscipit et ratione dignissimos. Hic repudiandae
                deleniti magni porro saepe sunt. Est ea sed et ex molestias.
            </p>

            <p className={`mt-4 text-3xl ${bigShoulders.className}`}>
                92.00$ – 99.00$
            </p>

            <p className={`mt-4 text-xl `}>Color</p>

            <div className=" mt-2 flex gap-2 items-center">
                <div className=" bg-black colorCircle" />
                <div className=" bg-[#2353FF] colorCircle" />
                <div className=" bg-[#66BA24] colorCircle" />
                <div className=" bg-[#DD50A1] colorCircle" />
            </div>

            <div className="flex text-center mt-4 gap-3">
                <div className=" w-[150px]  flex gap-5 rounded-full justify-center items-center bg-[#F5F5F5] font-bold">
                    <button
                        className="w-full rounded-l-full h-full px-2 pl-4"
                        onClick={decreaseCount}
                    >
                        -
                    </button>
                    <h3>{countItem}</h3>
                    <button
                        className="w-full rounded-r-full h-full px-2 pr-4"
                        onClick={increaseCount}
                    >
                        +
                    </button>
                </div>

                <button
                    className={`w-full flex items-center justify-center px-4 py-2 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-2xl font-bold uppercase opacity-50 cursor-not-allowed bg-yellow-500 text-black ${bigShoulders.className}`}
                >
                    Add to Cart
                </button>
            </div>

            <div className='uppercase mt-4 text-xs  flex items-center gap-8'>
                <div className='flex items-center gap-2'>
                    <TiMessages size={18} />
                    <span className='underline'>
                        Ask a question
                    </span>
                </div>

                <div className='flex items-center gap-2'>
                    <TfiRulerAlt2 size={18} />
                    <span className='underline'>
                        size guide
                    </span>
                </div>

                <div className='flex items-center gap-2'>
                    <BsHeart size={18} />
                    <span className='underline'>
                        add to watchlist
                    </span>
                </div>

                <div className='flex items-center gap-2'>
                    <GiWaterRecycling size={18} />
                    <span className='underline'>
                        compare
                    </span>
                </div>
            </div>

            <div className=' mt-4   flex  flex-col items-center justify-center border rounded-md gap-4'>
                <p className='mt-4'>Guarantee Safe & Secure Checkout
                </p>

                <div className='mt-10'>

                </div>
            </div>


            <div className=' mt-4 flex  uppercase gap-10 text-sm'>

                <div className='flex items-center mt-3  gap-3'>

                    <LiaShippingFastSolid size={24} />
                    <span>
                        Free delivery <span className='text-gray-400'>
                            over $100
                        </span>
                    </span>
                </div>

                <div className='flex items-center mt-3  gap-3'>

                    <LiaShippingFastSolid size={24} />
                    <span>
                        30 days return <span className='text-gray-400'>
                             period
                        </span>
                    </span>
                </div>
            </div>

            <div className="bg-gray-300 h-[1px] mt-5" />


            <div className=' mt-4 flex flex-col  uppercase gap-2 text-sm'>

                <div className='flex items-center   gap-3'>
                    <span className='text-gray-400'>
                    SKU: <span className='text-black' >
                    h67910625
                        </span>
                    </span>
                </div>

                <div className='flex items-center   gap-3'>
                    <span className='text-gray-400'>
                    Category: <span className='text-black'>
                    Jackets
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductContent;
