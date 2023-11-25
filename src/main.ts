import { lenisManager } from './lenisManager';
import { renderGallery, initImageAnime } from './gallery';
import { initializeScrollbar } from './scrollBar';

let isInfinite = false;

const init = async () => {
	const start = performance.now();
	lenisManager.initLenis({ isInfinite });
	await renderGallery('app');
	initImageAnime();
	!isInfinite && initializeScrollbar();
	const end = performance.now();
	const elapsed = end - start;

	console.log(`took ${elapsed} milliseconds to init.`);
};

init();
