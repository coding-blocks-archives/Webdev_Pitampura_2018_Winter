let a = false

setTimeout(function () {
  a = true
}, 2000)

while (!a) {

}

console.log('Done')
