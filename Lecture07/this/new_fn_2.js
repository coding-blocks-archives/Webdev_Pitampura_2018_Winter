function Vehicle (wheels, color) {
  let _wheels = wheels
  this.color = color
  this.getWheels = function () {
    return _wheels
  }

  this.setWheels = function (wheels) {
    if (wheels % 2 == 0) {
      _wheels = wheels
    } else {
      console.error('Wheels must be even')
    }
  }
}

Vehicle.prototype.getAxles = function () {
    return this.getWheels() / 2
  }

Vehicle.prototype.isSimilar = Vehicle.isSimilar = function (v1, v2) {
  return (
    v1.getWheels() == v2.getWheels() &&
    v1.color == v2.color
  )
}



let redTruck = new Vehicle(6, 'red')
let greenTruck = new Vehicle(4, 'green')
let greenCar = new Vehicle(4, 'green')


console.log(Vehicle.isSimilar(greenCar, greenTruck))
console.log(Vehicle.isSimilar(redTruck, greenTruck))
