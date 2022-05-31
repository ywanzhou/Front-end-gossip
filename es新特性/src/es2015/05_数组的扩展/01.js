const arr = [1, 2, 3, 4, 5, 6]
const newArr = [...arr] // 复制数组

console.log(Math.max.call(null, ...arr)) // 将数组中的每一项作为参数使用
