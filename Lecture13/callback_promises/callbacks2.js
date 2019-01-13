function wait1sec(done) {
  if (!done) {
    done = (() => {})
  }
  setTimeout(done, 1000)
}

function waitNSec(n, done) {
  wait1sec(() => {
    console.log('waiting')
    if (n > 1) {
      waitNSec(n-1, done)
    } else {
      done()
    }
  })

}
waitNSec(5, () => {
  console.log('wait over')
})
// wait1sec(() => {
//   console.log('hello')

//   wait1sec()
// })

