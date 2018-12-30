let a = 10;

function someFun() {
  let a = 20;
  if (true) {
    let a = 30;
    console.log(a)
  }
  console.log(a)
}

someFun()
console.log(a)
