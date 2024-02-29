# library

## Description

This is a library system made using vanilla HTML, CSS & JS. It is part of [The Odin Project](https://www.theodinproject.com/). At the time of writing, link for this particular project is [Project: Admin Dashboard](https://www.theodinproject.com/lessons/node-path-javascript-library). The project uses OOP principles. Flexbox & Grid system are used too for layout. For overall layout & cards, Grid is used. Flexbox is used to layout individual components here & there. Personally, the prototype syntax was looking not so clean in appearance, so inclining towards class syntax which is basically synthetic sugar for prototypes in js was natural.

## File Structure

There is an index file named as `index.html` which is starting point of project. A folder named `styles` which comprises of CSS reset file `reset.css` & `style.css` for all styling. There are icon, fonts & images folders which are self explanatory. The js folder consists of `book.js`, `display.js`, `library.js` & `validation.js`. `library.js` is main javascript file & is only js file directly linked to HTML via src attribute in title of `index.html`. Any of js files can't communicate with each other directly & are dependent on `library.js`. `book.js` is basically for keeping books, adding, deleting them etc. `display.js` is related to visuals on screen. `validation.js` is used to validate data from input form as well as for some visual feedback depending on input state being right or wrong. `library.js` is responsible for creating objects as well as linking overall functionality of all js files.

## Some Features

When page is first loaded, some default books are shown to user. Hovering over any of them reveals its controls presenting the opportunity to delete a book or change read status. In the header, there is a button to add new book via an input form. The form is quite responsive in providing visual feedback while inputting data as well as on submission. Only title field of a new book is must. All other fields are optional. If the form validated successfully before & after submission, then a book is added to library as well as shown on display in form of a card showing book picture on left as well as entered fields on right. Default data is inserted in case optional fields are left blank.

## Thoughts

This project was somewhat daunting in start due to the wish of using OOP in js . But once the basic structure went up, things went quite smoothly. Using class syntax instead of pure prototypes was tremendous help. The code pattern was learned during the ruby projects which helped quite a lot. These may not be good OOP practices, so use the code on your own discretion.

## Future Ideas/Issues

- Adding categories on left bar
- Sorting books by categories
- Sorting books by different fields like last added etc
- Searching books
- Editing already added book info
- Showing image credits on a separate card or in some better way
- favorite books
- If image is not provided, use more types of images, dynamic good looking colors etc
- Better card controls(delete, change status) look
