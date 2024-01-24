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
    this.displayLibraryBooks(this.bookObj.myLibrary);
    this.setModal();
    // this.processModal();
  }

  addDefaultBooks() {
    // const cards_list = document.querySelectorAll('.card');
    // cards_list.forEach((card, idx) => {
    //   const cover_url = card.querySelector('img');
    // });
    let default_books = [
      {
        'title': 'The chronicles of Narnia', 'author': 'Interior Designer', 'pages': '190 / 313', 'read': 'No', 'cover_url': `./images/compressed/tim-alex-xG5VJW-7Bio-unsplash.jpg`, 'cover': `Photo by <a
    href="https://unsplash.com/@thelondoner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tim
    Alex</a> on <a
    href="https://unsplash.com/photos/a-blue-book-with-a-picture-of-a-man-walking-through-the-woods-xG5VJW-7Bio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`},
      {
        'title': 'Getting started with adobe digital editions adobe digital editions', 'author': 'Interior Designer Interior Designer', 'pages': '190 / 313', 'read': 'No', 'cover_url': `./images/compressed/madalyn-cox-O7ygzpAL4Mc-unsplash.jpg`, 'cover': `Photo by <a
    href="https://unsplash.com/@madalyncox?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Madalyn
    Cox</a> on <a
    href="https://unsplash.com/photos/a-book-sitting-on-top-of-a-wooden-table-next-to-a-pool-O7ygzpAL4Mc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`},
      {
        'title': 'Getting started with adobe digital editions', 'author': 'Interior Designer', 'pages': '190 / 313', 'read': 'No', 'cover_url': `./images/compressed/jon-tyson-pFnvc1Cu6zI-unsplash.jpg`, 'cover': `Photo by <a
      href="https://unsplash.com/@jontyson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jon
      Tyson</a> on <a
      href="https://unsplash.com/photos/a-book-full-of-hope-book-pFnvc1Cu6zI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>` },
      {
        'title': 'Getting started with adobe digital editions', 'author': 'Interior Designer', 'pages': '190 / 313', 'read': 'No', 'cover_url': `./images/compressed/surja-sen-das-raj-ViMrMawjj7s-unsplash.jpg`, 'cover': `Photo by <a
      href="https://unsplash.com/@surjasendas?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Surja
      Sen Das Raj</a> on <a
      href="https://unsplash.com/photos/a-copy-of-the-book-company-of-one-by-paul-jarviss-ViMrMawjj7s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>` },
      {
        'title': 'Getting started with adobe digital editions', 'author': 'Interior Designer', 'pages': '190 / 313', 'read': 'No', 'cover_url': `./images/compressed/5172496.jpg`, 'cover': `Image by <a
      href="https://www.freepik.com/free-psd/world-forest-day-flyer-template_13164166.htm#query=book%20cover&position=45&from_view=search&track=ais&uuid=415fc42f-67bf-4cc9-90d8-c7112b586e9f">Freepik</a>` }
    ]

    for (let book_obj of default_books) {
      let book_arr = Object.values(book_obj)
      this.addBookToLibrary(book_arr);
    }

  }

  addBookToLibrary(book_arr) {
    // let newBookObj = new Book();
    // this.bookObj.addBookToLibrary('sample', 'author', 190, 'yes');
    this.bookObj.addBookToLibrary(book_arr);
    // this.bookObj = new Book();
    // console.log(this.bookObj.myLibrary);


  }

  displayLibraryBooks(myLibrary) {

    myLibrary.forEach((book_obj, idx) => {
      let book_arr = Object.values(book_obj);
      const book_number = idx + 1;
      this.addCard(book_arr, book_number);

      const cardEle = document.getElementById(`card-${book_number}`);
      this.showHideCardControls(cardEle);
    });

    // const cardsArray = document.querySelectorAll('.card');
    // cardsArray.forEach((cardEle, idx) => {

    //   this.showHideCardControls(cardEle);

    // });

  }

  showHideCardControls(cardEle) {
    let events = ['mouseenter', 'mouseleave'];
    function getEventType(event) {
      const log = document.getElementById("log");
      log.innerText = `${event.type}\n${log.innerText}`;
    }
    events.forEach(mouse_event => cardEle.addEventListener(mouse_event, (e) => {
      const card_controls = cardEle.querySelector('.card-controls');
      card_controls.childNodes.forEach((child, idx, mouse_event) => {
        if (e.type === 'mouseenter') {
          document.getElementById(child.getAttribute('ID')).style.visibility = 'visible';
        } else
          if (e.type === 'mouseleave') {
            document.getElementById(child.getAttribute('ID')).style.visibility = 'hidden';
          }
      });
    }));
  }

  setModal() {
    this.displayObj.setModal();
    let form = document.getElementById('form');
    // remember that 'submit' event works only for form, not for buttons:
    form.addEventListener(('submit'), e => {
      console.log('submitted...');
      this.processModal(e);
    });
  }

  processModal(e) {
    let input_values_arr = [];
    const req_inputs_arr = document.querySelectorAll('.form_inputs');
    req_inputs_arr.forEach((ele, idx) => {
      if (ele != '' || ele != null) {

        input_values_arr.push(req_inputs_arr[idx].value);
      } else
        input_values_arr.push('Not specified');
    });
    this.addBookToLibrary(input_values_arr);
    this.addCard(input_values_arr, this.bookObj.myLibrary.length);
    this.resetModal();
    // });

  }

  addCard(input_values_arr, book_number) {
    this.displayObj.addCard(input_values_arr, book_number);
    const cardEle = document.getElementById(`card-${book_number}`)
    this.showHideCardControls(cardEle);
  }

  resetModal() {
    this.displayObj.resetModal();
  }





}

const main = new Main();
main.start();
// image id attribute not showing up in DOM for some reason. So:
// const addButton = document.querySelector('img[alt=plus]');
// const bookAddListener = addButton.addEventListener('click', e => {
//   // main.processModal()
//   // main.showModal()
//   // main.addBookToLibrary();

// });
