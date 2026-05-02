"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import books from "@/data/books.json"; 
import "animate.css";

export default function Home() {
  const [booksData] = useState(books);

  const featuredBooks = books.slice(0, 4);

  return (
    <div className="container mx-auto my-10">
      <section className="hero min-h-96 bg-linear-to-r from-indigo-500 to-purple-600 text-white rounded-t-xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Find Your Next Read
          </h1>
          <p className="mt-4 text-lg">
            Explore thousands of books from different categories
          </p>

          <Link href="/allbooks">
            <button className="btn bg-linear-to-r from-indigo-600 to-purple-600 text-white mt-6">
              Browse Now
            </button>
          </Link>
        </div>
      </section>

      <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-3 rounded-b-xl">
        <button className="btn bg-red-500 text-white">Latest</button>
        <Marquee pauseOnHover={true} speed={100}>
          New Arrivals: Atomic Habits | Clean Code | The Silent Patient |
          Special Discount on Memberships 🎉
        </Marquee>
      </div>

      <section className="py-20">
        <h2 className="text-5xl font-bold text-center mb-16">Featured Books</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div key={book.id} className="card bg-base-100 shadow-lg">
              <figure>
                <Image
                  src={book.image_url}
                  alt={book.title}
                  height={400}
                  width={400}
                  className="h-60 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p className="text-sm text-gray-500">{book.author}</p>

                <div className="card-actions justify-end">
                  <Link href={`/books/${book.id}`}>
                    <button className="btn btn-sm bg-linear-to-r from-indigo-600 to-purple-600 text-white">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔶 Extra Section 1: Why Choose Us */}
      <section className="bg-gray-50 md:p-20 py-10 rounded-2xl">
        <div className=" mx-auto text-center">
          {/* Title */}
          <h2 className="text-2xl md:text-[48px] font-bold text-gray-800 mb-3">
            Why Choose Bookify?
          </h2>
          <p className="text-sm text-gray-500 md:mb-16 mb-8">
            A smarter way to explore, borrow, and enjoy books instantly.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 md:px-0 px-4">
            {/* Card 1 */}
            <div className="relative bg-white rounded-2xl shadow-sm px-8 py-10 flex flex-col">
              <div className="absolute top-4 right-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold px-3 py-2.5 rounded-full">
                01
              </div>
              <div className="text-4xl m-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fast Access
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Borrow books instantly without waiting.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white rounded-2xl shadow-sm px-8 py-10 flex flex-col">
              <div className="absolute top-4 right-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold px-3 py-2.5 rounded-full">
                02
              </div>
              <div className="text-4xl m-4">🔐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Secure
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Your data is protected with modern authentication.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white rounded-2xl shadow-sm px-8 py-10 flex flex-col">
              <div className="absolute top-4 right-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold px-3 py-2.5 rounded-full">
                03
              </div>
              <div className="text-4xl m-4">📚</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Huge Collection
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Explore books across multiple categories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔶 Extra Section 2: Popular Categories */}
      <section className=" py-20 text-center">
        <div className=" mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
            Popular Categories
          </h2>
          <p className="text-gray-500 mb-10">
            Explore your favorite topics books
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-5 animate__animated animate__pulse animate__infinite">
            <div className="px-6 py-3 rounded-full bg-linear-to-r from-indigo-400 to-purple-500 text-white font-medium shadow-md hover:scale-105 transition-transform ">
              Story
            </div>

            <div className="px-6 py-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 text-white font-medium shadow-md hover:scale-105 transition-transform">
              Tech
            </div>

            <div className="px-6 py-3 rounded-full bg-linear-to-r from-green-400 to-emerald-700 text-white font-medium shadow-md hover:scale-105 transition-transform">
              Science
            </div>

            <div className="px-6 py-3 rounded-full bg-linear-to-r from-pink-400 to-rose-500 text-white font-medium shadow-md hover:scale-105 transition-transform ">
              Fiction
            </div>

            <div className="px-6 py-3 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 text-white font-medium shadow-md hover:scale-105 transition-transform ">
              Business
            </div>

            <div className="px-6 py-3 rounded-full bg-linear-to-r from-gray-500 to-gray-900 text-white font-medium shadow-md hover:scale-105 transition-transform">
              History
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
