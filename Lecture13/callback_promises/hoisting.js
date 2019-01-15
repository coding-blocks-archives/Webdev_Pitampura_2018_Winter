
fun1(fun2)
fun2(fun1)

function fun1(f) {
  console.log('fun1')
  if (f) f()
}


function fun2(f) {
  console.log('fun2')
  if (f) f()
}
