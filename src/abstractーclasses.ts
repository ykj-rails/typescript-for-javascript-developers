export {}

// 抽象メソッドは抽象クラスの中でしか使えない
abstract class Animal {
  abstract cry(): string
}

class Lion extends Animal {
  cry() {
    return 'roar'
  }
}
// 抽象メソッドが定義されていないのでエラーになる
// class Tiger extends Animal {}
