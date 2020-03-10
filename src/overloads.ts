export {}

//関数の前に書く
function double(value: number): number
function double(value: string): string

// オーバーロードでは関数の実体では型制約を行わない
// 全ての型を受け取れるようにany型で定義
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2
  } else {
    return value + value
  }
}

console.log(double(100))
console.log(double('GO '))
console.log(double(true)) // コンパイルエラーになる
