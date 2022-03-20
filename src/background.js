const images = [
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"0.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
	"9.jpg",
];

function changeBackground() {
	const background = document.querySelector("#background");

	const chosenImages =
		images[Math.floor(Math.random() * images.length)];

	background.style.backgroundImage = `url(
      'img/${chosenImages}'`;
}

changeBackground();
setInterval(changeBackground, 5000);
