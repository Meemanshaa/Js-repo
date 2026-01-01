//js is dynamically typed language
//data categorization - primitive and non primitive
//primitive data types
// 7 types- String, Number, Boolean, null, undefined, Symbol, BigInt
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)
//null => type of(object)

const bignumber=72815437542857n

//Reference types/Non-primitve
//types- Arrays, Objects, Functions
//arrays
const heros=["apple","banana","mango"];

//objects
let myobj={
    name:"Meemansha",
    age:20,
}
console.log(myobj)

const myfun=function(){
    console.log("heloo")
}
console.log(typeof(myfun))

//Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//***************Memory*************************/
//Stack(Primitve),Heap(Non-Primitive)
let myname="meemansha"
let anothername="sumit"
anothername="kosta"
console.log(myname)
console.log(anothername)

let user1={
    email:"user@google.com",
    upi:"y8634"
}
let user2=user1
user2.email="meemansha@gmail.com"
console.log(user1.email)
console.log(user2.email )