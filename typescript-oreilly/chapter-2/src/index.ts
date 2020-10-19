let a = 1 + 2
let b = a + 3
let c = {
  apple: a,
  banana: b,
}

let boolean = true

let me: { name: string; age: number; kikon: boolean; tel: number } = {
  name: 'ore',
  age: 32,
  kikon: false,
  tel: 090,
}

let me2: Person = {
  name: 'ore',
  age: 32,
  kikon: false,
  tel: 090,
}

function xxx(b: number) {
  return b / 2
}

// a('z')

type Person = {
  name: string
  age: number
  kikon: boolean
  tel: number
}

let array: (number | string)[] = [1, 2, 3]

array.push('3')

let d = [true, true, false]
const g = [3]
let h = null

type Add = (a: number, b: number) => number

const add: Add = (a, b) => {
  return a + b
}

function increment(num: number) {
  return num + 1
}
