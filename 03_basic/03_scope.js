{} // its called scope

/* function one() {
    const username  = 'vikas';

    function two() {
       // const nameTwo  = 'hello'
        console.log('username is',username);
    }
    two()
    console.log(nameTwo)
}
one() */ // username is vikas
// here we get error bcz one cannot access inside function two


// function expression 
// In js variable is very power it can hold anything such as json etc

// const abc  = function name() {
//     console.log('hello')
// }

// abc() // hello

//console.log('function calling before declaration',vikas('abc'));
// function vikas(num) {
//     console.log('num',num)
//     return  num ;
// }
// num abc
// function calling before declaration abc

console.log(addTwo(5,6)); //11
console.log(x(5,6));
const x = function addTwo(num1,num2) {
    return num1 + num2;
}
// getting error  ReferenceError: addTwo is not defined
