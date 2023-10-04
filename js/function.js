// const spoilerActive = (element: string): void => {
// 	const spoiler = document.querySelector(`.${element}`)
// 	console.log(spoiler)
// }
const spoilerActive = element => {
	const spoilerItems = document.querySelectorAll(`.${element}`)

	if (!spoilerItems) {
		console.error('Element undefind')
		return
	}

	spoilerItems.forEach(item => {
		item.addEventListener('click', e => {
			spoilerItems.forEach(item => {
				item.classList.remove('active')
			})
			item.classList.add('active')
		})
	})
}

export default spoilerActive
