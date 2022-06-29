const some = (array, fun) => {
  // 类型约束
  if (Object.prototype.toString.call(array) !== '[object Array]')
    throw new TypeError(array + ' is not a array')
  if (typeof fun !== 'function') throw new TypeError(fun + ' is not a function')

  // 定义一个空数组，用于存放符合条件的数组项
  let flag = false
  for (let i of array) {
    if (fun(i)) {
      flag = true
      break
    }
  }
  return flag
}
let res = some([1, 2, 3], item => {
  return item > 2
})
console.log(res) // true
