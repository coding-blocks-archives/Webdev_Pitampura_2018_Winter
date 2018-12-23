console.log('something')
let mp = document.getElementById('mp')
console.log(mp)

// Creating objects

let obj = {
  alpha: 'asgadga',
  beta: 1234213,
  gamma: true,
  delta: [1, 'as', true],
  zeta: {
    one: 1213,
    two: 'asd'
  }
}

let arr = [
  123,
  'asdsad',
  true,
  [1,2,3],
  {
    a: 10,
    b: 20
  }
]

let keys = Object.keys(obj)
for (let i = 0; i< keys.length; i++) {
  console.log(obj[keys[i]])
}
