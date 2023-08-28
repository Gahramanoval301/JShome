//example1
// if("0")
// {
//    console.log("This is true");
// }


//example2


// let nameJS = prompt('What is the “official” name of JavaScript?');
// if(nameJS == "ECMAScript")
// {
//     console.log("Right!");
// }
// else {
//     console.log(`You don't know? “ECMAScript”!`);
// }


//example3


// let number = +prompt("Enter the value what you want: ");
// if(number>0)
// {
//     console.log(1);
// }
// else if (number<0)
// {
//     console.log(-1);
// }
// else if (number == 0)
// {
//     console.log(0);
// }
// else{
//     console.log("This isn't number!")
// }


//example4


// let result;

// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }

// let a = +prompt("Enter the first number: ");
// let b = +prompt("Enter the second number: ");

// let result = a + b < 4 ? console.log('Below') : console.log('Over');


//example5


// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }


// let login = prompt("Enter your position: ");
// let message = (login == 'Employee') ? "Hello" :
//     (login == 'Director') ? "Greetings!" :
//         (login == '') ? "No login" :
//             " ";
// console.log(message);


//BANANA
// let partOfBanana = (undefined - 1);
// partOfBanana.toString;
// console.log(`ba${partOfBanana}a`)

let a = +prompt('a?', '');

if (a == 0) {
    alert(0);
}
if (a == 1) {
    alert(1);
}

if (a == 2 || a == 3) {
    alert('2,3');
}

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2, 3');
        break;
    default:
        alert("Heshzad")
        break;
}





