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

    window.addEventListener('click', e => {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
  }

  addCard(input_values_arr) {

    const card_div = document.createElement("div");
    // const card_divEle_parent = 
    card_div.setAttribute('class', 'card');
    document.getElementById("main-body").appendChild(card_div);


    // card_div_parentEle.appendChild(card_divEle);
    const img = document.createElement('img');
    img.setAttribute('src', './images/5172496.jpg');
    img.setAttribute('alt', 'Avatar');
    card_div.appendChild(img);

    const card_right_div = document.createElement('div');
    card_right_div.setAttribute('class', 'card-right-div');
    card_div.appendChild(card_right_div);

    const h4 = document.createElement('h4');
    const h4_innerText = document.createTextNode('Getting started with adobe digital editions');
    h4.appendChild(h4_innerText);
    card_right_div.appendChild(h4);

    const card_right_div_paras = document.createElement('div');
    card_right_div_paras.setAttribute('class', 'card-right-div-paras');
    card_right_div.appendChild(card_right_div_paras);

    const p_span_text_arr = ['By', 'Pages', 'Read', 'Cover'];
    for (let i = 0; i <= 3; i++) {
      const p = document.createElement('p');

      const p_span = document.createElement('span');
      const p_span_text = document.createTextNode(`${p_span_text_arr[i]}: `);
      p_span.appendChild(p_span_text);

      // adding span first in << p >>:
      p.insertBefore(p_span, p.firstChild);





      if([i] == 3) { // if its Cover 
        
      }
      const p_text = document.createTextNode(input_values_arr[i]);
      p.appendChild(p_text);
      card_right_div_paras.appendChild(p);
    }

    const card_controls = document.createElement('div');
    card_controls.setAttribute('class', 'card-controls');
    card_right_div.appendChild(card_controls);

    const card_controls_remove_icons = document.createElement('img');
    card_controls_remove_icons.setAttribute('class', 'card-controls-remove-icons');
    card_controls_remove_icons.setAttribute('src', './icons/close-thick.svg');
    card_controls_remove_icons.setAttribute('alt', 'close-thick');
    card_controls.appendChild(card_controls_remove_icons);

    const card_controls_read_checks = document.createElement('div');
    card_controls_read_checks.setAttribute('class', 'card-controls-read-checks');
    card_controls.appendChild(card_controls_read_checks);

    const card_controls_read_checks_status = document.createElement('input');
    card_controls_read_checks_status.setAttribute('type', 'checkbox');
    card_controls_read_checks_status.setAttribute('id', 'status');
    card_controls_read_checks.appendChild(card_controls_read_checks_status);

    const card_controls_read_checks_label = document.createElement('label');
    card_controls_read_checks_label.setAttribute('for', 'status');
    const card_controls_read_checks_label_text = document.createTextNode('Read');
    card_controls_read_checks_label.appendChild(card_controls_read_checks_label_text);
    card_controls_read_checks.appendChild(card_controls_read_checks_label);
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
