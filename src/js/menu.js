const burger = document.querySelector('.menu__button');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');

burger.onclick = function() {
	burger.classList.toggle('menu__button--active');
	menu.classList.toggle('menu--active');
}

main.onclick = function() {
	if (burger.classList.contains('menu__button--active')) {
		burger.classList.toggle('menu__button--active');
		menu.classList.toggle('menu--active');
	}
}