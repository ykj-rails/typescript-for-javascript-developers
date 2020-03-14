export {}

class Me {
  static isProgrammer: boolean = true
  static firstName: string = 'Satoru'
  static lastName: string = 'Iguchi'

  static work() {
    // thisを付ける
    return `Hello ${this.firstName}`
  }
}

// let me = new Me()
// console.log(me.isProgrammer)

console.log(Me.isProgrammer)
// true
console.log(Me.work())
// Hello
