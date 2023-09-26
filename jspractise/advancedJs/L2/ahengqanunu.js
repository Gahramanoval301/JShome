//Todo Aheng qsnunu:

const ince = ['e', 'ə', 'i', 'ö', 'ü'];
const qapali = ['a', 'ı', 'o', 'u'];

String.prototype.ahengQanunuPozulubmu = function () {
    for (let i = 0; i < ince.length; i++) {
        if (this.includes(ince[i]) && this.includes(qapali[i]))
            return true;
    }
    return false;
}
let soz1 = 'ömər'
let soz2 = 'leman'
console.log(soz1.ahengQanunuPozulubmu(), soz2.ahengQanunuPozulubmu())