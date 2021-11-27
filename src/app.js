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


const state = {
    todos: [{
            title: "Start the project",
            completed: false
        },
        {
            title: "Get some sleep",
            completed: true
        },
        {
            title: "Work on the project",
            completed: false
        },
        {
            title: "Get some well deserved rest",
            completed: true
        },
        {
            title: "Finish the project",
            completed: false
        },
        {
            title: "Sleep longer",
            completed: false
        }
    ],
    showCompleted: true
}

// Functions needed

// Filter completed todos 
function findCompletedTodos() {
    return state.todos.filter((todo) => {
        return todo.completed
    })
}

// Filter incompleted todos 
function findIncompleteTodos() {
    return state.todos.filter((todo) => {
        return !todo.completed
    })
}

// Add new todos
function addNewTodo(todoTitle) {
    state.todos.push({ title: todoTitle, completed: false })
}

// Delete todo
function deleteTodo(todoTitle) {
    state.todos = state.todos.filter((todo) => {
        return todo.title !== todoTitle
    })
}

// Toggle Complete in Todos
function toggleTodo(todo) {
    return todo.completed = !todo.completed
}

// Render toodos 

//  Render Incompleted
function renderIncompleteTodos() {
    todoList.innerHTML = ""

    const incompleteTodos = findIncompleteTodos()

    for (const todo of incompleteTodos) {

        const liEl = document.createElement('li')
        const completedCheckboxDiv = document.createElement('div')
        const completedCheckboxInput = document.createElement('input')
        const textSectionDiv = document.createElement('div')
        const todoText = document.createElement('p')
        const buttonSectionDiv = document.createElement('div')
        const todoButtonEdit = document.createElement('button')
        const todoButtonDelete = document.createElement('button')


        liEl.setAttribute('class', 'todo')

        completedCheckboxDiv.setAttribute('class', 'completed-checkbox')

        completedCheckboxInput.setAttribute('class', 'completed-checkbox')
        completedCheckboxInput.setAttribute('type', 'checkbox')
        completedCheckboxInput.checked = todo.completed
        completedCheckboxInput.addEventListener('click', () => {
            toggleTodo(todo)
            render()
        })

        textSectionDiv.setAttribute('class', 'text-section')

        todoText.setAttribute('class', 'text')
        todoText.textContent = todo.title

        buttonSectionDiv.setAttribute('class', 'button-section')

        todoButtonEdit.setAttribute('class', 'edit')
        todoButtonEdit.textContent = "Edit"

        todoButtonDelete.setAttribute('class', 'delete')
        todoButtonDelete.textContent = "Delete"
        todoButtonDelete.addEventListener('click', () => {
            deleteTodo(todo.title)
            render()
        })


        completedCheckboxDiv.append(completedCheckboxInput)
        textSectionDiv.append(todoText)
        buttonSectionDiv.append(todoButtonEdit, todoButtonDelete)

        liEl.append(completedCheckboxDiv, textSectionDiv, buttonSectionDiv)

        todoList.append(liEl)
    }
    return incompleteTodos
}

// Render Completed
function renderCompletedTodos() {
    completedList.innerHTML = ""
    const completedTodos = findCompletedTodos()

    for (const todo of completedTodos) {

        const liEl = document.createElement('li')
        const completedCheckboxDiv = document.createElement('div')
        const completedCheckboxInput = document.createElement('input')
        const textSectionDiv = document.createElement('div')
        const todoText = document.createElement('p')
        const buttonSectionDiv = document.createElement('div')
        const todoButtonEdit = document.createElement('button')
        const todoButtonDelete = document.createElement('button')


        liEl.setAttribute('class', 'todo completed')

        completedCheckboxDiv.setAttribute('class', 'completed-checkbox')

        completedCheckboxInput.setAttribute('class', 'completed-checkbox')
        completedCheckboxInput.setAttribute('type', 'checkbox')
        completedCheckboxInput.checked = todo.completed
        completedCheckboxInput.addEventListener('click', () => {
            toggleTodo(todo)
            render()
        })

        textSectionDiv.setAttribute('class', 'text-section')

        todoText.setAttribute('class', 'text')
        todoText.textContent = todo.title

        buttonSectionDiv.setAttribute('class', 'button-section')

        todoButtonEdit.setAttribute('class', 'edit')
        todoButtonEdit.textContent = "Edit"


        todoButtonDelete.setAttribute('class', 'delete')
        todoButtonDelete.textContent = "Delete"
        todoButtonDelete.addEventListener('click', () => {
            deleteTodo(todo.title)
            render()
        })

        completedCheckboxDiv.append(completedCheckboxInput)
        textSectionDiv.append(todoText)
        buttonSectionDiv.append(todoButtonEdit, todoButtonDelete)

        liEl.append(completedCheckboxDiv, textSectionDiv, buttonSectionDiv)

        completedList.append(liEl)
    }
    return completedTodos
}

// Rendering the elements
function render() {
    renderIncompleteTodos()
    if (state.showCompleted) {
        renderCompletedTodos()
    }
}
render()

// Showing completed
showCompleted.addEventListener('click', () => {
    state.showCompleted = !state.showCompleted
    render()
})

// Adding new todo
addTodoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputText = document.querySelector('.text-input').value
    addNewTodo(inputText)
    render()
})