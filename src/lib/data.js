import fs from "fs";
import path from "path";

export async function getBooks() {
  const filePath = path.join(process.cwd(), "public", "books.json");

  const jsonData = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(jsonData);
}

export async function getBookById(id) {
  const books = await getBooks();
  return books.find((book) => String(book.id) === String(id));
}
