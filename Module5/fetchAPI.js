fetch('https://jsonplaceholder.typicode.com/posts', { 
        method: "POST",
        body: JSON.stringify({name: 'Maxim'}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));