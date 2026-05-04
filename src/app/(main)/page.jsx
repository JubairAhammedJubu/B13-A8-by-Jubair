import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import {getBooks} from "@/lib/data";

export default async function Home() {
  const booksData = await getBooks();
  const featuredBooks = booksData.slice(0, 4);

  return (
    <div className="container p-3 md:p-0 mx-auto my-10">
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
          Special Discount on Memberships
        </Marquee>
      </div>

      <section className="py-10 md:py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">
          Featured Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div key={book.id} className="card bg-base-100 shadow-lg">
              <figure>
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={400}
                  height={400}
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

      <section className="bg-gray-50 md:p-20 py-10 rounded-2xl text-center">
        <h2 className="text-2xl md:text-[48px] font-bold text-gray-800 mb-3">
          Why Choose Bookify?
        </h2>

        <p className="text-sm text-gray-500 md:mb-16 mb-8">
          A smarter way to explore, borrow, and enjoy books instantly.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            ⚡<h3 className="font-semibold mt-3">Fast Access</h3>
            <p className="text-gray-500 text-sm mt-2">
              Borrow books instantly without waiting.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            🔐
            <h3 className="font-semibold mt-3">Secure</h3>
            <p className="text-gray-500 text-sm mt-2">
              Your data is protected with modern authentication.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            📚
            <h3 className="font-semibold mt-3">Huge Collection</h3>
            <p className="text-gray-500 text-sm mt-2">
              Explore books across multiple categories
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
