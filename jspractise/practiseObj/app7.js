//1 ci usul
const car = {

}
car.marka = prompt('Enter the marka : ')
car.model = prompt('Enter the model : ')
car.sahib = prompt('Enter the sahib : ')
car.year = prompt('Enter the year : ')
console.log(car);

Object.freeze(car)
//2ci usul

const Car = {
    marka: '',
    model: '',
    sahib: '',
    year: ''
}

for (key in Car) {
    Car[key] = prompt(`Enter the ${key}`)
}
console.log(Car)
Object.freeze(Car)