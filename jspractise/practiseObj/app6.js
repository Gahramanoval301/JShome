// const user = {
//     username: 'leman',
//     age: 18,
//     runMethod: () => {
//         console.log(`leman is not good to ${user.age} ${user.username} run`);
//     }
// };
function newObj() {
    this.name = 'John';
    this.age = 18
}

const person1 = new newObj();
console.log(person1.name) //John


// constructor function
// function Person() {
//     this.name = 'John'
// }

//  create object
// const person1 = new Person();

// /access properties
// console.log(person1.name); // John