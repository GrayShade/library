export class Display {
  constructor() {

  }
  displayBooks(myLibrary) {
    console.log(myLibrary);
  }

  setModal() {
    const modal = document.getElementById('myModal');
    // image id attribute not showing up in DOM for some reason. So:
    const btn = document.querySelector('img[alt=plus]');
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

  addCard(singleBook_arr, book_num) {

    const card_div = document.createElement("div");
    card_div.setAttribute('class', 'card');
    card_div.setAttribute('id', `card-${book_num}`);
  
    document.getElementById("main-body").appendChild(card_div);

    const card_left_div = this.createLeftDiv(card_div, singleBook_arr);
    const card_right_div = this.createRightDiv(card_div, singleBook_arr, book_num);
    const card_cntrls = this.createCardControls(card_right_div, singleBook_arr, book_num)


  }

  createLeftDiv(card_div, singleBook_arr) {
    const card_left_div = document.createElement('div');
    card_left_div.setAttribute('class', 'card-left-div');
    card_div.appendChild(card_left_div);
    // card_left_div.style.backgroundImage = `url(${singleBook_arr[4]})`;
    // card_div_parentEle.appendChild(card_divEle);
    const img = document.createElement('img');
    img.setAttribute('src', `${singleBook_arr[5]}`);

    img.setAttribute('src', singleBook_arr[5]);
    img.setAttribute('alt', 'Avatar');
    card_left_div.appendChild(img);
    return card_left_div;
  }

  createRightDiv(card_div, singleBook_arr, book_num) {
    const card_right_div = document.createElement('div');
    card_right_div.setAttribute('class', 'card-right-div');
    card_div.appendChild(card_right_div);

    const card_right_div_title = document.createElement('h4');
    const title_innerText = document.createTextNode(singleBook_arr[1]);
    card_right_div_title.appendChild(title_innerText);
    card_right_div.appendChild(card_right_div_title);

    const card_right_div_paras = document.createElement('div');
    card_right_div_paras.setAttribute('class', 'card-right-div-paras');
    card_right_div.appendChild(card_right_div_paras);

    const p_span_txt_arr = ['title', 'By', 'Page', 'Read', 'Cred'];
    for (let i = 0; i <= 5; i++) {
      const p = document.createElement('p');
      

      let p_value_txt = '';

      if ((i == 4) || (i < 1)) {
        // skip if its image link
        continue;
      } else
        if (i == 5) {

          // p.innerHTML = `<span id="cred-span${book_num}">Cred: </span>` + singleBook_arr[i];
          p.innerHTML = `<span class="cred-span">Cred: </span>` + singleBook_arr[i + 1];
          p.setAttribute('id', `${p_span_txt_arr[4]}-${book_num}`);
        } else {
          p.setAttribute('id', `${p_span_txt_arr[i]}-${book_num}`);
          const p_span = document.createElement('span');
          // p_span.setAttribute('id', `${p_span_txt_arr[i].toLowerCase()}-span${book_num}`);
          p_span.setAttribute('class', `${p_span_txt_arr[i].toLowerCase()}-span`);
          const p_span_title_txt = document.createTextNode(`${p_span_txt_arr[i]}: `);
          p_span.appendChild(p_span_title_txt);

          // adding span first in << p >>:
          p.insertBefore(p_span, p.firstChild);
          // 
          p_value_txt = document.createTextNode(singleBook_arr[i + 1]);
          p.appendChild(p_value_txt);
        }

      card_right_div_paras.appendChild(p);

    }
    return card_right_div;
  }

  createCardControls(card_right_div, singleBook_arr, book_num) {
    const card_cntrls = document.createElement('div');
    card_cntrls.setAttribute('class', 'card-controls');
    card_right_div.appendChild(card_cntrls);

    const card_cntrls_remove_icons = document.createElement('img');
    card_cntrls_remove_icons.setAttribute('class', 'card-controls-remove-icons');
    card_cntrls_remove_icons.setAttribute('id', `card-controls-remove-icon-${book_num}`);
    card_cntrls_remove_icons.setAttribute('src', './icons/close-thick.svg');
    card_cntrls_remove_icons.setAttribute('alt', 'close-thick');
    card_cntrls.appendChild(card_cntrls_remove_icons);

    const card_cntrls_read_checks = document.createElement('div');
    card_cntrls_read_checks.setAttribute('class', 'card-controls-read-checks');
    card_cntrls_read_checks.setAttribute('id', `card-controls-read-check-${book_num}`);
    card_cntrls.appendChild(card_cntrls_read_checks);

    const card_cntrls_read_chek_status = document.createElement('input');
    card_cntrls_read_chek_status.setAttribute('type', 'checkbox');
    card_cntrls_read_chek_status.setAttribute('id', `card${book_num}_status`);
    card_cntrls_read_checks.appendChild(card_cntrls_read_chek_status);

    const card_cntrls_read_cheks_labl = document.createElement('label');
    card_cntrls_read_cheks_labl.setAttribute('for', `card${book_num}_status`);
    const card_cntrls_read_cheks_labl_txt = document.createTextNode('Read');
    card_cntrls_read_cheks_labl.appendChild(card_cntrls_read_cheks_labl_txt);
    card_cntrls_read_checks.appendChild(card_cntrls_read_cheks_labl);

    return card_cntrls;
  }

  showHideCardControls(cardEle) {
    let events = ['mouseenter', 'mouseleave'];
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

  resetModal() {
    // reset form when it is submitted successfully:
    let form_inputs = document.querySelectorAll('#form input');
    form_inputs.forEach((ele, idx) => {
      ele.value = '';
    });
  }

  

  // showModal() {
  //   console.log('hi');
  // }
}

// export default Display
