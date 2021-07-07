const array = [1, 4, 3, 6, 99, 6, 5, 3, 47, 9, 0, 8]

const maxMin = (arr) => {
  let maximum = arr[0];
  let minimum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    maximum < arr[i] ? maximum = arr[i] : maximum
    minimum < arr[i] ? minimum : minimum = arr[i]
  }
  return {maximum, minimum};
}

console.log(maxMin(array))
