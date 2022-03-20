const clock = document.querySelector("#clock");

window.addEventListener("load", () => {
	if (savedUsername === null) {
		clock.classList.add(HIDDEN_CLASSNAME);
	} else {
		function getClock() {
			const date = new Date();
			const hours = String(date.getHours()).padStart(
				2,
				"0"
			);
			const minutes = String(date.getMinutes()).padStart(
				2,
				"0"
			);
			const seconds = String(date.getSeconds()).padStart(
				2,
				"0"
			);
			clock.innerHTML = `Current time is ${hours}:${minutes}:${seconds}`;
		}

		getClock();
		setInterval(getClock, 1000);
	}
});
