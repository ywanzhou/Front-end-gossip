const map = (array, fun) => {
  // 类型约束
  if (Object.prototype.toString.call(array) !== '[object Array]')
    throw new TypeError(array + ' is not a array')
  if (typeof fun !== 'function') throw new TypeError(fun + ' is not a function')

  // 定义一个空数组，用于存放修改后的数据
  let res = []
  for (let i = 0; i < array.length; i++) {
    res.push(fun(array[i]))
  }
  return res
}
// 测试
let res = map([1, 2, 3], item => {
  return item * 2
})
console.log(res) // [ 2, 4, 6 ]
