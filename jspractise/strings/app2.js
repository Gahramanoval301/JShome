// Write a function checkSpam(str) that returns true
// if str contains ‘viagra’ or ‘XXX’, otherwise false.

// The function must be case -insensitive:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(str) {
    if (str.includes('viagra') || str.includes('XXX')) {
        alert(`Yes true!`)
        return true;
    }
    else
        alert(` The words:'viagra' or 'XXX' is not exist in '${str}' `)
    return false;
}
checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("viagranow");

