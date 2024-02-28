import { Display } from './display.js';
import { Book } from './book.js';
import { Validation } from './validation.js';

class Main {
  constructor() {
  }

  start() {
    (function createObjects() {
      this.bookObj = new Book();
      this.displayObj = new Display();
      this.validationObj = new Validation();
    }).call(this); // using call to manually bind << this >>
    this.addDefaultBooks();
    this.displayLibraryBooks(this.bookObj.myLibrary);
    this.setModal();
  }

  addDefaultBooks() {

    let default_books = [
      {
        'id': 0, 'title': 'The chronicles of Narnia', 'author': 'Some Author', 'pages_read': '190', 'pages_total': '1000', 'read': 'No', 'cover_url': `./images/compressed/tim-alex-xG5VJW-7Bio-unsplash.jpg`, 'cover': `Photo by <a
    href="https://unsplash.com/@thelondoner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tim
    Alex</a> on <a
    href="https://unsplash.com/photos/a-blue-book-with-a-picture-of-a-man-walking-through-the-woods-xG5VJW-7Bio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`},
      {
        'id': 1, 'title': 'Lord of the rings: The two towers', 'author': 'Some Human Author', 'pages_read': '190', 'pages_total': '1000', 'read': 'No', 'cover_url': `./images/compressed/madalyn-cox-O7ygzpAL4Mc-unsplash.jpg`, 'cover': `Photo by <a
    href="https://unsplash.com/@madalyncox?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Madalyn
    Cox</a> on <a
    href="https://unsplash.com/photos/a-book-sitting-on-top-of-a-wooden-table-next-to-a-pool-O7ygzpAL4Mc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`},
      {
        'id': 2, 'title': 'A book full of hope', 'author': 'Some Author', 'pages_read': '190', 'pages_total': '1000', 'read': 'No', 'cover_url': `./images/compressed/jon-tyson-pFnvc1Cu6zI-unsplash.jpg`, 'cover': `Photo by <a
      href="https://unsplash.com/@jontyson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jon
      Tyson</a> on <a
      href="https://unsplash.com/photos/a-book-full-of-hope-book-pFnvc1Cu6zI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>` },
      {
        'id': 3, 'title': 'Company of one', 'author': 'Some Author', 'pages_read': '190', 'pages_total': '1000', 'read': 'No', 'cover_url': `./images/compressed/surja-sen-das-raj-ViMrMawjj7s-unsplash.jpg`, 'cover': `Photo by <a
      href="https://unsplash.com/@surjasendas?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Surja
      Sen Das Raj</a> on <a
      href="https://unsplash.com/photos/a-copy-of-the-book-company-of-one-by-paul-jarviss-ViMrMawjj7s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>` },
      {
        'id': 4, 'title': 'World Forest Day', 'author': 'Some Author', 'pages_read': '190', 'pages_total': '1000', 'read': 'No', 'cover_url': `./images/compressed/5172496.jpg`, 'cover': `Image by <a
      href="https://www.freepik.com/free-psd/world-forest-day-flyer-template_13164166.htm#query=book%20cover&position=45&from_view=search&track=ais&uuid=415fc42f-67bf-4cc9-90d8-c7112b586e9f">Freepik</a>` }
    ]

    for (let book_obj of default_books) {
      let book_arr = Object.values(book_obj)
      this.bookObj.addBookToLibrary(book_arr);
    }

  }

  displayLibraryBooks(myLibrary) {

    myLibrary.forEach((book_obj, idx) => {
      let singleBook_arr = Object.values(book_obj);
      const book_id = singleBook_arr[0];
      this.addCard(singleBook_arr, book_id);

    });

  }
  setModal() {
    this.displayObj.setModal();
    const form = document.getElementById('form');
    // remember that 'submit' event works only for form, not for buttons:

    const inputs = document.querySelectorAll('.form-inputs');
    for(let input of inputs) {
      input.addEventListener(('input'), e => {
        const ele_name = e.target.name;
        const ele_message = `${ele_name}-message`;
        this.validationObj.validateBeforeSubmit(e, ele_name, ele_message);
      });
    }
    
    form.addEventListener(('submit'), e => {
      const req_inputs = document.querySelectorAll('input.required');
      const req_msg_spans = document.querySelectorAll('span.required');
      let req_fields_status = false;
      let optional_fields_status = false;
      for (let i = 0; i < req_inputs.length; i++) {
        req_fields_status = this.validationObj.validateRequiredAfterSubmit(req_inputs[i], req_msg_spans[i], this.bookObj.myLibrary);
      }
      const optional_inputs = document.querySelectorAll('input.optional');
      const optional_spans = document.querySelectorAll('span.optional');
      for (let i = 0; i < optional_inputs.length; i++) {
        optional_fields_status = this.validationObj.validateOptionalAfterSubmit(optional_inputs[i], optional_spans[i]);
        if (optional_fields_status == false) {
          break;
        }
      }
      if (req_fields_status == true && optional_fields_status == true) {
        this.processModal(e);
      }
    });
  }
  processModal(e) {
    let input_values_arr = [];
    let maxBookID = this.bookObj.myLibrary[0]['id'];
    for (let bookObj of this.bookObj.myLibrary) {
      if (maxBookID < bookObj['id']) {
        maxBookID = bookObj['id'];
      }
    }

    let book_id = maxBookID + 1;
    input_values_arr.push(book_id);
    const req_inputs_arr = document.querySelectorAll('.form-inputs');
    
    req_inputs_arr.forEach((_ele, idx) => {
        
        input_values_arr.push(req_inputs_arr[idx].value);
    });
    input_values_arr = this.validationObj.handleNullEtc(input_values_arr);
    // First add book to library, then show card:
    if (this.bookObj.addBookToLibrary(input_values_arr)) {
      this.addCard(input_values_arr, book_id);
    }
    else {
      // convert below to try catch for any errors:
      alert("Book can't be added to library for some reason");
    }
    this.resetModal();

  }

  addCard(singleBook_arr, book_id) {
    
    this.displayObj.addCard(singleBook_arr, book_id);
    this.displayObj.showHideCardControls(book_id);
    this.processCardControls(book_id);
  }



  processCardControls(book_id) {
    const remove_icon = document.getElementById(`card-controls-remove-icon-${book_id}`);
    const read_check = document.getElementById(`card${book_id}_status`);
    const controls_arr = [remove_icon, read_check];
    for (let ele of controls_arr) {
      ele.addEventListener('click', e => {
        if (e.target.id == `card-controls-remove-icon-${book_id}`) {
          this.processRemoveControl(book_id);

        } else
          if (e.target.id == `card${book_id}_status`) {
            let checked = e.target.checked;
            this.processChangeStatusControl(book_id, checked);
          }
      });
    }
  }

  processRemoveControl(book_id) {
    
    this.displayObj.removeCardFromDisplay(book_id);
    this.bookObj.removeBookFromLibrary(book_id);
  }

  processChangeStatusControl(book_id, checked) {
    const read_status = this.bookObj.changeReadStatus(book_id, checked);
    this.displayObj.displayChangedStatus(book_id, read_status);
  }

  resetModal() {
    this.displayObj.resetModal();
  }

}

const main = new Main();
main.start();