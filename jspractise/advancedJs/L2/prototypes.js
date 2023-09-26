let animal = {
    eats: true,
    name: 'Animal'
};
function Rabbit(name) {
    this.name = name;
}
//!1stb flowFrom:
// rabbit.__proto__ = animal;
// console.log(rabbit.eats);

//!2nd form
Rabbit.prototype = animal;
let rabbit = new Rabbit('White');
console.log(rabbit.eats);
console.log(rabbit.name) //TODO OZUNUN PROPORTYSI ESAS GOTURULUR!

//* by default: Rabbit.prototype ={ constructor:Rabbit };

//TODO NATIVE PROPTOTYPES;

String.prototype.removeFirstLetter = function () {
    let str = this.slice(1);
    return str;
}
console.log('salam'.removeFirstLetter())


