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
    this.displayBooks(this.bookObj.myLibrary);
    this.setModal();
    this.processModal();
  }

  setModal() {
    this.displayObj.setModal();
  }

  // showModal() {
  //   this.displayObj.showModal();
  // }

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

  addBook() {
    // let newBookObj = new Book();
    this.bookObj.addBook('sample', 'author', 190, 'yes');
    // this.bookObj = new Book();
    // console.log(this.bookObj.myLibrary);
    this.displayBooks(this.bookObj.myLibrary);

  }

  displayBooks(myLibrary) {
    this.displayObj.displayBooks(myLibrary);
  }

}

const main = new Main();
main.start();
// image id attribute not showing up in DOM for some reason. So:
const addButton = document.querySelector('img[alt=plus]');
const bookAddListener = addButton.addEventListener('click', e => {
  // main.showModal()
  main.addBook();

});
