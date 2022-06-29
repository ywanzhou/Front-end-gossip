const reduce = (array, fun, initialValue) => {
  // 类型约束
  if (Object.prototype.toString.call(array) !== '[object Array]')
    throw new TypeError(array + ' is not a array')
  if (typeof fun !== 'function') throw new TypeError(fun + ' is not a function')
  let accumulator = initialValue
  for (let i = 0; i < array.length; i++) {
    accumulator = fun(accumulator, array[i], i, array)
  }
  return accumulator
}
const arr = [1, 2, 3]
console.log(arr.reduce(v => v + 10, 10)) // 40
console.log(reduce(arr, v => v + 10, 10)) // 40
