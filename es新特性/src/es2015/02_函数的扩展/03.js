const foo = (...args) => {
  // console.log(arguments) // ReferenceError: arguments is not defined
  console.log(args) // args 是一个数组
}
foo(1, 2, 3, 4) // [ 1, 2, 3, 4 ]
