import React, { useState } from "react";
import { bigShoulders } from "@/app/layout";

interface PaginationProps {
  filters: any;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  filters,
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const element = document.getElementById("filterSection");
      if (element) {
        const offset = -100;
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop + offset;

        if ("scrollBehavior" in document.documentElement.style)
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        else window.scrollTo(0, targetPosition);
      }
      onPageChange({ ...filters, page: page });
    }
  };

  const getVisiblePages = () => {
    const maxVisiblePages = 5;
    let pages: number[] = [];

    if (totalPages <= maxVisiblePages) {
      pages = Array.from({ length: totalPages }, (_, idx) => idx + 1);
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);
      if (startPage > 1) {
        pages.push(1);
        pages.push(-1);
      }
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (endPage < totalPages) {
        pages.push(-1);
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div
      className={`flex flex-col items-center border-t mt-10 border-t-black/20 py-3 justify-center space-y-1 ${bigShoulders.className}`}
    >
      <div className="flex justify-center lg:justify-between w-full items-center">
        <button
          className={`px-3 py-1 hidden lg:block font-black rounded-md border border-black transition-all duration-150 ease-linear ${
            currentPage === 1
              ? "opacity-80 bg-white cursor-not-allowed"
              : "hover:bg-black bg-white hover:text-white"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="space-x-1 md:space-x-2">
          {visiblePages.map((page, idx) => {
            if (page === -1) {
              return (
                <span key={idx} className="px-3 py-1">
                  ...
                </span>
              );
            }
            return (
              <button
                key={idx}
                onClick={() => handlePageChange(page)}
                className={`w-6 md:w-9 h-6 md:h-9 rounded-md border border-black ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "hover:bg-black bg-white hover:text-white"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
        <button
          className={`px-3 py-1 hidden lg:block font-black rounded-md border border-black transition-all duration-150 ease-linear ${
            currentPage === totalPages
              ? "opacity-80 bg-white cursor-not-allowed"
              : "hover:bg-black bg-white hover:text-white"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
