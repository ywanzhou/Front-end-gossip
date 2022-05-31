// es2015之前
function foo(v) {
  v = v ? v : 100
  return v
}

// es2015
function bar(v = 100) {
  return v
}
