export {}

// class VisaCard {
//   readonly owner: string

//   constructor(owner: string) {
//     this.owner = owner
//   }
// }

// let myVisaCard = new VisaCard('foo')

// // myVisaCard = 'buzz'

// console.log(myVisaCard.owner)

class VisaCard {
  constructor(public readonly owner: string) {
    this.owner = owner
  }
}

let myVisaCard = new VisaCard('foo')

// myVisaCard.owner = 'buzz'

console.log(myVisaCard.owner)
