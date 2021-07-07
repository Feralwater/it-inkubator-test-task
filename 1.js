document.querySelector("#submit").onclick = function (event) {
  event.preventDefault();
  let input = document.querySelector('input');
  let el = document.getElementById('name');
  el.innerText = array[0].name;
  window.alert(input.value === 'google' ? 'Yandex круче. Но это не точно' : input.value)
  input.value = '';
}

const array = [
  {
    name: 'Ann',
    age: 23
  },
  {
    name: 'Oleg',
    age: 43
  },
  {
    name: 'Petr',
    age: 54
  },
  {
    name: 'Ivan',
    age: 12
  },
  {
    name: 'Inga',
    age: 54
  },
]
