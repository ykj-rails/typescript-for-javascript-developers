export {}

let fooCompatible: any
let barCompatible: string = 'TypeScript'

console.log(typeof fooCompatible) // undefined

fooCompatible = barCompatible // 代入できる ant型はstring型に互換性がある

console.log(typeof fooCompatible) // string

let fooInCompatible: string
let barInCompatible: number = 1

// fooInCompatible = barInCompatible // エラー string型にnumber型は互換性が無い

let fooString: string
let barString: string = 'string'

fooString = barString // 互換性○

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral'
fooString = fooStringLiteral

let fooNumber: number
let fooNumberLiteral: 1976 = 1976
fooNumber = fooNumberLiteral
console.log(fooNumber)

interface Animal {
  age: number
  name: string
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal
me = new Person(30, 'yukiji')
