function fun1(done) {
  console.log('fun1')
  done((done2) => {
    console.log('cb2')
    done2()
  })
}

function cb1 (done) {
  console.log('cb1')
  done(() => {
    console.log('cb3')
  })
}

fun1(cb1)

