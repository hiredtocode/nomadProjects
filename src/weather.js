const API_KEY = "925c501cd1776432be4d3d5b6e8c0885";

function errorCallback() {
	alert(`Can't find you.`);
}

window.addEventListener("load", () => {
	if (savedUsername === null) {
		clock.classList.add(HIDDEN_CLASSNAME);
	} else {
		function successCallback(position) {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;

			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
			fetch(url).then((response) =>
				response.json().then((data) => {
					const weather = document.querySelector(
						"#weather span:first-child"
					);
					const name = document.querySelector(
						"#weather span:last-child"
					);
					weather.innerText = `Current temperature is:${data.main.temp}, ${data.weather[0].description} in ${data.name}`;
				})
			);
		}
	}
	navigator.geolocation.getCurrentPosition(
		successCallback,
		errorCallback
	);
});
