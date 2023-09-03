let arr = ["a", "b"];

arr.push(function () {
    console.log(this);   //TODO a, b, f() => array ozunu cixartdi!
});

console.log(arr[2]());