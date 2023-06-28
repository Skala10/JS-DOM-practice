// Shining stars. The specified number of stars should appear in a random part of the screen.
// Each star increases from minimum to maximum size with a certain step and interval.
// Once the maximum size is reached, the star should appear in another random position.


class Stars {
  constructor(starSrc, starMinWidth, starMaxWidth) {
    this.starSrc = starSrc
    this.starMinWidth = starMinWidth
    this.starMaxWidth = starMaxWidth
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  getStar(starsQuantity) {
    const container = document.querySelector(".container")
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight

    for (let i = 0; i < starsQuantity; i++) {
      const star = document.createElement("img")
      star.setAttribute("src", this.starSrc)
      star.classList.add("star")
      star.style.top = `${this.getRandomNumber(10, containerHeight - 10)}px`
      star.style.left = `${this.getRandomNumber(10, containerWidth - 10)}px`
      star.style.width = this.starMinWidth + this.getRandomNumber(1, 5) + "px"
      container.append(star)

      const step = this.getRandomNumber(1, 3)

      setInterval(() => {
        star.style.transition = "width 0.5s ease-in-out 0s"
        star.style.width = parseFloat(star.style.width) + step + "px"
        if (parseFloat(star.style.width) > this.starMaxWidth) {
          star.style.transition = "none"
          star.style.width = this.starMinWidth + "px"
          star.style.left = `${this.getRandomNumber(10, containerWidth - 10)}px`
          star.style.top = `${this.getRandomNumber(10, containerHeight - 10)}px`
        }
      }, 500)
    }
  }
}

const star = new Stars("./img/star.svg", 10, 25)
star.getStar(50)
