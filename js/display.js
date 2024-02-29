export class Display {
  constructor() {

  }
  displayBooks(myLibrary) {
    console.log(myLibrary);
  }

  setModal() {
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('header-btn');
    const span = document.getElementsByClassName("close")[0];
    
    btn.addEventListener('click', e => {
      modal.style.display = 'block';
    });

    span.addEventListener('click', e => {
      modal.style.display = 'none';
    });

    // for closing modal if clicked anywhere on screen while model is 
    // opened:
    window.addEventListener('click', e => {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
  }

  addCard(singleBook_arr, book_id) {

    const card_div = document.createElement("div");
    card_div.setAttribute('class', 'card');
    card_div.setAttribute('id', `card-${book_id}`);

    document.getElementById("main-body").appendChild(card_div);

    const card_left_div = this.#createLeftDiv(card_div, singleBook_arr);
    const card_right_div = this.#createRightDiv(card_div, singleBook_arr, book_id);
    const card_cntrls = this.#createCardControls(card_right_div, book_id)


  }

  #createLeftDiv(card_div, singleBook_arr) {
    const card_left_div = document.createElement('div');
    card_left_div.setAttribute('class', 'card-left-div');
    card_div.appendChild(card_left_div);
    const img = document.createElement('img');
    let img_input = singleBook_arr[6];
    const default_image = './images/compressed/default-image.jpg';
    if (img_input === 'Nil') { // if no image link used 
      img_input = default_image;
    }
    img.setAttribute('src', `${img_input}`);

    img.setAttribute('src', img_input);
    img.setAttribute('alt', 'Avatar');
    card_left_div.appendChild(img);
    return card_left_div;
  }

  #createRightDiv(card_div, singleBook_arr, book_id) {
    const card_right_div = document.createElement('div');
    card_right_div.setAttribute('class', 'card-right-div');
    card_div.appendChild(card_right_div);

    const card_right_div_title = document.createElement('h4');
    const title_text = singleBook_arr[1];
    const title_text_node = document.createTextNode(title_text);
    card_right_div_title.appendChild(title_text_node);
    card_right_div.appendChild(card_right_div_title);

    const card_right_div_paras = document.createElement('div');
    card_right_div_paras.setAttribute('class', 'card-right-div-paras');
    card_right_div.appendChild(card_right_div_paras);

    const p_span_txt_arr = ['title', 'Writer', 'Pages', 'Read', 'Cred'];
    for (let i = 0; i <= 5; i++) {
      const p = document.createElement('p');

      let p_value_txt = '';

      if ((i == 4) || (i < 1)) {
        // Skip if its image link or book title
        continue;
      } else
        if (i == 5) { // Against Credit of Image
          let img_credit_txt = '';
          if (singleBook_arr[6] === 'Nil') {
            img_credit_txt = `Photo by <a href="https://unsplash.com/@mediamodifier?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mediamodifier</a> on <a href="https://unsplash.com/photos/white-box-on-white-table-kML003ksO_0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
          } else {
            img_credit_txt = singleBook_arr[i + 2];
          }


          p.innerHTML = `<span class="cred-span card-right-div-paras-title">Credit: </span>` + img_credit_txt;
          p.setAttribute('id', `${p_span_txt_arr[4]}-${book_id}`);
        } else {
          p.setAttribute('id', `${p_span_txt_arr[i]}-${book_id}`);
          const p_span = document.createElement('span');
          p_span.setAttribute('class', `${p_span_txt_arr[i].toLowerCase()}-span card-right-div-paras-title`);
          const p_span_title_txt = document.createTextNode(`${p_span_txt_arr[i]}: `);
          p_span.appendChild(p_span_title_txt);

          // adding span first in << p >>:
          p.insertBefore(p_span, p.firstChild);
          if (i == 3) { // Against Read
            const p_span2 = document.createElement('span');
            p_span2.setAttribute('id', `p_span2-read-value-${book_id}`);
            p_span2.setAttribute('class', 'p_span2_read_values');
            p.appendChild(p_span2);
            const read_status_txt = singleBook_arr[i + 2];
            p_value_txt = document.createTextNode(read_status_txt);
            p_span2.appendChild(p_value_txt);

            if (singleBook_arr[i + 2] == 'Yes') {
              p_span2.style.color = 'green';
            }
          } else if (i == 2) { // Against Pages
            const pages_read_txt = singleBook_arr[i + 1];
            const pages_total_txt = singleBook_arr[i + 2];
            p_value_txt = document.createTextNode(`${pages_read_txt} / ${pages_total_txt}`);
            p.appendChild(p_value_txt);
          }
          else { // Against Writer
            const writer_txt = singleBook_arr[i + 1];
            p_value_txt = document.createTextNode(writer_txt);
            p.appendChild(p_value_txt);

          }
        }
      card_right_div_paras.appendChild(p);
    }
    return card_right_div;
  }

  #createCardControls(card_right_div, book_id) {
    const card_cntrls = document.createElement('div');
    card_cntrls.setAttribute('class', 'card-controls');
    card_right_div.appendChild(card_cntrls);

    const card_cntrls_remove_icons = document.createElement('img');
    card_cntrls_remove_icons.setAttribute('class', 'card-controls-remove-icons');
    card_cntrls_remove_icons.setAttribute('id', `card-controls-remove-icon-${book_id}`);
    card_cntrls_remove_icons.setAttribute('src', './icons/close-thick.svg');
    card_cntrls_remove_icons.setAttribute('alt', 'close-thick');
    card_cntrls.appendChild(card_cntrls_remove_icons);

    const card_cntrls_read_checks = document.createElement('div');
    card_cntrls_read_checks.setAttribute('class', 'card-controls-read-checks');
    card_cntrls_read_checks.setAttribute('id', `card-controls-read-check-${book_id}`);
    card_cntrls.appendChild(card_cntrls_read_checks);

    const card_cntrls_read_chek_status = document.createElement('input');
    card_cntrls_read_chek_status.setAttribute('type', 'checkbox');
    card_cntrls_read_chek_status.setAttribute('id', `card${book_id}_status`);
    card_cntrls_read_chek_status.setAttribute('class', 'read-checkbox');
    card_cntrls_read_checks.appendChild(card_cntrls_read_chek_status);

    const card_cntrls_read_cheks_labl = document.createElement('label');
    card_cntrls_read_cheks_labl.setAttribute('for', `card${book_id}_status`);
    const card_cntrls_read_cheks_labl_txt = document.createTextNode('Read');
    card_cntrls_read_cheks_labl.appendChild(card_cntrls_read_cheks_labl_txt);
    card_cntrls_read_checks.appendChild(card_cntrls_read_cheks_labl);

    return card_cntrls;
  }

  showHideCardControls(book_id) {
    const cardEle = document.getElementById(`card-${book_id}`);
    const events = ['mouseenter', 'mouseleave'];
    events.forEach(mouse_event => cardEle.addEventListener(mouse_event, (e) => {
      const card_controls = cardEle.querySelector('.card-controls');
      card_controls.childNodes.forEach((child, idx) => {
        if (e.type === 'mouseenter') {
          document.getElementById(child.getAttribute('ID')).style.visibility = 'visible';
        } else
          if (e.type === 'mouseleave') {
            document.getElementById(child.getAttribute('ID')).style.visibility = 'hidden';
          }
      });
    }));
  }

  removeCardFromDisplay(book_id) {
    const cardEle = document.getElementById(`card-${book_id}`);
    cardEle.remove();
  }

  displayChangedStatus(book_id, read_status) {

    const p_span2 = document.getElementById(`p_span2-read-value-${book_id}`)
    if (read_status == 'Yes') {
      p_span2.innerHTML = read_status;
      p_span2.style.color = 'green';
    }
    else {
      p_span2.innerHTML = read_status;
      p_span2.style.color = 'grey';
    }
  }

  resetModal() {
    // reset form when it is submitted successfully:
    const form_inputs = document.querySelectorAll('#form input');
    const input_messages = document.querySelectorAll('.message')
    form_inputs.forEach((ele, idx) => {
      ele.value = '';
    });

    for (let message of input_messages) {
      message.value = '';
    }
  }

}
