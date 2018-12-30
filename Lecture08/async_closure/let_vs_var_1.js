let a = 10;

function someFun () {
  console.log(a)
  let a = 20
  console.log(a)
}

console.log('a before fun call =',a)

someFun()

console.log('a after fun call = ', a)
