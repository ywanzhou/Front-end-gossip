// const myName = '一碗周'
// const age = 18
// const person = { myName, age }
// console.log(person) // { myName: '一碗周', age: 18 }
const myName = '一碗周'
const age = 18
const person = {
  myName,
  ['a' + 'g' + 'e']: age,
}
console.log(person) // { myName: '一碗周', age: 18 }
