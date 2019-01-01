// map, reduce and filter

let arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
let arr0 = [
  'January', 'February',
  'March', 'April', 'May',
  'June', 'July', 'August',
  'September', 'October', 'November',
  'December'
]
let arr2 = ['Delhi', 'Mumbai', 'Hyderabad', 'Bengaluru']

function toLowerArray(val, idx, a) {
  a[idx] = val.toLowerCase()
}
// arr.forEach(toLowerArray)
// arr2.forEach(toLowerArray)

let arr3 = arr.map(function (val) {
  return val.toLowerCase()
})

let arr4 = arr0.filter(function (val) {
  return val.length < 5
})


let x = arr0.reduce(function (acc, val) {
  return acc + val.length
}, 0)




