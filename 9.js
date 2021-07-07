const array = [1, 4, 3, 6, -99, 6, 5, 3, 47, 9, 0, 8]

const findMax = (arr) => arr.reduce((x, y) => x > y ? x : y)


console.log(findMax(array))
