const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(({ name, id }) => {
            console.log(name, id);
        })
    })
async function getData() {
    const response = await fetch(url)
    const json = await response.json();
    console.log(json)
}
getData()
