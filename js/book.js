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

  addBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.cover_url = cover_url;
    this.cover = cover;
    this.myLibrary.push({title, author, pages, read, cover_url, cover});

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


