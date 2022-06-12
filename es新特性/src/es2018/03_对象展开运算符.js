const n = { name: '一碗周' }
const a = { age: 18 }
const person = { ...n, ...a }
// 合并对象
console.log(person) // { name: '一碗周', age: 18 }
