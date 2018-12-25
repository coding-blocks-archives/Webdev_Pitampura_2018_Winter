window.onload = function () {

  let printBtn = document.getElementById('print')
  let sizeInp = document.getElementById('size')
  let numList = document.getElementById('numlist')

  printBtn.onclick = function () {
    let start = new Date().getTime()

    numList.innerHTML = ""
    let N = parseInt(sizeInp.value)

    for (let i = 1; i <= N; i++) {
      numList.innerHTML += "<li> " + i + "</li>"
    }

    console.log(new Date().getTime() - start)
  }

}
