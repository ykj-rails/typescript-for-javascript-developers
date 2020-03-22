export {}

let name = 'foo'

name = 'buzz' // 値が書き変わる

let nickName = 'foo' as const
nickName = 'foo'

let profile = {
  name: 'foo',
  height: 175
} as const

// profile.name = 'foo'
// profile.height = 175
