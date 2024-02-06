import { Display } from './display.js';
import { Shelf } from './shelf.js';
import { Book } from './book.js';

class Main {
  constructor() {
    this.bookObj;
    this.display;

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

    let default_books = [
      {
        'id': 0, 'title': 'The chronicles of Narnia', 'author': 'Interior Designer', 'pages': '190 / 313', 'read': 'No', 'cover_url': `./images/compressed/tim-alex-xG5VJW-7Bio-unsplash.jpg`, 'cover': `Photo by <a
    href="https://unsplash.com/@thelondoner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tim
    Alex</a> on <a
    href="https://unsplash.com/photos/a-blue-book-with-a-picture-of-a-man-walking-through-the-woods-xG5VJW-7Bio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`},
      {
        'id': 1, 'title': 'Getting started with adobe digital editions adobe digital editions', 'author': 'Interior Designer Interior Designer', 'pages': '190 / 313', 'read': 'No', 'cover_url': `./images/compressed/madalyn-cox-O7ygzpAL4Mc-unsplash.jpg`, 'cover': `Photo by <a
    href="https://unsplash.com/@madalyncox?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Madalyn
    Cox</a> on <a
    href="https://unsplash.com/photos/a-book-sitting-on-top-of-a-wooden-table-next-to-a-pool-O7ygzpAL4Mc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`},
      {
        'id': 2, 'title': 'Getting started with adobe digital editions', 'author': 'Interior Designer', 'pages': '190 / 313', 'read': 'No', 'cover_url': `./images/compressed/jon-tyson-pFnvc1Cu6zI-unsplash.jpg`, 'cover': `Photo by <a
      href="https://unsplash.com/@jontyson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jon
      Tyson</a> on <a
      href="https://unsplash.com/photos/a-book-full-of-hope-book-pFnvc1Cu6zI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>` },
      {
        'id': 3, 'title': 'Getting started with adobe digital editions', 'author': 'Interior Designer', 'pages': '190 / 313', 'read': 'No', 'cover_url': `./images/compressed/surja-sen-das-raj-ViMrMawjj7s-unsplash.jpg`, 'cover': `Photo by <a
      href="https://unsplash.com/@surjasendas?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Surja
      Sen Das Raj</a> on <a
      href="https://unsplash.com/photos/a-copy-of-the-book-company-of-one-by-paul-jarviss-ViMrMawjj7s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>` },
      {
        'id': 4, 'title': 'Getting started with adobe digital editions', 'author': 'Interior Designer', 'pages': '190 / 313', 'read': 'No', 'cover_url': `./images/compressed/5172496.jpg`, 'cover': `Image by <a
      href="https://www.freepik.com/free-psd/world-forest-day-flyer-template_13164166.htm#query=book%20cover&position=45&from_view=search&track=ais&uuid=415fc42f-67bf-4cc9-90d8-c7112b586e9f">Freepik</a>` }
    ]

    for (let book_obj of default_books) {
      let book_arr = Object.values(book_obj)
      this.bookObj.addBookToLibrary(book_arr);
    }

  }

  // addBookToLibrary(book_arr) {
  //   this.bookObj.addBookToLibrary(book_arr);
  // }

  displayLibraryBooks(myLibrary) {

    myLibrary.forEach((book_obj, idx) => {
      let singleBook_arr = Object.values(book_obj);
      const book_id = singleBook_arr[0];
      this.addCard(singleBook_arr, book_id);

    });

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
    // let book_id = this.bookObj.myLibrary.length + 1;
    let maxBookID = this.bookObj.myLibrary[0]['id'];
    for(let bookObj of this.bookObj.myLibrary) {
      if(maxBookID < bookObj['id']) {
        maxBookID = bookObj['id'];
      }
    }

    let book_id = maxBookID + 1;
    // console.log(lib);
    input_values_arr.push(book_id);
    const req_inputs_arr = document.querySelectorAll('.form_inputs');
    req_inputs_arr.forEach((ele, idx) => {
      if (ele != '' || ele != null) {
        input_values_arr.push(req_inputs_arr[idx].value);
      } else
        input_values_arr.push('Not specified');
    });
    // First add book to library, then show card:
    if(this.bookObj.addBookToLibrary(input_values_arr)) {
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
    const cardEle = document.getElementById(`card-${book_id}`)
    this.displayObj.showHideCardControls(cardEle);
    this.processCardControls(cardEle, book_id);
  }



  processCardControls(cardEle, book_id) {
    // cardEle.addEventListener('click', e => {
    const remove_icon = document.getElementById(`card-controls-remove-icon-${book_id}`);
    const read_check = document.getElementById(`card${book_id}_status`);
    const controls_arr = [remove_icon, read_check];
    for (let ele of controls_arr) {
      ele.addEventListener('click', e => {
        if (e.target.id == `card-controls-remove-icon-${book_id}`) {
          cardEle.remove();
            // As << book_id >> is basically index + 1, so taking index only:
            this.bookObj.removeBookFromLibrary(book_id)
          
          // alert(`Book can't be removed for some reason`)
        } else
          if (e.target.id == `card${book_id}_status`) {
            // alert('here2');
            const read_with_no = '<span class="read-span">Read: </span>No';
            const read_with_yes = '<span class="read-span">Read: </span>Yes';

            const para_id = document.getElementById(`Read${book_id}`);
            if (para_id.innerHTML == read_with_no || para_id.innerHTML == '<span>Read: </span>') {
              para_id.innerHTML = read_with_yes
            }
            else
              para_id.innerHTML = read_with_no
            // para_id.appendChild(document.createTextNode(`sss`));
          }
      });
    }
    // })
  }

  resetModal() {
    this.displayObj.resetModal();
  }

}

const main = new Main();
main.start();