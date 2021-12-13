var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
let btnAdicionar = document.getElementById("adicionar");

document.getElementById("adicionar").addEventListener("click", () => {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  colorChange();
});

document.getElementById("subtrair").addEventListener("click", () => {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  colorChange();
});

//Mudar a cor do texto para 'red' quando for negativo
function colorChange() {
  if (currentNumber < 0) {
    document.getElementById("currentNumber").style.color = "#FF0000";
  } else {
    document.getElementById("currentNumber").style.color = "#000";
  }
}
