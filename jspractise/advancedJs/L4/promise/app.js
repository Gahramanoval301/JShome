const promise = new Promise((resolve, reject) => {
    resolve({ name: 'leman', age: 18 })
    reject('The response is rejected')
})
console.log(promise) //asyncrom kod yaradir 
promise
    .then((obj) => { //resolve bura dusur 
        console.log(obj);
    })
    .catch((msg) => { //reject bura dusur
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