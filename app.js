const arrows = document.querySelectorAll('.arrow');
// console.log(arrows);
const movieLists = document.querySelectorAll('.movie-list');
// console.log(movieLists);

arrows.forEach((arrow, i) => {
	const itemNumber = movieLists[i].querySelectorAll('img').length;
	let clickCounter = 0;
	arrow.addEventListener('click', () => {
		clickCounter++;
		if (itemNumber - (5 + clickCounter) >= 0) {
			movieLists[i].style.transform = `translateX(${
				movieLists[i].computedStyleMap().get('transform')[0].x.value -
				300
			}px)`;
		} else {
			movieLists[i].style.transform = 'translateX(0)';
			clickCounter = 0;
		}
	});
	console.log(movieLists[i].querySelectorAll('img').length);
});

const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll(
	'.container,.movie-list-title,.navbar,.sidebar,.side-menu-icon,.toggle',
);
ball.addEventListener('click', () => {
	items.forEach((item) => {
		item.classList.toggle('active');
	});
	ball.classList.toggle('active');
});
