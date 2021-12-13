var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  colorChange();
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  colorChange();
}

function colorChange() {
  if (currentNumber < 0) {
    document.getElementById("currentNumber").style.color = "#FF0000";
  } else {
    document.getElementById("currentNumber").style.color = "#000";
  }
}
