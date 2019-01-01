window.onload = function () {
  let inpValues = document.getElementById('inpValues')
  let btnCalc = document.getElementById('btnCalc')
  let rmsNeg = document.getElementById('rmsNeg')
  let rmsPos = document.getElementById('rmsPos')

  btnCalc.onclick = function () {

    let posMeanSquare = inpValues.value // 1,2,-3
      .split(',') // ["1", "2", "-3"]
      .map((v) => parseInt(v)) // [1,2,-3]
      .filter((v) => (v > 0)) // [1,2]
      .map((v) => (v * v)) // [1,4]
      .reduce((c, v, i, a) => (c + v / a.length), 0)

    let negMeanSquare = inpValues.value
      .split(',')
      .map((v) => parseInt(v))
      .filter((v) => (v < 0))
      .map((v) => (v * v))
      .reduce((c, v, i, a) => (c + (v / a.length)), 0)

    rmsNeg.innerText = Math.sqrt(negMeanSquare)
    rmsPos.innerText = Math.sqrt(posMeanSquare)

  }
}
