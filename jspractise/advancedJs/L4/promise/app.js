const promise = new Promise((resolve, reject) => {
    resolve({ name: 'leman', age: 18 })
    reject('The response is rejected')
})
promise
    .then((obj) => {
        console.log(obj);
    })
    .catch((msg) => {
        console.log(msg);
    })
    .finally(() => {
        console.log('I love u');
    })

function sayHi() {
    console.log('Hello World!');
}
sayHi()

//TODO Promises
//? pending
//? fulfilled
//? rejected
//* always Promises called with .then no console.log!