"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { bigShoulders } from "@/app/layout";

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
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 2,
            title: "The Developer's Journey",
            description: "How to grow as a software developer.",
            date: "Nov 20, 2024",
            imageUrl:
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 3,
            title: "Leadership Insights",
            description: "What makes a great manager.",
            date: "Nov 18, 2024",
            imageUrl:
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 4,
            title: "Photography Tips",
            description: "Capture moments like a pro.",
            date: "Nov 15, 2024",
            imageUrl:
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 5,
            title: "The Art of Creativity",
            description: "Unleash your inner artist.",
            date: "Nov 10, 2024",
            imageUrl:
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
    ];

    if (!blogs || blogs.length === 0)
        return (
            <div className="text-center text-gray-500">
                <p>No blogs available at the moment.</p>
            </div>
        );

    return (
        <div className="container mx-auto">
            <Swiper
                spaceBetween={30}
                slidesPerView={3} // Adjust slides per view
                loop={false} // Disable infinite loop
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
                    1200: {
                        slidesPerView: slidesPerViewDesktop ?? 3,
                        spaceBetween: slidesPerViewDesktop ? 25 : 40,
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
                        <div className="border rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={blog.imageUrl}
                                alt={blog.title}
                                className="object-cover w-full h-[200px] transition-transform duration-300 ease-in-out transform hover:scale-110"
                            />
                            <div className="p-4">
                                <div className="flex gap-4 items-center">
                                    <button
                                        className={`rounded-full text-xs py-2 hidden md:block font-semibold hover:!text-black border-yellow-400 border-2 !px-4`}
                                    >UNCATEGORIZED</button>
                                    <span className="text-sm font-bold text-gray-500 block">
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
