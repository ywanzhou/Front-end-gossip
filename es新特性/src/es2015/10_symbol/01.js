/**
 * 语法
 * Symbol([description])
 * * description -> 是一个可选的描述信息
 */
// 创建一个 Symbol 类型的值
const mySymbol = Symbol()
console.log(mySymbol) // Symbol()

const myName = Symbol('一碗周')
console.log(typeof myName) // symbol
