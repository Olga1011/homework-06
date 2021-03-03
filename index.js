class Book {
  title;
  genre;
  author;
  isRead;
  date;

  constructor(title, genre, author, isRead, date) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
    this.date = date;
  }
}

let book1 = new Book("Alisa", "novel", "Luther King", true, "10.11.14");
let book2 = new Book(
  "21 lessons for the 21st Century",
  "Non-fiction",
  "Harari",
  false,
  "06.07.2020"
);
let book3 = new Book("Homo Sapiens", "Non-fiction", "Harari", true, "23.02.12");
let book4 = new Book(
  "Bodily changes in pain,hunger and rage",
  "Biology",
  "Walter Connan",
  false,
  "21.03.12"
);
let book5 = new Book("Homo Deus", "Non-fiction", "Harari", false, "20.01.2021");
// console.log(book1);

let bookList = {
  allBooks: [],
  readBooks: [],
  notRead: [],
  nextBook: {},
  currentBookRead: {},
  lastBookRead: {},

  add(book) {
    this.allBooks.push(book);
    if (book.isRead === true) {
      this.readBooks.push(book);
      this.lastBookRead = this.readBooks[this.readBooks.length - 1];
    }
    if (book.isRead === false) {
      this.notRead.push(book);
      this.nextBook = this.notRead[1];
    }
    if (book.isRead === false && this.notRead.indexOf(book) === 0) {
      this.currentBookRead = book;
    }
  },

  finishCurrentBook() {
    if (this.currentBookRead.isRead === false) {
      this.currentBookRead.isRead = true;
      this.currentBookRead.date = new Date(Date.now());
      this.lastBookRead = this.currentBookRead;
      this.currentBookRead = this.nextBook;
      this.nextBook = this.allBooks[0];
    }
  },
};

bookList.add(book1);
bookList.add(book2);
bookList.add(book3);
bookList.add(book4);
bookList.add(book5);
bookList.finishCurrentBook();

console.log(bookList.nextBook);
