function Shape (sides, color) {
  this.sides = sides
  this.color = color
}
function Square (color) {
  let shape = new Shape(4, color)
  this.color = shape.color
  this.sides = shape.size
}

let redSquare = new Shape(4, 'red')

let blueSquare = {
  sides: 4,
  color: 'blue'
}

let greenSquare = new Square('green')
