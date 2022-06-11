function* testGenerator() {
  // yield定义一个状态
  yield '一碗周'
  yield 'es新特性'
  return 'generator' // 终结Generator，后面即使有yield关键字也无效
}
const g = testGenerator() // 返回 Generator 对象，通过next()方法移动状态

g.next()
/* { value: '一碗周', done: false } */

g.next()
/* { value: 'es新特性', done: false } */

g.next()
/* { value: 'generator', done: true } */
