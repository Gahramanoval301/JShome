//* Write a JavaScript program to calculate sphere volume.
// const form = document.getElementById('MyForm');
// const radiusInput = document.getElementById('radius'); //input
// const volumeInput = document.getElementById('volume');//input

// function calculateVolume() {
//     const radius = radiusInput.value;
//     volumeInput.value = (4 / 3) * 3 * radius ** 3
// }
// form.onsubmit = (e) => {
//     e.preventDefault()

// }
function calculateVolume() {
    var volume;
    var radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
    return false;
}
window.onload = document.getElementById('MyForm').onsubmit = calculateVolume;