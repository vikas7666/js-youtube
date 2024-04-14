// const promiseOne  = new Promise(function(resolve, reject){
//     // Do async task
//     // DB Call

//     setTimeout(function(){
//         console.log('Async Task completed')
//     },1000)
//     resolve()
// })


// promiseOne.then(function(){
//     console.log('Promise consumed')
// })


// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('function started')
//         resolve()
//     }, 1000);
// }).then(function(resolve,reject){
//     console.log('Async called ')
// })


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'viaks',surname:'shukla'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user) // { username: 'viaks', surname: 'shukla' }
})