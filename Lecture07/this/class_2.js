class Vehicle {
  constructor(wheels, color) {
    this.wheels = wheels
    this.color = color
  }

  get axles() {
    return this.wheels / 2
  }

  set axles(val) {
    this.wheels = val * 2
  }
}

let redTruck = new Vehicle(6, 'red')
let greenTruck = new Vehicle(4, 'green')
let greenCar = new Vehicle(4, 'green')

