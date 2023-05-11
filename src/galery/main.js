import Slide from './Slide.js'

const slideElements = Array.from(document.querySelectorAll('[data-slide]'))
const slides = slideElements.map(element => new Slide(element))
const last = slides.length - 1

const buttons = {
  prev: document.querySelector('#prev'),
  next: document.querySelector('#next')
}

let current = 0

Object.values(buttons)
  .forEach(button => button.addEventListener('click', (e) => updateGalery(e)))

function updateGalery({ target: button }) {
  const { id } = button

  if (id === 'next') {
    current++
  } else {
    current--
  }

  slides.forEach(slide => slide.move(id === 'next' ? 'left' : 'right'))

  updateButtons()
}

function updateButtons() {
  if (current > 0) {
    buttons.prev.disabled = false
  } else {
    buttons.prev.disabled = true
  }

  if (current < last) {
    buttons.next.disabled = false
  } else {
    buttons.next.disabled = true
  }
}

updateButtons()
