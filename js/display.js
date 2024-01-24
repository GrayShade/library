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

  addCard(input_values_arr, book_number) {

    const card_div = document.createElement("div");
    card_div.setAttribute('class', 'card');
    card_div.setAttribute('id', `card-${book_number}`);
  
    document.getElementById("main-body").appendChild(card_div);

    const card_left_div = this.createLeftDiv(card_div, input_values_arr);
    const card_right_div = this.createRightDiv(card_div, input_values_arr);
    const card_cntrls = this.createCardControls(card_right_div, input_values_arr, book_number)


  }

  createLeftDiv(card_div, input_values_arr) {
    const card_left_div = document.createElement('div');
    card_left_div.setAttribute('class', 'card-left-div');
    card_div.appendChild(card_left_div);
    // card_left_div.style.backgroundImage = `url(${input_values_arr[4]})`;
    // card_div_parentEle.appendChild(card_divEle);
    const img = document.createElement('img');
    img.setAttribute('src', `${input_values_arr[4]}`);

    img.setAttribute('src', input_values_arr[4]);
    img.setAttribute('alt', 'Avatar');
    card_left_div.appendChild(img);
    return card_left_div;
  }

  createRightDiv(card_div, input_values_arr) {
    const card_right_div = document.createElement('div');
    card_right_div.setAttribute('class', 'card-right-div');
    card_div.appendChild(card_right_div);

    const h4 = document.createElement('h4');
    const h4_innerText = document.createTextNode(input_values_arr[0]);
    h4.appendChild(h4_innerText);
    card_right_div.appendChild(h4);

    const card_right_div_paras = document.createElement('div');
    card_right_div_paras.setAttribute('class', 'card-right-div-paras');
    card_right_div.appendChild(card_right_div_paras);

    const p_span_txt_arr = ['title', 'By', 'Pages', 'Read', 'Cover'];
    for (let i = 0; i <= 5; i++) {
      const p = document.createElement('p');

      let p_value_txt = '';

      if (i == 4 || i == 0) {
        // skip if its image link
        continue;
      } else
        if (i == 5) {
          console.log('here');

          p.innerHTML = '<span>Cover: </span>' + input_values_arr[i];
        } else {
          const p_span = document.createElement('span');
          const p_span_title_txt = document.createTextNode(`${p_span_txt_arr[i]}: `);
          p_span.appendChild(p_span_title_txt);

          // adding span first in << p >>:
          p.insertBefore(p_span, p.firstChild);
          // 
          p_value_txt = document.createTextNode(input_values_arr[i]);
          p.appendChild(p_value_txt);
        }

      card_right_div_paras.appendChild(p);

    }
    return card_right_div;
  }

  createCardControls(card_right_div, input_values_arr, book_number) {
    const card_cntrls = document.createElement('div');
    card_cntrls.setAttribute('class', 'card-controls');
    card_right_div.appendChild(card_cntrls);

    const card_cntrls_remove_icons = document.createElement('img');
    card_cntrls_remove_icons.setAttribute('class', 'card-controls-remove-icons');
    card_cntrls_remove_icons.setAttribute('id', `card-controls-remove-icon-${book_number}`);
    card_cntrls_remove_icons.setAttribute('src', './icons/close-thick.svg');
    card_cntrls_remove_icons.setAttribute('alt', 'close-thick');
    card_cntrls.appendChild(card_cntrls_remove_icons);

    const card_cntrls_read_checks = document.createElement('div');
    card_cntrls_read_checks.setAttribute('class', 'card-controls-read-checks');
    card_cntrls_read_checks.setAttribute('id', `card-controls-read-check-${book_number}`);
    card_cntrls.appendChild(card_cntrls_read_checks);

    const card_cntrls_read_chek_status = document.createElement('input');
    card_cntrls_read_chek_status.setAttribute('type', 'checkbox');
    card_cntrls_read_chek_status.setAttribute('id', `card${book_number}_status`);
    card_cntrls_read_checks.appendChild(card_cntrls_read_chek_status);

    const card_cntrls_read_cheks_labl = document.createElement('label');
    card_cntrls_read_cheks_labl.setAttribute('for', 'status');
    const card_cntrls_read_cheks_labl_txt = document.createTextNode('Read');
    card_cntrls_read_cheks_labl.appendChild(card_cntrls_read_cheks_labl_txt);
    card_cntrls_read_checks.appendChild(card_cntrls_read_cheks_labl);

    return card_cntrls;
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
