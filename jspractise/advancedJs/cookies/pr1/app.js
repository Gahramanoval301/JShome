let date = new Date(Date.now() + 100000e4);
expiredDate = date.toUTCString();
document.cookie = 'object' + '=' + 'salam; expires=' + expiredDate; //!Expired Date
console.log(document.cookie);
function setCookie(name, value, exdays) {
    let expires = ''
    if (expires) {
        let date2 = new Date();
        date2 = date2.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000)
        expires = "; expires =" + date2.toUTCString();
    }
    document.cookie = name + "=" + (encodeURIComponent(value) || ' ') + expires + "path=/"
}
setCookie('leman', '1223', 20)
//*max age
document.cookie = `leman = fozlsd; max-age=36000` //! max-age is evaluated in seconds
console.log(document.cookie);
//* get cookie