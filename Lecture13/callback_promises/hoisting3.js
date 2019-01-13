

fun1(fun2)
fun2(fun1)

var fun1 = function(f) {
  console.log('fun1')
  if (f) f()
}



var fun2 = function(f) {
  console.log('fun2')
  if (f) f()
}

