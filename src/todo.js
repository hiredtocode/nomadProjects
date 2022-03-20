const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");
const welcome = document.getElementById("welcome");

const TODOS_KEY = "todos";
let todos = [];

const savedUsernameCheck =
	localStorage.getItem(USERNAME_KEY);

window.addEventListener("load", () => {
	if (savedUsername === null) {
	} else {
		todoForm.classList.remove(HIDDEN_CLASSNAME);
		welcome.classList.add(HIDDEN_CLASSNAME);
	}
});

function saveTodos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(id) {
	const li = id.target.parentElement;

	todos = todos.filter(
		(todo) => todo.id !== parseInt(li.id)
	);
	li.remove(id);
	saveTodos();
}

function paintTodo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = newTodo.text;
	const button = document.createElement("button");
	button.className = "deletebtn";
	button.innerText = "❌";
	button.addEventListener("click", deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function handleTodoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	};
	todos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
	const parsedTodos = JSON.parse(savedTodos);
	todos = parsedTodos;
	parsedTodos.forEach(paintTodo);
}
