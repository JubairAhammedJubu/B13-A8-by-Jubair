import {getBooks} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {BsArrowRight} from "react-icons/bs";
import {FaStar, FaEye} from "react-icons/fa";
import {notFound, redirect} from "next/navigation";
import {authClient} from "@/lib/auth-client";
import BorrowButton from "@/components/homepage/books/BorrowButton";

export const generateMetadata = async ({params}) => {
  const {id} = await params;

  const books = await getBooks();
  const book = books.find((b) => b.id === Number(id));

  return {
    title: book?.title || "Book Details",
    description: book?.description || "Book details page",
  };
};

const BookDetailsPage = async ({params}) => {
  const {id} = await params;

  const books = await getBooks();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="text-center my-15">
        <h2 className="text-2xl font-bold">Book not found</h2>{" "}
        <Link href="/books" className="btn btn-primary mt-4">
          Back to Books
        </Link>
      </div>
    );
  }

  const handleBorrow = () => {
    if (!isLoggedIn) {
      router.push("/login"); // 🔹 redirect if logged out
      return;
    }
  }

  return (
    <div className="max-w-5xl mx-auto my-5 md:my-10 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT: IMAGE */}
        <div className="w-full">
          <Image
            src={book.image_url}
            alt={book.title}
            width={500}
            height={700}
            className="w-full h-100 md:h-125 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="flex flex-col gap-4 my-auto">
          <h1 className="text-3xl font-bold text-gray-800">{book.title}</h1>

          <h3 className="text-lg text-gray-600">
            Author:{" "}
            <span className="font-semibold">{book.author || "Unknown"}</span>
          </h3>

          <p className="text-gray-700 leading-relaxed">
            {book.description || "No description available for this book."}
          </p>

          <div className="mt-4">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
              {book.available_quantity
                ? `${book.available_quantity} copies left`
                : "Availability unknown"}
            </span>
          </div>

          <div className="flex items-center gap-5 mt-4">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>{book.rating || "4.5"}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEye />
              <span>{book.views || "1.2k"}</span>
            </div>
          </div>

          <div className="flex gap-2 items-center ">
            {/* Buttons */}
            <BorrowButton book={book} />

            <Link href="/allbooks">
              <button className="btn bg-linear-to-r from-pink-400 to-rose-500 text-white">
                Back to Books <BsArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
