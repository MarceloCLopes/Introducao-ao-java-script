function compareNumbers(num1, num2) {
  if (!num1 || !num2) return "Dois números maiores que 0 são obrigatórios";

  const isEquals = equalsPhrase(num1, num2);
  const isSum = twoPhrase(num1, num2);

  return `${isEquals} ${isSum}`;
}

function equalsPhrase(num1, num2) {
  let equals = "";

  if (num1 !== num2) {
    equals = "não";
  }

  return `Os números ${num1} e ${num2} ${equals} são iguais.`;
}

function twoPhrase(num1, num2) {
  const soma = num1 + num2;

  let result10 = "menor";
  let result20 = "menor";
  const compare10 = soma > 10;
  const compare20 = soma > 20;

  if (compare10) {
    result10 = "maior";
  }

  if (compare20) {
    result20 = "maior";
  }

  return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20.`;
}

console.log(compareNumbers(8, 13));
