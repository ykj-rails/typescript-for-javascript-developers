export {}

// const echo = (arg: number): number => {
//   return arg
// }

// const echo = (arg: string): string => {
//   return arg
// }

// 抽象的な型宣言。慣習的にTと命名する
const echo = <T>(arg: T): T => {
  return arg
}

console.log(echo<number>(100))
console.log(echo<string>('Hello'))
console.log(echo<boolean>(true))

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value
  }
}

console.log(new Mirror<string>('Hello').echo())
