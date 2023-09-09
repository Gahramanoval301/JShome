function myFunction(a) {
    let count = 0;
    a.forEach((element) => {
        if (+element < 0)
            count++;
    })
    return count;
}
console.log(myFunction([2, 5, 0, -6, -3]))