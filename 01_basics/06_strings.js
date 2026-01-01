const name='meemansha'
const repoc=61

console.log(name+repoc+" Value")
console.log(`Hello my name is ${name} and my repo count is ${repoc}`)

const gameName=new String('meemansha-ko')
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(7))
console.log(gameName.indexOf('e'))


const newstring=gameName.substring(0,5)
console.log(newstring)

const anotherstring=gameName.slice(-8,4)
console.log(anotherstring)

//for white spaces
const newstr="  meemanshaaa      "
console.log(newstr.trim())

//url
const url="https:867//bkue9283 342"
console.log(url.replace('867',82))
console.log(url.includes('http'))
console.log(gameName.split(' '))