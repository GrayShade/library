export class Validation {
  constructor() {
    this.setEventListeners();
  }
  validateBeforeSubmit(e, ele_name, ele_message) {
    // const ele_name = 
    const ele_val = document.getElementById(ele_name).value;
    const message = document.getElementById(ele_message);

    const ele = e.target;

    if (e.key === 'Tab') {
      return;
    }

    const toolTipSpan = ele.previousElementSibling.lastElementChild;
    if (ele.checkValidity() === false) {
      toolTipSpan.style.display = 'block';
    }
    else {
      toolTipSpan.style.display = 'none';
    }


    if (!ele.classList.contains('required') && ele_val == '') {
      ele.style.borderColor = 'blue';
        message.innerHTML = '';
    } else
      if (ele_val != '' && ele.checkValidity() === true) {
        ele.style.borderColor = 'blue';
        message.innerHTML = ''
      } else
        if (ele_val != '' && ele.checkValidity() === false) {
          ele.style.borderColor = 'red';
          message.innerHTML = ''
        }
        else {
          
          ele.style.borderColor = 'red';
          message.style.color = 'red';
          message.innerHTML = "*Field Required!"
        }


  }
  setEventListeners() {
    // if tooltip is shown & user moves to next element, tooltip should hide:
    document.addEventListener('focusout', (e) => {
      // <<focusout is firing on every element of document, so returning if
      // focused out element is not input:
      if ((!e.target.classList.contains('form-inputs')) || (e.target.classList.contains('read-checkbox'))) {
        return;
      }

      const inputEle = e.target;
      // no need to run this on button:
      if (inputEle.type === 'submit') {
        return;
      }
      const toolTipSpan = inputEle.previousElementSibling.lastElementChild;

      toolTipSpan.style.display = 'none';

      if (inputEle.style.borderColor == 'blue') {
        inputEle.style.borderColor = '#E5E7EB';
      }
    });

    // if user moves to next element which has error but no tooltip because of
    // listener on focusout event, tooltip should be shown again:
    document.addEventListener('focusin', (e) => {
      // <<focusin is firing on every element of document, so returning if
      // focused in element is not input:
      if ((!e.target.classList.contains('form-inputs')) || (e.target.classList.contains('read-checkbox'))) {
        return;
      }

      const inputEle = e.target;
      // no need to run this on button:
      if (inputEle.type === 'submit') {
        return;
      }
      const toolTipSpan = inputEle.previousElementSibling.lastElementChild;

      if (inputEle.checkValidity() === false && toolTipSpan.style.display == 'none') {
        toolTipSpan.style.display = 'block';
      }
      else {
        toolTipSpan.style.display = 'none';
      }
    });
  }

  validateAfterSubmit(ele, msg_span) {
    const ele_val = ele.value;
    if (ele_val != '' && ele.checkValidity() === true) {
      msg_span.innerHTML = '';
      return true;
    } else {
      ele.style.borderColor = 'red';
      msg_span.style.color = 'red';
      msg_span.innerHTML = "*Field Required!"
      return false;
    }
  }
}