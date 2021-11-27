// Deliverables
// A user can:
// - View incomplete todos
// - When the "Show completed todos" box is checked, view completed todos as well
// - Enter a new todo, which will initially show as incomplete
// - Click a todo to toggle its completion

// Instructions
// - Start this project from scratch, write whatever HTML, CSS & JS you need
// - Create a state object
// - Create action functions that update state
// - Create render functions that read from state

// Tips
// - Try starting with the state. Create the state for the todos, then a function to toggle a todo's completed state, a function to add a new todo, etc.
// - You can test these functions before you even render anything on the page, just by calling the functions in your js file.


// How to work with state:
// 1. create some state
// 2. render the app based on the state
// 3. update the state
// 4. rerender the app based on the new state

const showCompleted = document.querySelector('.show-completed-checkbox')
const addTodoForm = document.querySelector('.add-item')
const todoList = document.querySelector('.todo-list')
const completedList = document.querySelector('.completed-list')


let state = {
    todos = [{
            title: "Start the project",
            completed = true
        },
        {
            title: "Work on the project",
            completed = true
        },
        {
            title: "Finish the project",
            completed = true
        }
    ]
}




function renderTodos(todoList) {
    const liEl = document.createElement("li")
    for (const todo in todosList) {
        liEl.setAttribute('class', 'todo')


    }
    return liEl
}

const todoList = document.querySelector('.todo-list')

for (const todo in todosList) {
    todoList.append(renderTodos(todosList[todo]))
}