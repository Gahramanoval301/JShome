const strongs = document.querySelectorAll('strong')

function highlight() {
    for (strong of strongs) {
        strong.style.color = 'red'
    }
}
function return_normal() {
    for (strong of strongs) {
        strong.style.color = 'black'
    }
}