const forEach = (array, fun) => {
  // 类型约束
  if (Object.prototype.toString.call(array) !== '[object Array]')
    throw new TypeError(array + ' is not a array')
  if (typeof fun !== 'function') throw new TypeError(fun + ' is not a function')

  for (let i of array) {
    fun(i)
  }
}
let res = forEach([1, 2, 3], item => {
  console.log(item)
})
