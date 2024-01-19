import { Display } from './display.js';
import { Shelf } from './shelf.js';
import { Book } from './book.js';

class Main {
  constructor() {
    this.bookObj;
    this.display;
    // this.shelfObj = new Shelf();

  }

  start() {
    (function createObjects() {
      this.bookObj = new Book();
      this.displayObj = new Display();
    }).call(this); // using call to manually bind << this >>
    this.addDefaultBooks();
    this.displayBooks(this.bookObj.myLibrary);
    this.setModal();
    this.processModal();
  }

  addDefaultBooks() {
    // const cards_list = document.querySelectorAll('.card');
    // cards_list.forEach((card, idx) => {
    //   const cover_url = card.querySelector('img');
    // });
    let default_books = [{'title': 'Getting started with adobe digital editions', 'author': 'Interior Designer', 'pages': '190 / 313', 'read': 'No', 'cover_url': `./images/madalyn-cox-O7ygzpAL4Mc-unsplash.jpg`, 'cover': `Photo by <a
    href="https://unsplash.com/@madalyncox?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Madalyn
    Cox</a> on <a
    href="https://unsplash.com/photos/a-book-sitting-on-top-of-a-wooden-table-next-to-a-pool-O7ygzpAL4Mc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`}
    // ,
    // {'title': '', 'author': '', 'pages': '', 'read': '', 'cover_url': '', 'cover': ''},
    // {'title': '', 'author': '', 'pages': '', 'read': '', 'cover_url': '', 'cover': ''},
    // {'title': '', 'author': '', 'pages': '', 'read': '', 'cover_url': '', 'cover': ''},
    // {'title': '', 'author': '', 'pages': '', 'read': '', 'cover_url': '', 'cover': ''}
  ]

    for(let book_obj of default_books) {
      let book_arr = Object.values(book_obj)
      this.addBook(book_arr);
    } 
    
  }

  addBook(book_arr) {
    // let newBookObj = new Book();
    // this.bookObj.addBook('sample', 'author', 190, 'yes');
    this.bookObj.addBook(book_arr);
    // this.bookObj = new Book();
    // console.log(this.bookObj.myLibrary);
    

  }

  displayBooks(myLibrary) {
    
    for(let book_obj of myLibrary) {
      let book_arr = Object.values(book_obj);
      this.addCard(book_arr);
    }
    this.displayObj.displayBooks(myLibrary);
  }

  setModal() {
    this.displayObj.setModal();
  }

  // when form is submitted:
  processModal(form_data) {

    let form = document.getElementById('form');
    // remember that 'submit' event works only for form, not for buttons:
    form.addEventListener(('submit'), e => {
      console.log('submitted...');

      let input_values_arr = [];
      const req_inputs_arr = document.querySelectorAll('.form_inputs');
      req_inputs_arr.forEach((ele, idx) => {
        if (ele != '' || ele != null) {
          input_values_arr.push(req_inputs_arr[idx].value);
        } else
          input_values_arr.push('Not specified');
      });

      this.addCard(input_values_arr);
      this.resetModal();
    });

  }

  addCard(input_values_arr) {
    this.displayObj.addCard(input_values_arr);
  }

  resetModal() {
    this.displayObj.resetModal();
  }





}

const main = new Main();
main.start();
// image id attribute not showing up in DOM for some reason. So:
const addButton = document.querySelector('img[alt=plus]');
const bookAddListener = addButton.addEventListener('click', e => {
  // main.showModal()
  // main.addBook();

});
