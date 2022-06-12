;(async function () {
  function promise(v) {
    return new Promise((resolve, reject) => {
      resolve(v)
    })
  }
  const r1 = await promise(1)
  const r2 = await promise(r1)
  const res = await promise(r2)
  console.log(res)
})()
