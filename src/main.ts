import { lenisManager } from './lenisManager';
import { renderGallery, initImageAnime } from './gallery';
import { initializeScrollbar } from './scrollBar';

let isInfinite = false;

const init = async () => {
	lenisManager.initLenis({ isInfinite });
	await renderGallery('app');
	initImageAnime();
	!isInfinite && initializeScrollbar();
};

init();
