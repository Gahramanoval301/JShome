const input = document.getElementById('enter');
input.addEventListener('keydown', pressEnter)

function pressEnter(e) {
    if (e.key === 'Enter')
        console.log('Enter key is pressed')

}