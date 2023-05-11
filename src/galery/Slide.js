export default class Slide {
  constructor(element) {
    this.element = element
  }

  get transform() {
    const { transform } = this.element.style

    if (transform === '') {
      return 0
    }

    const index = transform.indexOf('(')
    const translateValue = transform.slice(index + 1)
    return parseInt(translateValue)
  }

  set transform(transform) {
    this.element.style.transform = `translate(${transform}%)`
  }

  move(direction) {
    if (direction === 'right') {
      this.transform = this.transform + 100
    } else if (direction === 'left') {
      this.transform = this.transform - 100
    }
  }
}