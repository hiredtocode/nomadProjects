// loginForm
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(
	"#login-form input"
);
const greetings = document.querySelector("#greetings");
const button = document.createElement("button");
// localStorage
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// login form
function onLoginSubmit(event) {
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
}

// paint paintGreetings

function paintGreetings(username) {
	greetings.innerText = `Hello, nice to meet you ${username}.
	Your background will change every 5 seconds `;
	greetings.classList.remove(HIDDEN_CLASSNAME);
}
// local STORAGE
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintGreetings(savedUsername);
}
