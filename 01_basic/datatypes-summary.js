// Jaavascript data type is basically two type 
/*
Primitive (7 Types)  
    1) string 
    2) Number
    3) Boolean
    4) null   // empty
    5) undefined  // variable declared memory space declared not but not assigned 
    6) symboal ==> kisi bhi value ko unique banane ke liye use hotaa hai 
    7) BigInt

Non Primitive (Reference Type)
    1) Array
    2) Object
    3) Function

    Javascript is dyanmically type language or statically type language 

    const score = false;
    cons temprature =  null ==> don't have any temparture 
    const userEmail; udefined 
*/

const id = Symbol('123'); // Symbol 123 symbol always provide unique value even if you initialize same value
const anotherID = Symbol('123')
// console.log(id === anotherID); // false

/* 
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function  ==> object function
       Object  =>  object
*/

let array1 = ['hello']
console.log(typeof array1); // Object
let myfunction = function abc() {
    console.log(typeof myfunction);
}
myfunction() // function


