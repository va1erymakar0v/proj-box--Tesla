const decorativeOverlay = document.querySelector('.decorative-overlay');
const customizePopup = document.querySelector('.customize__popup');
const customizeClose = document.querySelector('.customize__popup-close');

decorativeOverlay.onclick = function() {
	decorativeOverlay.classList.toggle('decorative-overlay--active');
	customizePopup.classList.toggle('customize__popup--active');
}

customizeClose.onclick = function() {
	decorativeOverlay.classList.toggle('decorative-overlay--active');
	customizePopup.classList.toggle('customize__popup--active');
}

const option = document.querySelectorAll('.customize__option');

option.forEach(item => {
	item.onclick = function() {
		option.forEach(element => {
			element.classList.remove('customize__option--active');
		})
		item.classList.add('customize__option--active');
		item.parentNode.parentNode.querySelector('.customize__characteristics-distance').innerHTML = item.querySelector('.customize__distance').innerHTML;
		item.parentNode.parentNode.querySelector('.customize__characteristics-speed').innerHTML = item.querySelector('.customize__speed').innerHTML;
		item.parentNode.parentNode.querySelector('.customize__characteristics-racing').innerHTML = item.querySelector('.customize__racing').innerHTML;
	}	
});

const customizeSubmit = document.querySelector('.customize__submit');

customizeSubmit.onclick = function(e) {
	decorativeOverlay.classList.toggle('decorative-overlay--active');
	customizePopup.classList.toggle('customize__popup--active');

	let targetModel = e.target.parentNode.querySelector('.customize__heading').innerHTML;
	document.querySelector('.customize__popup-model').innerHTML = targetModel;

	let targetModelType = e.target.parentNode.querySelector('.customize__option--active').querySelector('.customize__model-type').innerHTML;
	let targetColor = e.target.parentNode.parentNode.querySelector('.customize__paint').querySelector('.customize__color--active').innerHTML;
	document.querySelector('.customize__popup-option').innerHTML = targetModelType + ' ' + targetColor;

	let targetPrice = e.target.parentNode.querySelector('.customize__option--active').querySelector('.customize__price').innerHTML;
	document.querySelector('.customize__popup-price').innerHTML = targetPrice;
}