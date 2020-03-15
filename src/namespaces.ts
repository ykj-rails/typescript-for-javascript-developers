export {}

namespace Japanese {
  // namespaceのネストもexportが必要
  export namespace Tokyo {
    // classの前にexportが必要
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

// namespace名.class名でアクセスできる
const me = new Japanese.Tokyo.Person('foo')
const meKansai = new Japanese.Osaka.Person('buzz')
const michael = new English.Person('Michael', 'Joseph', 'Jackson')

console.log(me.name) // foo
console.log(meKansai.name) // buzz
console.log(michael.firstName) // Michael
