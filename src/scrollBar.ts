import { lenisManager } from './lenisManager';
import { math } from './math';

export function initializeScrollbar() {
	const scrollbar = document.createElement('div');
	scrollbar.id = 'scrollbar';
	scrollbar.className = 'scrollbar';

	const inner = document.createElement('div');
	inner.className = 'inner';

	const thumb = document.createElement('div');
	thumb.className = 'thumb';

	inner.appendChild(thumb);
	scrollbar.appendChild(inner);
	document.body.appendChild(scrollbar);

	let start: number | null = null;

	const onPointerMove = (e: MouseEvent) => {
		if (start === null) return;
		e.preventDefault();

		const innerHeight = inner.clientHeight;
		const thumbHeight = thumb.clientHeight;
		const scroll = math.mapRange(
			start,
			innerHeight - (thumbHeight - start),
			e.clientY,
			0,
			lenisManager.lenis.limit
		);
		lenisManager.lenis.scrollTo(scroll, { immediate: true });
	};

	const onPointerDown = (e: MouseEvent) => {
		start = e.offsetY;
	};

	const onPointerUp = () => {
		start = null;
	};

	thumb.addEventListener('pointerdown', onPointerDown, false);
	window.addEventListener('pointermove', onPointerMove, false);
	window.addEventListener('pointerup', onPointerUp, false);

	lenisManager.lenis.on('scroll', () => {
		const progress = lenisManager.lenis.scroll / lenisManager.lenis.limit;
		const innerHeight = inner.clientHeight;
		const thumbHeight = thumb.clientHeight;

		thumb.style.transform = `translate3d(0,${progress * (innerHeight - thumbHeight)}px,0)`;
	});
}
