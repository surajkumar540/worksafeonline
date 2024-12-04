"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { bigShoulders } from "@/app/layout";
import Image from "next/image";

const BlogsSwiper = ({
    slidesPerViewDesktop,
}: {
    slidesPerViewDesktop?: number;
}) => {
    const blogs = [
        {
            id: 1,
            title: "The Future of Design",
            description: "Exploring trends in the design world.",
            date: "January 25, 2024",
            imageUrl:
                "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/blog_14-820x620.jpg",
        },
        {
            id: 2,
            title: "The Developer's Journey",
            description: "How to grow as a software developer.",
            date: "January 25, 2024",
            imageUrl:
                "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/blog_13-820x620.jpg",
        },
        {
            id: 3,
            title: "Leadership Insights",
            description: "What makes a great manager.",
            date: "January 25, 2024",
            imageUrl:
                "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/blog_12-820x620.jpg",
        },
        {
            id: 4,
            title: "Photography Tips",
            description: "Capture moments like a pro.",
              date: "January 25, 2024",
            imageUrl:
                "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/blog_13-820x620.jpg",
        },
        {
            id: 5,
            title: "The Art of Creativity",
            description: "Unleash your inner artist.",
              date: "January 25, 2024",
            imageUrl:
                "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/blog_13-820x620.jpg",
        },
    ];

    if (!blogs || blogs.length === 0)
        return (
            <div className="text-center text-gray-500">
                <p>No blogs available at the moment.</p>
            </div>
        );

    return (
        <div className="container mx-auto px-6">
            <Swiper
                spaceBetween={30}
                slidesPerView={3} // Adjust slides per view
                loop={true} // Disable infinite loop
                pagination={{
                    clickable: true, // Enable pagination dots
                }}
                className="mySwiper"

                breakpoints={{
                    0: {
                        slidesPerView: 1.25,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1260: {
                        slidesPerView: slidesPerViewDesktop ?? 4,
                        spaceBetween: slidesPerViewDesktop ? 25 : 20,
                    },
                    1680: {
                        slidesPerView: blogs.length >= 5 ? 5 : 4,
                        spaceBetween: 25,
                    },
                    1920: {
                        slidesPerView: blogs.length >= 6 ? 6 : 4,
                        spaceBetween: 25,
                    },
                }}

            >
                {blogs.map((blog: any) => (
                    <SwiperSlide key={blog.id}>
                        <div className=" rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src={blog.imageUrl}
                                alt={blog.title}
                                className="object-cover w-full h-[200px] transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-sm"
                                width={100}
                                height={100}
                                unoptimized
                            />
                            <div className="p-4">
                                <div className="flex gap-4 items-center">
                                    <button
                                        className={`rounded-full text-xs py-2 hidden md:block font-semibold hover:!text-black border-yellow-400 border-[1px] !px-4`}
                                    >UNCATEGORIZED</button>
                                    <span className="text-xs font-bold text-gray-500 block">
                                        {blog.date}
                                    </span>
                                </div>

                                <h3 className={`uppercase text-start w-full text-xl md:text-2xl mt-4 tracking-tight font-extrabold ${bigShoulders.className}`}>
                                    {blog.title}
                                </h3>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BlogsSwiper;
