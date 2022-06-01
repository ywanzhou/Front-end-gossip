new Promise((resolve, reject) => {
  console.log('我是第一个Promise中的log')
  resolve()
})
  .then(() => {
    console.log('我是第一个then中的log')
  })
  .then(() => {
    console.log('我是第二个then中的log，但是我出现了异常')
    throw new Error('Error')
  })
  .then(
    () => {
      console.log(
        '我是第三个then中的第一个回调的log，但是我不会执行，因为我上面出现了异常'
      )
    },
    () => {
      console.log('我是第三个then中的第二个回调的log，我执行了')
    }
  )
  .then(() => {
    console.log('我是第四个then中的log，我可以正常执行')
  })

/* 执行结果如下
我是第一个Promise中的log
我是第一个then中的log
我是第二个then中的log，但是我出现了异常
我是第三个then中的第二个回调的log，我执行了
我是第四个then中的log，我可以正常执行
*/
