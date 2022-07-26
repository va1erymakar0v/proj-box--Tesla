const prevSlide = document.querySelector('.customize__prev');
const nextSlide = document.querySelector('.customize__next');
const carsList = document.querySelector('.customize__list');
const colors = document.querySelectorAll('.customize__color');

let currentColor = 0;

nextSlide.onclick = function() {
	let temp = cars[cars.length - 1].innerHTML;
	for (let i = cars.length - 1; i >= 1; i--) {
		cars[i].innerHTML = cars[i - 1].innerHTML;
	}
	cars[0].innerHTML = temp;
	placeCars();

	if (currentColor > 0) {
		colors[currentColor].classList.remove('customize__color--active');
		currentColor--;
		colors[currentColor].classList.add('customize__color--active');
	} else {
		colors[currentColor].classList.remove('customize__color--active');
		currentColor = colors.length - 1;
		colors[currentColor].classList.add('customize__color--active');
	}

	document.querySelector('.customize__item--active').classList.add('customize__animation');
	setTimeout(() => document.querySelector('.customize__item--active').classList.remove('customize__animation'), 1500);
}

prevSlide.onclick = function() {
	let temp = cars[0].innerHTML;
	for (let i = 0; i < cars.length - 1; i++) {
		cars[i].innerHTML = cars[i + 1].innerHTML;
	}
	cars[cars.length - 1].innerHTML = temp;
	placeCars();

	if (currentColor < cars.length - 1) {
		colors[currentColor].classList.remove('customize__color--active');
		currentColor++;
		colors[currentColor].classList.add('customize__color--active');
	} else {
		colors[currentColor].classList.remove('customize__color--active');
		currentColor = 0;
		colors[currentColor].classList.add('customize__color--active');
	}

	document.querySelector('.customize__item--active').classList.add('customize__animation');
	setTimeout(() => document.querySelector('.customize__item--active').classList.remove('customize__animation'), 1500);
}