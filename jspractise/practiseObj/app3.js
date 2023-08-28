let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(salaries);
let sum = 0;
for (let key in salaries) {
    console.log(salaries[key])
    sum += salaries[key]
}
console.log(`the sum of the salaries is ${sum}`)