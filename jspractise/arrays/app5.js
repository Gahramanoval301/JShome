
// 6.İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.


const ed = prompt("eded daxil edin: ")

console.log(numberToText(ed))

function numberToText(ed) {
    const ilkEded = ed[0]
    const sonEded = ed[1]

    let solTeref = ''
    let sagTeref = ''

    switch (sonEded) {
        case '0':
            sagTeref = ''
            break;
        case '1':
            sagTeref = 'bir'
    }
    switch (ilkEded) {
        case '1':
            solTeref = 'on'
            break;
        case '2':
            solTeref = 'iyirmi'
    }
    return `${solTeref} ${sagTeref}`
}
