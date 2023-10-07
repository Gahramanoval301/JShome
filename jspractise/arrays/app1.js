// 1Create an array styles with items “Jazz” and “Blues”.
// 2Append “Rock - n - Roll” to the end.
// 3Replace the value in the middle with “Classics”. Your code for finding the middle value
//  should work for any arrays with odd length.
// 4Strip off the first value of the array and show it.
//5 Prepend Rap and Reggae to the array.

let style = ['Jazz', 'Blues'];
style.push('Rock - n - Roll');
style[1] = 'Classics';   //! styles[Math.floor((styles.length - 1) / 2)] = "Classics";
style.shift();
style.unshift('Rap', 'Reggae');
console.log(style);
//style.splice(1, 1, ' Classics');
