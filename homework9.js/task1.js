import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book ("How to stop the war", "Iryna Bohomolets", 2024);
book1.printInfo();
const book2 = new Book ("Hello, world", "Ivanna Wase", 1998);
book2.printInfo();
console.log (book2.title);

const ebook1 = new EBook ("Why should we learn English", "Helen Donado", 1998, "pdf");
ebook1.printInfo();

const books = [book1, book2, ebook1];
const oldestBook = Book.showOldestBook (books);
console.log (`The oldest book is ${oldestBook.title}`);

const ebook2 = EBook.showBook(book1, "epub");
ebook2.printInfo();
