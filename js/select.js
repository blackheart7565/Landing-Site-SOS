//~~

function selectMenu() {
	const selectBtn = document.querySelector('.select__toggle')
	const codePhoneCountry = document.querySelector('.select__display')
	const selectItems = document.querySelectorAll('.select__item')
	const selectList = document.querySelector('.select__list')
	const selectActive = 'select-active'

	selectBtn.addEventListener('click', () => {
		selectBtn.classList.toggle(selectActive)
	})

	selectItems.forEach(item => {
		item.addEventListener('click', event => {
			toggleClassActive(event)
		})
	})

	function toggleClassActive(e) {
		if (e.target.classList.contains('select__item')) {
			const clickedItem = e.target
			const isClass = clickedItem.classList.contains('select__item-active')

			if (isClass) return

			const activeItems = selectList.querySelectorAll('.select__item-active')
			if (activeItems.length > 0) {
				activeItems.forEach(function (item) {
					item.classList.remove('select__item-active')
				})
			}

			clickedItem.classList.add('select__item-active')
			codePhoneCountry.innerHTML = clickedItem.textContent
			selectBtn.classList.remove('select-active')
		}
	}
}

export default selectMenu
