let count = 0

function counter(x) {
  return x + (++count)
}

function counter2(x) {
  return x + (Math.random())
}

console.log(counter(10))
console.log(counter(10))

console.log(counter2(10))
console.log(counter2(10))
