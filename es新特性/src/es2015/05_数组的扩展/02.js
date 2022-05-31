// function foo() {
//   return Array.from(arguments) // 将 arguments 转换为数组
// }

// console.log(foo(1, 2, 3, 4, 5, 6)) // [ 1, 2, 3, 4, 5, 6 ]

// Array.of(1) // [1]
// Array.of(true, 1, '一碗周') // [true, 1, '一碗周']

// const arr = [1, 2, 3, 4]

// // 从索引 2 开始，到结束 将内容复制到索引 0 的位置
// arr.copyWithin(0, 2) // [ 3, 4, 3, 4 ]

// const arr = [1, 2, 3, 4]

// arr.find(item => item === 2) // 2（表示元素）
// arr.findIndex(item => item === 2) // 1 (表示索引)

// const arr = [1, 2, 3, 4]
// // 将给定值填充索引1-3
// arr.fill('一碗周', 1, 3) // [ 1, '一碗周', '一碗周', 4 ]

// const arr = [1, true, '一碗周']
// const keys = arr.keys()
// const values = arr.values()
// for (const i of keys) {
//   console.log(i) // 遍历结果 0 1 2
// }
// for (const i of values) {
//   console.log(i) // 遍历结果 1 true 一碗周
// }

// const arr = [1, true, '一碗周']

// const iterator = arr.entries()
// console.log(Array.from(iterator)) // [ [ 0, 1 ], [ 1, true ], [ 2, '一碗周' ] ]
