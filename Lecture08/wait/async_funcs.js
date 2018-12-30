
let x = setTimeout(function () {
  console.log('done x')
  clearTimeout(y)
}, 2000)

let y = setTimeout(function () {
  console.log('done y')
}, 2000)

console.log(x)
console.log(y)

let t = 0
let z = setInterval(function () {
  console.log(t++)
  if (t > 10) {
    clearInterval(z)
  }
}, 2000)

console.log(z)

function alpha () {
  console.log('aaaa')
}
