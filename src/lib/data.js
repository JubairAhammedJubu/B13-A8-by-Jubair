import books from "@/data/books.json";

export async function getBooks() {
  return books;
}

export async function getBookById(id) {
  return books.find((book) => String(book.id) === String(id));
}