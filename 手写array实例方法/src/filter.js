const filter = (array, fun) => {
  // 类型约束
  if (Object.prototype.toString.call(array) !== '[object Array]')
    throw new TypeError(array + ' is not a array')
  if (typeof fun !== 'function') throw new TypeError(fun + ' is not a function')

  // 定义一个空数组，用于存放符合条件的数组项
  let res = []
  for (let i = 0; i < array.length; i++) {
    // 将数组中的每一项都调用传入的函数，如果返回结果为true，则将结果push进数组，最后返回
    fun(array[i]) && res.push(array[i])
  }
  return res
}
// 测试
let res = filter([1, 2, 3], item => {
  return item > 2
})
console.log(res) // [ 3 ]
