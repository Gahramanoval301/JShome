const leman = {
    name: 'leman',
    yas: 18,
    university: 'BDU',
    "fav-color": 'orange'
}
console.log(leman)
console.log(leman.name)

for (let key in leman) {
    console.log(leman[key] - 1) //* leman.yas -= 1;
}
for (let key in leman) {
    console.log(leman[key])
}

if ("yas" in leman) {
    console.log("Yes true")
}