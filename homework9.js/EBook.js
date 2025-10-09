import Book from "./Book.js";
export default class EBook extends Book {
    constructor (title, author, year, fileFormat) {
    super (title, author, year);
    this.fileFormat = fileFormat;
}
printInfo () {
    console.log (`${this.title} was written by ${this.author} in ${this.year} and file format is ${this.fileFormat}.`);
} 
 get fileFormat() {
         return this._fileFormat;
}
   set fileFormat (value) {
        if (value === "") {
      throw new Error ("File Format cannot be empty");
}
      this._fileFormat = value;
}
static showBook(bookInstance, fileFormat) {
  if (!(bookInstance instanceof Book)) {
    throw new Error("Argument must be an instance of Book");
  }
  if (typeof fileFormat !== "string" || fileFormat.trim() === "") {
    throw new Error("File format must be a non-empty string");
  }
  return new EBook(
    bookInstance.title,
    bookInstance.author,
    bookInstance.year,
    fileFormat
  );
}
}
