//~~

const isNaN = value => {
	return value === null || value === undefined
}

export const activeMenuBurger = (menu, activeClass, option = {}) => {
	const { nameClassBlockedScroll } = option

	function openMenu() {
		if (isNaN(menu)) {
			console.error(`Елемент не передан в параметр`)
			return
		}
		menu.classList.add(activeClass)
		document.body.classList.add(
			nameClassBlockedScroll || 'menu__blocked-scroll-content'
		)
	}
	function closeMenu() {
		if (isNaN(menu)) {
			console.error(`Елемент не передан в параметр`)
			return
		}
		menu.classList.remove(activeClass)
		document.body.classList.remove(
			nameClassBlockedScroll || 'menu__blocked-scroll-content'
		)
	}
	function toggleMenu() {
		if (isNaN(menu)) {
			console.error(`Елемент не передан в параметр`)
			return
		}
		menu.classList.toggle(activeClass)
		document.body.classList.toggle(
			nameClassBlockedScroll || 'menu__blocked-scroll-content'
		)
	}

	return {
		openMenu,
		closeMenu,
		toggleMenu,
	}
}
