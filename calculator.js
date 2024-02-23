let display = document.getElementById('display');

function appendToDisplay(value) {
  if (display.innerHTML === '0' && value !== '.') {
    display.innerHTML = value;
  } else {
    display.innerHTML += value;
  }
}

function clearDisplay() {
  display.innerHTML = '0';
}

function calculateResult() {
  let result = eval(display.innerHTML);
  display.innerHTML = result;
}
