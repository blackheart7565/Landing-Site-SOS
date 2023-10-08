import spoilerActive from './function.js'
import { activeMenuBurger } from './menuBurger.js'
import selectMenu from './select.js'
import { initializationSwiper } from './swiper.js'

const header = document.querySelector('.header')
const headerTop = document.querySelector('.header__top')

const menuBurger = document.getElementById('menu-burger')
const menuBurgerBtnOpen = document.getElementById('menu-burger-open')
const menuBurgerBtnClose = document.getElementById('menu-burger-close')

const activeClassMenu = 'menu-burger__active'

window.addEventListener('scroll', () => {
	const { top, bottom } = header.getBoundingClientRect()
	if (top < 0) {
		headerTop.classList.add('scroll-top-header')
	} else {
		headerTop.classList.remove('scroll-top-header')
	}
})

initializationSwiper('.swiper__content')
spoilerActive('features__item')
selectMenu()
const activeMenu = activeMenuBurger(menuBurger, activeClassMenu)

menuBurgerBtnOpen.addEventListener('click', () => {
	activeMenu.openMenu()
})

menuBurgerBtnClose.addEventListener('click', () => {
	activeMenu.closeMenu()
})
