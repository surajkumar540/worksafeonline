"use client";

import Image from "next/image";
import { Get } from "@/api/generalApi";
import { toast } from "react-toastify";
import { IoMdSearch } from "react-icons/io";
import { bigShoulders } from "@/app/layout";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Search = () => {
  const searchRef = useRef<HTMLDivElement | null>(null);

  const [products, setProducts] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingTextArray = [
    "Find what inspires you!",
    "Your perfect match is here!",
    "Shop the hottest deals today!",
    "Uncover the latest must-haves!",
    "Transform your style with ease!",
    "Explore exclusive collections now!",
    "Search for something extraordinary!",
    "Discover your next favorite product!",
    "Start your search for amazing finds!",
    "Browse top-rated items effortlessly!",
  ];
  const pauseTime = 1500;
  const minSearchLength = 3;
  const debounceDelay = 1000;
  const typingSpeed = isDeleting ? 50 : 100;

  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  // Typewriter effect
  useEffect(() => {
    const currentString = typingTextArray[typingIndex];

    if (!isDeleting && charIndex === currentString.length) {
      setTimeout(() => setIsDeleting(true), pauseTime); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % typingTextArray.length); // Move to next string
    } else {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        setPlaceholder(
          currentString.slice(0, charIndex + (isDeleting ? -1 : 1))
        );
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, typingIndex]);

  useEffect(() => {
    if (searchText.length < minSearchLength) return;
    if (debounceTimeout) clearTimeout(debounceTimeout);

    const timeout = setTimeout(() => {
      callApi(searchText);
    }, debounceDelay);

    setDebounceTimeout(timeout);
    return () => clearTimeout(timeout);
  }, [searchText]);

  const callApi = async (query: string) => {
    const response = await Get("api/SearchProducts?search=" + query);
    if (response.status) {
      setOpenModal(true);
      setProducts(response.product);
    } else toast.info("No products found!");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setOpenModal(false);
        setSearchText("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={searchRef} className="relative hidden w-full lg:block">
      <input
        type="text"
        value={searchText}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="w-full px-4 text-lg py-3 text-gray-500 rounded-full outline-none"
      />
      <button className="absolute z-20 top-0 right-0 px-4 py-3 rounded-full">
        <IoMdSearch size={25} className="text-black" />
      </button>
      {openModal && products.length > 0 && (
        <div className="absolute w-full z-20 top-[58px] shadow-2xl bg-white right-0 text-gray-500 text-sm p-4 pb-2 rounded-lg overflow-auto max-h-64">
          <ul className={`${bigShoulders.className} font-extrabold text-lg`}>
            {products.map((product: any, index: number) => (
              <li
                key={index}
                className="border-b cursor-pointer flex justify-between items-center py-2 text-gray-700"
              >
                <Link href={`/product/${product?.MenuId}/${product?.Style}`}>
                  <span className="hover:text-primary flex items-center gap-2">
                    {/* <Image
                    src={product?.ListingImage}
                    alt={product?.Description}
                    width={32}
                    height={32}
                    className="object-contain rounded-full"
                    /> */}
                    {product.Description ?? "Unnamed Product"}{" "}
                  </span>
                </Link>
                <span>{product?.EndPrice}$</span>
              </li>
            ))}
          </ul>
          {openModal && products.length > 0 && (
            <p className="text-center mt-2">
              {`Showing ${products.length} results`}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
