export {}

let name: any = 'foo'

let length = name.length

let length2 = (name as string).length

// この書き方は非推奨 JSXの記法と似ているため
let length3 = (<string>name).length

length = 'foo' // 文字列を代入してもlengthはany型
length2 = 'foo' // 文字列を代入してもlengthはnumber型
length3 = 'foo' // 文字列を代入してもlengthはnumber型
