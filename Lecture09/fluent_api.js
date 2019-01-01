class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  setAge(v) {this.age = v; return this}

  setName(v) { this.name = v; return this}
}


let p = new Person('John Doe', 33)

// p.setAge(40)
// p.setName('Harry Potter')

console.log(p.setAge(40).setName('Harry Potter'))
