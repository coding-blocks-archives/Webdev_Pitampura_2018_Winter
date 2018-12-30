for (var i = 1; i <= 5; i++) {

  (function (j) {
    setTimeout(function () {
      console.log(j)
    }, 1000 * j)
  })(i)

}


for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000 * i)
}
