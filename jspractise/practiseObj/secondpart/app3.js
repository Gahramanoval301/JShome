function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = () => {
        let newNum = +prompt('Enter the new number: ');
        this.value += newNum
    }
}
const accumulator1 = new Accumulator(1);//default value!
console.log(accumulator1.value);
accumulator1.read();
console.log(accumulator1.value)
accumulator1.read();
accumulator1.read();
accumulator1.read();
console.log(accumulator1.value)