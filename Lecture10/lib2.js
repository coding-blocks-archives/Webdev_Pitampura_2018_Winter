const greeting = "hello"
console.log('lib2 is being read')
module.exports = {
  hello(name) {
    console.log(greeting + name)
  },
  a: 10
}
