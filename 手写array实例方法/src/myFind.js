const myFind = (array, fun) => {
  // 类型约束
  if (Object.prototype.toString.call(array) !== '[object Array]')
    throw new TypeError(array + ' is not a array')
  if (typeof fun !== 'function') throw new TypeError(fun + ' is not a function')

  let res
  for (let i = 0; i < array.length; i++) {
    if (fun(array[i])) {
      res = array[i]
    }
  }
  return res
}
// 测试
let res = myFind([1, 2, 3], item => {
  return item > 2
})
console.log(res) // 3
