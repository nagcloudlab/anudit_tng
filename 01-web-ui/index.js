


// ------------------------------------------
// using DOM API
// ------------------------------------------
const cardBody = document.querySelector('.card-body');
const btn = document.querySelector('.btn-primary');

btn.addEventListener('click', e => {
    cardBody.style.backgroundColor = 'lightgray';
    cardBody.innerHTML = "Welcome Anudit";
});



// ------------------------------------------
// using DOM API + XHR / Fetch API
// ------------------------------------------

const top5TodosBtn = document.querySelector('#top5-todos-btn');

async function getTop5Todos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const todos = await response.json()
    return todos;
}

top5TodosBtn.addEventListener('click', e => {
    getTop5Todos().then(todos => {
        const todosList = document.querySelector('#todos-list');
        todosList.innerHTML = '';
        todos.forEach(todo => {
            const liEle = `
                <li class="list-group-item">
                    <div class="">
                        <span>${todo.id}</span>
                        <span>${todo.title}</span>
                        <span>${todo.completed}</span>
                    </div>
                </li>
            `
            todosList.innerHTML += liEle;
        });
    });
})

