import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col pt-8 md:pt-20 lg:pt-24 items-center justify-center min-h-screen p-4 bg-gray-100 text-center">
      <Image
        src={"/assets/others/Illustration.png"}
        alt="404 Page Image"
        width={500}
        height={500}
        unoptimized
        priority
        className="object-contain"
      />
      <h2 className="text-2xl mt-5 font-bold text-red-500">
        404 - Page Not Found
      </h2>
      <p className="mt-2 text-lg text-gray-600">
        We provide professional web services for individuals and businesses.
      </p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 text-nowrap bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Back to Home
      </Link>
    </div>
  );
}
