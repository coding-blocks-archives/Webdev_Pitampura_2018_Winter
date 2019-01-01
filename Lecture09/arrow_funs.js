
function sqr (n) {
  console.log(this)
  return n * n
}

let sqr2 = (n) => n * n

let sqr3 = (n) => {
  console.log(this)
  return n * n
}

let obj = {
  a: 10,
  sqr: sqr,
  sqr2: sqr2,
  sqr3: sqr3
}

console.log(obj.sqr(10))
console.log(obj.sqr2(10))
console.log(obj.sqr3(10))
