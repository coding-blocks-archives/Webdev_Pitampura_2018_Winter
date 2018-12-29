class Vehicle {
  constructor(wheels, color) {
    this.wheels = wheels
    this.color = color

  }

  getAxles() {
    return this.wheels / 2
  }
}

let redTruck = new Vehicle(6, 'red')
let greenTruck = new Vehicle(4, 'green')
let greenCar = new Vehicle(4, 'green')

