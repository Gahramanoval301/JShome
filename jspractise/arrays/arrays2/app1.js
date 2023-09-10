// Write the function camelize(str) that changes dash - separated words like
// “my - short - string” into camel - cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

//     Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S.Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
    let newArr = str.split('-')
    const uupercased = newArr.map((element, index) => {
        return (index === 0) ? element : element[0].toUpperCase() + element.slice(1);
    })
    const joinded = uupercased.join('')
    return joinded
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
