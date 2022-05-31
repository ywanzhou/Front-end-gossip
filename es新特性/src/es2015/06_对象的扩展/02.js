// console.log(NaN === NaN) // false
// console.log(+0 === -0) // true
// console.log(Object.is(NaN, NaN)) // true
// console.log(Object.is(+0, -0)) // false

const person = Object.assign({}, { name: '一碗周' }, { age: 18 })
console.log(person) // { name: '一碗周', age: 18 }
