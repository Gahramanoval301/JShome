// 5.İstifadəçidən tarixi «YYYY.MM.DD» formatında daxil etməyi xahiş edin.Tarixin təsvirini «12 may 2019» formatında çıxarın.İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.

const userInput = prompt('Tarixi «YYYY.MM.DD» formatında daxil edin')

const date = new Date(userInput)

const day = date.getDate()
const month = getMonthName(date.getMonth() + 1)
const year = getYearEnding(date.getFullYear())

console.log(`${day} ${month} ${year}`)


function getMonthName(monthNumber) {
    const months = {
        1: "yanvar",
        2: 'fevral',
        3: 'mart',
        4: 'aprel',
        5: 'may',
        6: 'iyun',
    }
    return months[monthNumber]
}
function getYearEnding(year) {
    const lastDigit = year.toString()[3]
    switch (+lastDigit) {
        case 3:
        case 4:
            return `${year}-cü il`
        case 6:
            return `${year}-cı il`
        case 9:
            return `${year}-cu il`
        default:
            return `${year}-ci il`
    }
}

