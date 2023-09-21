const btn = document.querySelector('#btn');
const div = document.querySelector('#div')


if (localStorage.getItem('mode') === 'dark')
    div.classList.add('darkMode');
else {
    div.classList.remove('darkMode')
}




btn.onclick = () => {
    div.classList.toggle('darkMode')
    if (div.classList.contains('darkMode')) {
        // dev.classList.add('darkMode')
        localStorage.setItem('mode', 'dark')
    }
    else {
        {
            localStorage.setItem('mode', 'white')
            // dev.classList.remove('darkMode')
        }
    }
    // if (div.classList.contains('darkMode')) {
    //     div.classList.remove('darkMode')
    // }
    // else {
    //     div.classList.add('darkMode');
    //     localStorage.setItem('mode', 'dark')
    // };
}


