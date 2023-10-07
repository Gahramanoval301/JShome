const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(response => response.json())//bunun elw ozude promise'di response(response obh)->json
    .then(data => {
        console.log(data);
        data.forEach(({ name, id }) => {
            console.log(name, id);
        })
        console.log(fetch); //native code
    })  //response json -> data goturulur 2 dene then
async function getData() {
    const response = await fetch(url) //responsu onun canindan cixartdim
    const json = await response.json();
    console.log(json)
} //await-> promiseslerin icerisinden responsu cixardir ve variable'a menimsedir
getData()
