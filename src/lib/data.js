import fs from "fs";
import path from "path";

export async function getBooks() {
  const filePath = path.join(process.cwd(), "public", "books.json");

<<<<<<< HEAD
  const jsonData = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(jsonData);
=======
  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");

    console.log("RAW DATA:", jsonData.slice(0, 100));

    return JSON.parse(jsonData);
  } catch (error) {
    console.error("ERROR IN getBooks:", error);
    return [];
  }
>>>>>>> d4a4325 (chek)
}

export async function getBookById(id) {
  const books = await getBooks();
  return books.find((book) => String(book.id) === String(id));
}
