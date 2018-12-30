window.onload = function () {
  let btnWait = document.getElementById('btnWait')
  let btnCounter = document.getElementById('btnCounter')
  let divResult = document.getElementById('divResult')
  let count = 0

  btnWait.onclick = function () {
    divResult.innerText = "WAITING"
    let startTime = new Date().getTime()
    // while (new Date().getTime() < startTime + 10000) {
    //   // do nothing
    // }
    // divResult.innerText = "DONE"

    setTimeout(function () {
      console.log(new Date().getTime() - startTime)
      divResult.innerText = "DONE"
    }, 5000)
    console.log("wait started")

  }

  btnCounter.onclick = function () {
    let startTime = new Date().getTime()
    while (new Date().getTime() < startTime + 10000) {
      // do nothing
    }
  }
}
