function substituiPares(array) {
  if (!array) return -1;
  if (!array.length) return -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("você já é zero");
    } else if (array[i] % 2 === 0) {
      array[i] = 0;
    }
  }

  return array;
}

let arr = [1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(substituiPares(arr));
