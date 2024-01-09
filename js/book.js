export class Book {
  constructor() {
    this.title;
    this.author;
    this.pages;
    this.read;
  }

  myLibrary = [];

  addBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.myLibrary.push({title, author, pages, read});

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


