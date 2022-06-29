const every = (array, fun) => {
  // 类型约束
  if (Object.prototype.toString.call(array) !== '[object Array]')
    throw new TypeError(array + ' is not a array')
  if (typeof fun !== 'function') throw new TypeError(fun + ' is not a function')

  let flag = true
  for (let i of array) {
    if (!fun(i)) {
      flag = false
      break
    }
  }
  return flag
}
let res = every([1, 2, 3], item => {
  return item > 0
})
console.log(res) // true
