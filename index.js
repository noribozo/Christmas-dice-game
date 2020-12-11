const dice = document.querySelector('.dice')
const allDots = Array.from(document.querySelectorAll('.dice div'))
const score = document.getElementById('score')
const message = document.getElementById('message')
const startMessage = document.getElementById('start-message')

function rollDice(){
	let randomNumber = 1 + Math.floor(Math.random() * 6)
	allDots.forEach(dot => dot.classList.remove('dot'))
	if (randomNumber === 6){
		allDots[0].classList.add('dot')
		allDots[2].classList.add('dot')
		allDots[3].classList.add('dot')
		allDots[5].classList.add('dot')
		allDots[6].classList.add('dot')
		allDots[8].classList.add('dot')
		message.textContent= "You win!"
		startMessage.textContent=""
	}
	if (randomNumber === 5) {
		allDots[0].classList.add('dot')
		allDots[2].classList.add('dot')
		allDots[4].classList.add('dot')
		allDots[6].classList.add('dot')
		allDots[8].classList.add('dot')
			message.textContent= ""
	}
	if (randomNumber === 4) {
		allDots[0].classList.add('dot')
		allDots[2].classList.add('dot')
		allDots[6].classList.add('dot')
		allDots[8].classList.add('dot')
			message.textContent= ""
	}
	if (randomNumber === 3) {
		allDots[0].classList.add('dot')
		allDots[4].classList.add('dot')
		allDots[8].classList.add('dot')
			message.textContent= ""
	}
	if (randomNumber === 2) {
		allDots[0].classList.add('dot')
		allDots[8].classList.add('dot')
			message.textContent= ""
	}
	if (randomNumber === 1) {
		allDots[4].classList.add('dot')
			message.textContent= ""
		}
	score.innerHTML = `${randomNumber}`
	
}
dice.addEventListener('click', rollDice)