import Link from "next/link";
import React from "react";

type BreadcrumbsProps = {
  category: string;
  formattedSlug: string;
};

const Breadcrumbs = ({ category, formattedSlug }: BreadcrumbsProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="uppercase text-[#949494] font-bold text-[12px]"
    >
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>/</li>
        <li>
          <Link href={`/product/${category}`}>{category}</Link>
        </li>
        <li>/</li>
        <li>{formattedSlug}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
