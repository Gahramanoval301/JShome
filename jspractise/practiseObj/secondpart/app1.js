// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties
// with names a and b respectively.
//     sum() returns the sum of saved values.
//     mul() multiplies saved values and returns the result.


let calculator = {
    num1: undefined,
    num2: undefined,
    show: (num1, num2)=>{console.log(`${num1 + num2}`);},
    read() {
        this.num1 = +prompt('enter the first number: ');
        this.num2 = +prompt('enter the second number: ');
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2
    }
};
//TODO Rules for this code:
// 1. your prop of object if is funtion, then write it as a ARROW FUNCTION
// 2. if you use the props of object inside your another prop of object, then use this key
 


calculator.read();
calculator.show(12, 23);
alert(calculator.sum());
alert(calculator.mul());