import {getBooks} from "@/lib/data";
import BooksClient from "@/components/homepage/books/BooksClient";

export default async function AllBooksPage() {
  const booksData = await getBooks();

  return <BooksClient books={booksData} />;
}
