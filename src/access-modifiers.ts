export {}

class Person {
  // publicはアクセスの制約がない。省略できる。
  public name: string
  // クラス内部からのみ参照できる
  private age: number
  // 継承した子クラスからも参照できる
  protected nationality: string

  constructor(name: string, age: number, nationality: string) {
    this.name = name
    this.age = age
    this.nationality = nationality
  }

  profile(): string {
    // ageはクラス内部のみ参照できる
    return `name: ${this.name} age: ${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality)
  }
  profile(): string {
    return `name: ${this.name} age: ${this.age}, nationality: ${this.nationality} `
  }
}

let taro = new Person('Taro', 30, 'Japan')

console.log(taro.name)

// console.log(taro.age)
console.log(taro.profile())
