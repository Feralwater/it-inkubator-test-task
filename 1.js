document.querySelector("#submit").onclick = function (event) {
  event.preventDefault();
  let input = document.querySelector('input');
  window.alert(input.value === 'google' ? 'Yandex круче. Но это не точно' : input.value)
  input.value = '';
}
