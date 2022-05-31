// 数组的解构赋值
let [name, age, hobby = 'coding' /* 结构赋值的默认值 */] = ['一碗周', 18]
// 交换两个变量的值
let a = 1
let b = 2
;[a, b] = [b, a]
console.log(a, b) // 2 1

// 对象的结构赋值
let { name: ObjName /* 解构赋值重命名 */, sex } = { name: '一碗周', sex: 1 }

// 函数参数的解构赋值
function bar({ name, age }) {
  return name + age
}
bar({ name: '一碗周', age: 18 }) // 一碗周18
