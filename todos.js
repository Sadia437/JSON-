function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}

loadTodos()

function displayTodos(todost) {
    const todosName = document.getElementById('todost')

    for (const todos of todost) {
        const div = document.createElement('div')
        div.classList.add('todos')
        div.innerHTML = `
            <h3>ID: ${todos?.id}</h3>
            <p>Title: ${todos?.title}</p>
            <p>Completed: ${todos?.completed}</p>
        `
        todosName.appendChild(div)
    }
}
