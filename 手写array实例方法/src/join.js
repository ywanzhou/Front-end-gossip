const join = (array, separator = ',') => {
  // 类型约束
  if (Object.prototype.toString.call(array) !== '[object Array]')
    throw new TypeError(array + ' is not a array')
  if (typeof separator !== 'string')
    throw new TypeError(separator + ' is not a string')

  let res = array[0].toString()
  for (let i = 0; i < array.length - 1; i++) {
    res += separator + array[i + 1].toString()
  }
  return res
}
// 测试
let res = join([1, 2, 3], '-')
console.log(res) // 1-2-3
