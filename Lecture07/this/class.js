class Shape {
  constructor(sides, color) {
    this.sides = sides
    this.color = color
  }
}

class Square extends Shape {
  constructor(color) {
    super(4, color)
  }
}

let redSquare = new Shape(4, 'red')
let greenSquare = new Square('green')
