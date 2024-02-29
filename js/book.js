export class Book {

  constructor(book_arr) {
    // I first made these private using #. Even I was storing them in other class Library as an object, but in that class, they were not iterate able when traversed. Because they are private fields. They became private in other class too in stored object. Private fields are not iterate able in JS.
    this.id = book_arr[0];
    this.title = book_arr[1];
    this.author = book_arr[2];
    this.pages_read = book_arr[3];
    this.pages_total = book_arr[4]
    this.read = book_arr[5];
    this.cover_url = book_arr[6];
    this.cover = book_arr[7];
    return
  }

}


