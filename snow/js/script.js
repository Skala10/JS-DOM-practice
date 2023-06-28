// Render the falling snow. A snowflake appears at the top of the screen and moves down at a random speed.
// As soon as the snowflake reaches the bottom of the screen, it should reappear at the top of the screen.

class Snow {
  constructor() {}

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  addSnow(quantityOfFlakes) {
    const container = document.querySelector(".container")
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight

    for (let i = 0; i < quantityOfFlakes; i++) {
      const flake = document.createElement("img")
      flake.setAttribute("src", "./img/snow.svg")
      flake.className = "flake"
      flake.style.width = `${this.getRandomNumber(10, 20)}px`
      flake.style.height = `${this.getRandomNumber(10, 20)}px`

      const randomX = this.getRandomNumber(0, containerWidth)
      const randomY = this.getRandomNumber(-200, -50)

      flake.style.transform = `translate(${randomX}px, ${randomY}px)`
      container.append(flake)

      setTimeout(() => {
        const flakesAnimation = flake.animate(
          [
            { transform: `translate(${randomX}px, ${randomY}px)` },
            { transform: `translate(${randomX}px, ${containerHeight}px)` },
          ],
          {
            duration: this.getRandomNumber(5000, 10000),
            iterations: Infinity,
          }
        )
      }, this.getRandomNumber(0, 5000))
    }
  }
}

const snow = new Snow()
snow.addSnow(70)
