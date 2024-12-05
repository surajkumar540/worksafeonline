import React from "react";
import Link from "next/link";

interface BreadcrumbsHeaderProps {
    text: string;
    category?: string;
    formattedSlug?: string;
}

const BreadcrumbsHeader: React.FC<BreadcrumbsHeaderProps> = ({ text, category, formattedSlug }) => {
    return (
        <nav
            aria-label="Breadcrumb"
            className="uppercase font-bold text-sm"
        >
            <ol className="flex space-x-2">
                <li>
                    <Link href="/" className="hover:text-yellow-400">
                        Home Page
                    </Link>
                </li>

                {!formattedSlug && (
                    <>
                        <li>/</li>
                        <li>{text}</li>

                    </>
                )}


                {formattedSlug && (
                    <>
                        <li>/</li>
                        <li>
                            <Link href="/shop" className="hover:text-yellow-400">
                                Shop
                            </Link>
                        </li>

                    </>
                )}


                {category && (
                    <>
                        <li>/</li>
                        <li>
                            <Link href={`/product/${category}`} className="hover:text-yellow-400">
                                {category}
                            </Link>
                        </li>
                    </>
                )}
                {formattedSlug && (
                    <>
                        <li>/</li>
                        <li>{formattedSlug}</li>
                    </>
                )}
            </ol>
        </nav>
    );
};

export default BreadcrumbsHeader;
