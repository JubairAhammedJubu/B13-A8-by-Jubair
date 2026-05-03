import {getBooks} from "@/lib/data";
import BooksClient from "@/components/homepage/books/BooksClient";

const AllBooksPage = async () => {
  const booksData = await getBooks();

  return <BooksClient books={booksData} />;
};

export default AllBooksPage;
