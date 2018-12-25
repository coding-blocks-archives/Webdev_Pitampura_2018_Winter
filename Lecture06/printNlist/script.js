window.onload = function () {

  let printBtn = document.getElementById('print')
  let sizeInp = document.getElementById('size')
  let numList = document.getElementById('numlist')

  printBtn.onclick = function () {
    let start = new Date().getTime()

    let N = parseInt(sizeInp.value)

    for (let i = 1; i <= N; i++) {
      let newItem = document.createElement('li')
      newItem.innerText = i
      numList.appendChild(newItem)
    }

    console.log(new Date().getTime() - start)
  }

}
