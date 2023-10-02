fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        const users = []
        json.forEach(user => {
            users.push(user.name)
        });
        console.log(users);
    })