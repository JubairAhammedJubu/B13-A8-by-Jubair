import Image from "next/image";
import Link from "next/link";
import React from "react";
import notFound from "@/assets/notfound.jpeg";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 space-y-3">
      <Image
        src={notFound}
        alt="Page not found illustration"
        width={400}
        height={400}
        className="mx-auto"
      />

      <p className="text-xl text-gray-600">Page Not Found</p>

      <p className="text-sm md:text-base text-gray-400">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-emerald-900 text-white px-4 py-3 rounded-md hover:bg-emerald-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
