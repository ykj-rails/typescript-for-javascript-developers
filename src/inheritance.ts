export {}

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run'
  }
}
class Lion extends Animal {
  public speed: number
  constructor(name: string, speed: number) {
    super(name)
    this.speed = speed
  }
  run(): string {
    //super.run()で親のrunメソッドを呼び出す
    return `${super.run()} ${this.speed}km/h.`
  }
}

// let animal = new Animal()
// console.log(animal.run())
// let lion = new Lion()
// console.log(lion.run())

console.log(new Animal('Mickey').run()) // I can run
console.log(new Lion('Simba', 80).run()) // I can run 80km/h.