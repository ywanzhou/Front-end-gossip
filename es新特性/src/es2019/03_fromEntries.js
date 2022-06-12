const person = {
  name: '一碗周',
  age: '18',
}
const e = Object.entries(person)

const p = Object.fromEntries(e)
console.log(p) // { name: '一碗周', age: '18' }
