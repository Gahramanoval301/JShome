//! SADE CLASS 
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const leman = new People('leman', 18);
console.log(leman.name, leman.age);
//constructor adi cevrildi class adina
///mutleq constructor olmalidi! constructor keyword'u yaziriq!
//class herseydi, class heck=nedi(constructor'suz)


//TODO property getters/setters

class User {
    constructor(name) {
        this.name = name;
    }
    set getName(value) {
        this.name = value;
    }
    get getName() {
        return this.name;
    }
}
let user = new User('Leman')
user.name = 'Aydan'
console.log(user.getName);//user.name +
// throw new Error('hello'); //* INteresting throw error and console.error();

//!Static Methods

class Animal {
    static animal = 'animal'; //* Sadece class'da yazila biler!!!!!!!!!
    constructor(name) {
        this.name = name;
    }
} //TODO stactic -> class'a aiddir 
console.log(Animal.animal)//* 2 cur property var: instance aid and class'a aid
const rabbit = new Animal('rabbit');
console.log(rabbit.animal); //!!!!!!!!!!!!! UNDEFINED,,
//!!! BECAUSE animal property belongs to classsssssss not to instanceeeeee

class Calculator {
    static sum(a, b) { return a + b; }
};
console.log(Calculator.sum(2, 4)) //!-> this methods only belongs to class
// const sum1 = new Calculator(2, 4)//!what means this code????ABSURDDDDD
// console.log(sum1())

//! --------Class Extends 
class A {
    static salamA = 'salam A'
    run() {
        console.log('Run, run!')
    }
}
class B extends A {
    static salamB = 'salam B'
    hide() {
        console.log('Bye, Bye!');
    }
}
const varB = new B();
// console.log(B.run())
console.log(B.salamA)//* Correct because extending happens