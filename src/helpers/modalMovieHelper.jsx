export const showImgModalMovie = (transition) => {
	const imgHeroEl = document.querySelector(".imgModalMovie");
	imgHeroEl.style.transition = transition;
	imgHeroEl.style.opacity = 1;
};

export const hideImgModalMovie = (transition) => {
	const imgHeroEl = document.querySelector(".imgModalMovie");
	imgHeroEl.style.transition = transition;
	imgHeroEl.style.opacity = 0;
};

export const showBtnMuteModalMovie = () => {
	const btnMuteModalMovieEl = document.querySelector(".btnMuteModalMovie");
	btnMuteModalMovieEl.style.zIndex = 4;
};

export const hideBtnMuteModalMovie = () => {
	const btnMuteModalMovieEl = document.querySelector(".btnMuteModalMovie");
	btnMuteModalMovieEl.style.zIndex = 2;
};
