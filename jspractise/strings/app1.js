// Write a function upFirst(str) that returns the string str
// with the uppercased first character, for instance:

//     ucFirst("john") == "John";

function upFirst(str) {
    str = str.replace(str[0], str[0].toUpperCase())//Leman //Leman'i tezeden menimsedirsen str'a
    return str;
}
console.log(upFirst('leman'));