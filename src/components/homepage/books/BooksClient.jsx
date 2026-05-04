"use client";

import {useState} from "react";
import LeftSidebar from "./LeftSidebar";
import BookCard from "./BookCard";

const BooksClient = ({books}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...new Set(books.map((b) => b.category))];

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;

    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto grid grid-cols-12 gap-2 md:gap-4 my-10 px-2">
      
      <div className="col-span-3 text-xs md:text-base">
        <LeftSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      
      <div className="col-span-9">
        <h2 className="font-bold text-center md:text-left md:text-lg mb-4">{selectedCategory} Books</h2>

        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search books by title..."
            className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksClient;
