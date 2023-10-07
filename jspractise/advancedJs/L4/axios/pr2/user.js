const url = 'https://65217450a4199548356d3a5c.mockapi.io/api/v1/Users'
const addBtn = document.getElementById("add-contact")
const userContainer = document.querySelector('.user-container')
axios.get(url).then(({ data }) => {
    data.forEach(({ name, age, hobby, id }) => {
        userContainer.innerHTML += `<div class="user-container d-flex justify-content-center">
            <div id="user-${id}" class="user-card">
                <h2 class="text-center">${id} ${name}</h2>
                <div class="info-container d-flex justify-content-between">
                    <div class="info  d-flex m-1">
                        <p class="mx-2">age: ${age}</p>
                        <p class="mx-2">hobby: ${hobby}</p>
                    </div>
                    <div class="btn-container">
                        <button class="btn btn-primary" onclick="editContact(${id})"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="btn btn-danger" onclick="removeContact(${id})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>`
    })
})

addBtn.onclick = () => {
    const userContainer2 = document.querySelector('.user-container')
    const name = prompt('Enter new name: ');
    const age = prompt('Enter new age: ');
    const hobby = prompt('Enter new hobby: ');
    axios.post(url, { name, age, hobby })
        .then(({ data: { name, age, hobby, id } }) => {
            notify(`New contact is created!`)
            userContainer2.innerHTML = `<div class="user-container d-flex justify-content-center">
            <div id="user-${id}" class="user-card">
                <h2 class="text-center">${id} ${name}</h2>
                <div class="info-container d-flex justify-content-between">
                    <div class="info  d-flex m-1">
                        <p class="mx-2">age: ${age}</p>
                        <p class="mx-2">hobby: ${hobby}</p>
                    </div>
                    <div class="btn-container">
                        <button class="btn btn-primary" onclick="editContact(${id})"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="btn btn-danger" onclick="removeContact(${id})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>` + userContainer.innerHTML
        })
}

//! backendden silmek ucun 
function removeContact(id) {
    axios.delete(url + '/' + id).then(({ data }) => {
        notify(`${data.name} contact is deleted!`) //*alert evezi notify
        document.getElementById(`user-${id}`).remove()
    })

}


function editContact(id) {
    axios.get(url + '/' + id)
        .then(({ data }) => {
            data.name = prompt('Enter new name: ', data.name)
            data.age = prompt('Enter new age: ', data.age)
            data.hobby = prompt('Enter new hobby: ', data.hobby)
            axios.put(url + '/' + id, data)
                .then(({ data }) => {
                    notify(`${data.name} contact is edited!`)
                    console.log('slammmm');
                    document.querySelector(`#user-${id} h2`).textContent = `${id} ${data.name}`
                    document.querySelector(`#user-${id} p`).textContent = `age: ${data.age}`
                    document.querySelector(`#user-${id} p+p`).textContent = `hobby: ${data.hobby}`
                })

        })

}

//TODO from tostify js
function notify(text) {
    Toastify({
        text,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #343a40, #0d6efd)",
        },
        onClick: function () { } // Callback after click
    }).showToast();

}