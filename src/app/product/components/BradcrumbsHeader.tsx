import React from "react";
import Link from "next/link";

interface BreadcrumbsHeaderProps {
  text: string;
  category?: string;
  formattedSlug?: string;
}

const BreadcrumbsHeader: React.FC<BreadcrumbsHeaderProps> = ({
  text,
  category,
  formattedSlug,
}) => {
  const breadcrumbs = [{ label: "Home", href: "/" }];

  if (category) {
    breadcrumbs.push({
      label: category,
      href: `/shop?category=${category}`,
    });
  }

  if (formattedSlug) {
    breadcrumbs.push({
      label: "Shop",
      href: "/shop-all",
    });
    breadcrumbs.push({
      label: formattedSlug,
      href: `/${formattedSlug}`,
    });
  } else {
    breadcrumbs.push({
      label: text,
      href: "#",
    });
  }

  return (
    <nav aria-label="Breadcrumb" className="uppercase font-bold text-sm">
      <ol className="flex space-x-2">
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              {index > 0 && <span>/</span>}
              {isLast ? (
                <span className="text-primary">{breadcrumb.label}</span>
              ) : (
                <Link href={breadcrumb.href} className="hover:text-primary">
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbsHeader;
