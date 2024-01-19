export class Book {
  constructor() {
    this.title;
    this.author;
    this.pages;
    this.read;
    this.cover_url;
    this.cover;
  }

  myLibrary = [];

  addBook(book_arr) {
    this.title = book_arr[0];
    this.author = book_arr[1];
    this.pages = book_arr[2];
    this.read = book_arr[3];
    this.cover_url = book_arr[4];
    this.cover = book_arr[5];
    this.myLibrary.push({ 'title': this.title, 'author': this.author, 'pages': this.pages, 'read': this.read, 'cover_url': this.cover_url, 'cover': this.cover });

    // const fs = require('node:fs');
    // const content = 'Some content!';
    // fs.writeFile('/test.txt', content, err => {
    // if (err) {
    //   console.error(err);
    // }
    // file written successfully
    // });
  }

  deleteBook() {

  }

  changeReadStatus() {

  }
}


