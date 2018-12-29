function createCounter(init ,delta ) {
  function count() {
    init += delta
    return init
  }
  return count
}

let c1 = createCounter(10, 5)
let c2 = createCounter(20, 2)

console.log(c1()) // 15
console.log(c1()) // 20
console.log(c1()) // 25
console.log(c2()) // 22
console.log(c2()) // 24
console.log(c2()) // 26
