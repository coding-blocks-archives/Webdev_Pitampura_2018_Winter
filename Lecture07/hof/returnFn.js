function generator () {

  function someFun() {
    console.log('running some function')
  }

  return someFun
}

let x = generator()
x()
