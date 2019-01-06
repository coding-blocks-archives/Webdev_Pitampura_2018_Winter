// console.log(process.stdin)

// setInterval(() => {
//   console.log('...')
// }, 1000)

process.stdin.on('data', (data) => {
  console.log(data.toString())
  if (data.toString() == "exit\n") {
    console.log('exiting')
    // process.stdin.removesAllListeners()
    process.exit()
  }
})



while(true) {

}
