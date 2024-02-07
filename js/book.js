export class Book {
  constructor() {
    this.id;
    this.title;
    this.author;
    this.pages;
    this.read;
    this.cover_url;
    this.cover;
  }

  myLibrary = [];

  addBookToLibrary(book_arr) {
    this.id = book_arr[0];
    this.title = book_arr[1];
    this.author = book_arr[2];
    this.pages = book_arr[3];
    this.read = book_arr[4];
    this.cover_url = book_arr[5];
    this.cover = book_arr[6];
    if (this.myLibrary.push({
      'id': this.id, 'title': this.title, 'author': this.author,
      'pages': this.pages, 'read': this.read, 'cover_url': this.cover_url, 'cover': this.cover
    })) {
      return true;
    }
    return false;

    // const fs = require('node:fs');
    // const content = 'Some content!';
    // fs.writeFile('/test.txt', content, err => {
    // if (err) {
    //   console.error(err);
    // }
    // file written successfully
    // });
  }

  removeBookFromLibrary(book_id) {
    // console.log(`books before: removal: `);
    // console.log(this.myLibrary);
    for(let i=0; i < this.myLibrary.length; i++) {
      if(book_id == this.myLibrary[i]['id']) {
        this.myLibrary.splice(i, 1);
        break;
      }
      
    }
    
    // console.log(`books after removal:`);
    // console.log(this.myLibrary);
  }

  changeReadStatus(book_id, checked) {
    for(let i=0;i < this.myLibrary.length; i++) {
      if(book_id == this.myLibrary[i]['id']) {
        if (checked) {
          this.myLibrary[i]['read'] = 'Yes';
          return this.myLibrary[i]['read']
        }
        this.myLibrary[i]['read'] = 'No';
        return this.myLibrary[i]['read']
      }
    }
  }
}


