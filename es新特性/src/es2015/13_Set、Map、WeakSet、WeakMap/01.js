const arr = [1, 2, 2, 3, 4, 3, 5]
const set = new Set(arr)
// set对象可以使用 ... 展开 所有项
console.log([...set]) // [ 1, 2, 3, 4, 5 ]
