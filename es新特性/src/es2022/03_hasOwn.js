const person = {
  name: '一碗周',
  age: 18,
}
console.log(Object.hasOwn(person, 'name')) // true
console.log(Object.hasOwn(person, 'sex')) // false
