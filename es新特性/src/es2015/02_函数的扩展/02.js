function foo(v) {
  return v``
}
// 箭头函数写法
const foo = v => {
  return v
}
// 简写形式 1
const foo = v => {
  // 只有一个参数可以省略括号
  return v
}
// 简写形式 2
const foo = v => v // 语句中只有return时可以省略return和花括号
