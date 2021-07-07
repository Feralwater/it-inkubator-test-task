document.querySelector("#submit").onclick = function () {
  let value1 = window.prompt('Введите число 1');
  let value2 = window.prompt('Введите число 2');
  const superSum = (value1, value2) => Number(value1) + Number(value2);
  window.alert(superSum(value1, value2));
}


