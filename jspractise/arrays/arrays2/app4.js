// We have an array of strings arr.We’d like to have a sorted copy of it,
// but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (no changes)

let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(array) {
    const newArr = [...array]
    newArr.sort();
    return newArr;
}

let sorted = copySorted(arr);
console.log(sorted) // CSS, HTML, JavaScript
console.log(arr)  // HTML, JavaScript, CSS (no changes)

// Rule:
// 1. If you don't want your copied array is not the same reference with your original array
// then use the rest operator like copiedArray = [...array]
