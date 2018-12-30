window.onload = function () {
  let btnWait = document.getElementById('btnWait')
  let btnCounter = document.getElementById('btnCounter')
  let divResult = document.getElementById('divResult')
  let count = 0

  btnWait.onclick = function () {
    divResult.innerText = "WAITING"
    let startTime = new Date().getTime()
    while (new Date().getTime() < startTime + 5000) {
      // do nothing
    }
    divResult.innerText = "DONE"

  }

  btnCounter.onclick = function () {
    console.log(count++)
  }
}
