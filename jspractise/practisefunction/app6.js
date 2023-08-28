// Bir parametrli funksiya yazın, parametr olaraq cins(K, Q) və ad qəbul etsin.
// Həmin funksiya geriyə funksiya göndərsin.
// Geriyə göndərdiyi funksiyada əgər cins qadındırsa qarşısına Xanım, kişidirsə cənab yazılıb,
// console - a çıxarılsın.

const cinsFactory = (cins, name) => {
    if (cins === 'K' || cins === 'k')
        return console.log(`Salam cenab ${name} `)
    else if (cins === 'Q' || cins === 'q')
        return console.log(`Salam xanim ${name} `)

}

cinsFactory('Q', 'leman')