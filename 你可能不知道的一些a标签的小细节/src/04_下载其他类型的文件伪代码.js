export function downloadFile(e) {
  const url = e.target.getAttribute('src')
  // 文件名
  const name = url.substring(url.lastIndexOf('/') + 1)

  axios.get(url, { responseType: 'blob' }).then(res => {
    const blob = res.data
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')

    a.href = url
    a.download = name
    a.click()
    a.remove()

    window.URL.revokeObjectURL(url)
  })
}
