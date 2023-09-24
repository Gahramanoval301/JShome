const people = ['leman', 'test1', 'test2', 'test3'];

const [first, ...others] = people
console.log(first);
console.log(others);



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, , , , d, ...digerleri] = array
console.log(a, b, d, digerleri);



const leman = {
    name: 'Leman',
    age: 18,
    job: 'developer',
    hobby: 'coding and cooking',
    location: {
        country: 'Azerbaijan',
        city: 'Baku'
    },
    friend: {
        name: 'Aga'
    }

}
const { name, job, age } = leman;
console.log(name, age, job);


function girl({ name: girlName, job, age, hobby, location: { country, city }, friend: { name: friendName } }) {
    console.log(location, country, city);
    console.log(girlName, friendName)
}
girl(leman);

