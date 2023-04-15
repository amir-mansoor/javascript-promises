// let promise = new Promise(function(resolve, reject) {
  // // Do Something
// })


// const count = true
//
// let countValue = new Promise(function(resolve, reject) {
//   if(count) {
//     resolve('There is a count value')
//   } else {
//     reject("There is no count value")
//   }
// });
//
// console.log(countValue)


// let promise = new Promise(function(resolve, reject) {
//
//   setTimeout(() => resolve('done'), 5000)
// });
//
// promise.then((success) => console.log(success))

// let promise = new Promise(function(resolve, reject) {
//
//   setTimeout(() => reject(new Error('There is an error')), 1000)
// });
//
// promise.then((success) => console.log(success))
//
// const promise = doSomething()
//
// const promise2 = promise.then(successCallback, failureCallback)

// let promiseTask = new Promise(function(resolve, reject) {
//   resolve("Promise resolved")
// });
//
// // excutes when promise is resolved successfully
// promiseTask.then(function successValue1(result) {
//   console.log(result)
// }).then(function successValue2() {
//   console.log('you can call multiple functions this way')
// })


// let promiseTask = new Promise(function(resolve, reject) {
//   reject("Promise rejected")
// });
//
// // excutes when promise is resolved successfully
// promiseTask.then(function successValue1(result) {
//   console.log(result)
// }).catch(function errorValue(result) {
//   console.log(result)
// })


// --------- we can also use .finally like .catch .finally will execute if there is reject are resolve it dosen't matter.-----
