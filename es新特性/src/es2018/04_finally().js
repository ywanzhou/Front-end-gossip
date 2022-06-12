fetch(url)
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log('结束')
  })
