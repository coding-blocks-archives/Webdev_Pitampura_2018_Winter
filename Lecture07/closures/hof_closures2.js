function createCounter(init, delta) {
  let count = {
    value: init,
    incr: function () { this.value += delta },
    decr: function () { this.value -= delta }
  }
  return count
}

let c1 = createCounter(10, 5)
let c2 = createCounter(20, 2)

c1.incr()
c1.incr()
console.log(c1.value)

c2.decr()
c2.decr()
console.log(c2.value)
