const url2 = 'https://jsonplaceholder.typicode.com/posts'
axios.get(url2)
    .then(({ data }) => {
        data.forEach(({ title }) => {
            document.body.innerHTML += `<h1>${title}</h1>`
        })

    })
async function getData(url) {
    const { data } = await axios.get(url2);
    console.log(data);
}
getData()