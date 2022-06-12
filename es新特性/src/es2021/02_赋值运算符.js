const [f1, f2, f3] = [true, false]
f1 &&= '一碗周' // 等同于 str = str && '一碗周'
f2 ||= '一碗周' // 等同于 str = str || '一碗周'
f3 ??= '一碗周' // 等同于 str = str ?? '一碗周'
