// Bir add funksiyasi yazin .3 arqument alsin.
// ilk 2 si ededler(eded1 ve eded2) 3 cusu ise, funksiya olsun.
//     (callback).men o funksiyaya console.log ve ya alert verib, ozum teyin edim,
//     neticeni alert - de gostersin, yoxsa console - da.

// add(3, 5, console.log) //  console-a 8 yazmalidi
// add(3, 5, alert) //  alert-e 8 yazmalidi

//* umumi funksiyada funskiya cagirmaq
const add = (ed1, ed2, cb) => {
    let sum = ed1 + ed2
    cb(sum);
}
add(12, 23, (cem) => {
    console.log(`salam qardas by callback ${cem}`)
})

//* funksiyani return etmek
const sum2 = (num1, num2) => {
    return () => num1 + num2
}
const netice = sum2(2, 3)
console.log(netice())
//* ferqli
const subtract = (number1, number2, call) => {
    call(number1, number2);
}
subtract(12, 4, (n1, n2) => {
    console.log(n1 - n2); // 8

})