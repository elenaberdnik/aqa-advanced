export default class Book {
    constructor (title, author, year) {
        this.title = title,
        this.author = author,
        this.year = year
    }
    printInfo () {
        console.log (`${this.title} was written by ${this.author} in ${this.year}.`);
    }
    get title() {
        return this._title; 
    }
    get author() {
        return this._author;
    }
    get year () {
        return this._year;
    }
    set title (value) {
        if (value === "") {
      throw new Error ("Title cannot be empty");
}
      this._title = value;
}
    set author (value) {
        if (value === "") {
      throw new Error ("Author cannot be empty");
}
      this._author = value;
}    
 set year (value) {
        if (value <= 0) {
      throw new Error ("Year cannot be negative");
}
      this._year = value;
}
static findOldestBook (books) {
    return books.reduce ((oldest, current)  => {
        return (oldest.year < current.year) ? oldest : current;

    })
    
}
} 

