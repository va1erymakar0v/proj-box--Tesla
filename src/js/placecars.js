// первая внизу
// если четное - последняя сверху, нечетное - две сверху
// считаем число пар, располагаем лесенкой

const cars = document.querySelectorAll('.customize__item');

const placeCars = function() {
	let part = 1 / cars.length;
	cars.forEach(item => {
		item.querySelector('.customize__image').style.width = part*728 + 'px';
		item.querySelector('.customize__image').style.height = part*408 + 'px';
	})

	let activeCar = document.querySelector('.customize__item--active');
	activeCar.style.top = '90%';
	activeCar.style.left = '50%';
	activeCar.style.transform = 'translate3d(-50%, -100%, 0)';
	activeCar.querySelector('.customize__image').style.width = '100%';
	activeCar.querySelector('.customize__image').style.height = '100%';

	if (cars.length % 2 != 0) {
		let lastCar = cars[(cars.length - 1) / 2];
		let preLastCar = cars[(cars.length - 1) / 2 + 1];
		preLastCar.style.top = '0';
		preLastCar.style.left = '66.6%';
		preLastCar.style.transform = 'translateX(-66.6%)';
		lastCar.style.top = '0';
		lastCar.style.left = '33.3%';	
		lastCar.style.transform = 'translateX(-33.3%)';
	} else {
		let lastCar = cars[(cars.length) / 2];
		lastCar.style.top = '0';
		lastCar.style.left = '50%';
		lastCar.style.transform = 'translateX(-50%)';
	}

	if (cars.length % 2 == 0) {
		let pairs = (cars.length - 2) / 2;
		for (let counter = 0; counter < pairs; counter++) {
			cars[counter + 1].style.top = (50 / pairs) * counter + 10 + '%';
			cars[counter + 1].style.left = 5 + '%';
			cars[cars.length - counter - 1].style.top = (50 / pairs) * counter + 10 + '%';
			cars[cars.length - counter - 1].style.left = 95 + '%';
			cars[cars.length - counter - 1].style.transform = 'translateX(' + '-95' + '%)';
		}
	} else {
		let pairs = (cars.length - 3) / 2; // считаем количество пар
		for (let counter = 0; counter < pairs; counter++) {
			cars[counter + 1].style.top = (50 / pairs) * counter + 10 + '%';
			cars[counter + 1].style.left = 5 + '%';
			cars[cars.length - counter - 1].style.top = (50 / pairs) * counter + 10 + '%';
			cars[cars.length - counter - 1].style.left = 95 + '%';
			cars[cars.length - counter - 1].style.transform = 'translateX(' + '-95' + '%)';
		}
	}
}

placeCars();