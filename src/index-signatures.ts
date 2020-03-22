export {}

interface Profile {
  // name: string
  // underTwenty: boolean
  [index: string]: string | number | boolean
}

// let profile: Profile = { name: 'foo', underTwenty: false }
let profile: Profile = {}

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'buzz'
profile.age = 30
profile.nationality = 'Japan'

console.log(profile)
