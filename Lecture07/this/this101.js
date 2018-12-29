function myFun () {
  console.log(this)
}

myFun()

let obj = {
  a: 10,
  m: myFun
}

obj.m()
