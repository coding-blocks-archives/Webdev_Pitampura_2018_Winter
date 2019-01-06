// console.log(process.stdin)

// setInterval(() => {
//   console.log('...')
// }, 1000)

process.stdin.on('data', (data) => {
  console.log(data.toString())
  if (data.toString().startsWith("exit")) {
    console.log('exiting')
    // process.stdin.removesAllListeners()
    process.exit()
  }
})



// while(true) {

// }


let str = "hello " + name
let str2 = `hello ${name}`
