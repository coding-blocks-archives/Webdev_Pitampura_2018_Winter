
function hello (...names) {
  for (name of names) {
    console.log("Hello " + name)
  }
}

hello('James', 'Nancy', 'Bob')

function bye(name1, name2, name3) {
  console.log('Goodbye ' + name1)
  console.log('Goodbye ' + name2)
  console.log('Goodbye ' + name3)
}

let names = ['James', 'Nancy', 'Bob']

bye(...names)
