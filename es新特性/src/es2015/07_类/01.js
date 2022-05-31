class Person {
  constructor(age) {
    // 属性
    this.myName = '一碗周'
    this.age = age
  }
  // 静态方法
  static print() {
    console.log()
  }
  // 访问器
  get myName() {
    console.log('getter')
    return '一碗周'
  }
  set myName(v) {
    console.log('setter' + v)
  }
  setName(v) {
    this.myName = v
  }
}
const person = new Person(18)
person.setName('ywanzhou') // 触发 setter 访问器
console.log(person.myName) // 触发 getter 访问器
