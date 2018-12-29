function acceptor (nameGen) {

  console.log("Hello " + nameGen())
}

acceptor(function () {
  return "John"
})
