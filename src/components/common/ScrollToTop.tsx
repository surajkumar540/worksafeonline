"use client"
import React from 'react'

const ScrollToTop = () => {

    const handleScroll = () => {


        const element = document.getElementById("header");
        if (element) {
            const offset = -100;
            const rect = element.getBoundingClientRect();
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const targetPosition = rect.top + scrollTop + offset;

            if ("scrollBehavior" in document.documentElement.style)
                window.scrollTo({ top: targetPosition, behavior: "smooth" });
            else window.scrollTo(0, targetPosition);
        }
    };

    return (

        <button className='w-[400px] absolute h-[200px] bg-slate-500' onClick={handleScroll}>click</button>
    )
}

export default ScrollToTop