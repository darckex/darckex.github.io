const pickWinner = () => {
	const btn = document.querySelector(".btn")
	const paper = document.querySelector(".paper")
	const img = document.querySelector(".img")
	const title = document.querySelector(".title")
	btn.classList.add("hide")
	setTimeout(() => {
		btn.remove()
	}, 350)
	setTimeout(() => {
		paper.style.display = "flex"
	}, 400)
	setTimeout(() => {
		paper.classList.add("active")
		const interval = setInterval(() => {
			const rand = Math.floor(Math.random() * (5 + 1))
			img.src = `./images/${rand}.jpg`
		}, 100)
		setTimeout(() => {
			clearInterval(interval)
			img.src = "./images/winner.jpg"
			img.classList.add("active")

			setTimeout(() => {
				paper.querySelector(".info").classList.add("active")
				title.style.display = "block"
				setTimeout(() => {
					title.classList.add("active")
				}, 100)
			}, 350)
		}, 3000)
	}, 450)
}
