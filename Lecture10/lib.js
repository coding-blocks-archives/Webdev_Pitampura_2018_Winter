module.exports = {}
function hello(name) {
  console.log(' Hello ' + name)
}

function goodBye(name) {
  console.log(' Goodbye ' + name)
}

let x = 10

module.exports.hello = hello
module.exports.a = x
