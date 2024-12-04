import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

interface AnimatedActionButtonProps {
    text: string;
    onClick?: () => void;    // OnClick handler for the button
    classes?: string;       // Additional custom classes for the button
    isLoading?: boolean;    // If the button is in loading state
    type?: "button" | "submit"; // Type of the button (default is 'button')
    hover?: string;         // Hover color
    href?: string;          // Optional link URL
}

const AnimatedActionButton: React.FC<AnimatedActionButtonProps> = ({
    text = 'Discover Now',
    onClick,
    classes = '',
    isLoading = false,
    type = 'button',
    href
}) => {
    const buttonContent = (
        <>
            {isLoading ? (
                <span className="absolute left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
                    Loading...
                </span>
            ) : (
                <span className="absolute text-start text-sm md:text-lg font-semibold  pl-3 whitespace-nowrap w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
                    {text}
                </span>
            )}
            <span className="absolute text-sm md:text-lg font-semibold text-start pl-3 w-full transition-all duration-300 py-4 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]
            
            
            
            
            ">
                {text}
            </span>
            <span className="mr-2 absolute right-2 flex items-center justify-end">
                <FaArrowRightLong />
            </span>
        </>
    );

    if (href) {
        // Render as anchor tag if href is provided
        return (
            <a
                href={href}
                className={`relative font-sans  font-semibold flex items-center border rounded-full cursor-pointer overflow-hidden group ${classes}`}
            >
                {buttonContent}
            </a>
        );
    }

    // Default button render
    return (
        <button
            type={type}
            onClick={onClick}
            className={`relative font-sans  font-semibold flex items-center border rounded-full cursor-pointer overflow-hidden group ${classes}`}

            disabled={isLoading}
        >
            {buttonContent}
        </button>
    );
};

export default AnimatedActionButton;
