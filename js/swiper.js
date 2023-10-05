export const initializationSwiper = nameSliderContainer => {
	new Swiper(nameSliderContainer, {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		loop: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 0,
			stretch: 500,
			// stretch: 323,
			depth: 200,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
}
