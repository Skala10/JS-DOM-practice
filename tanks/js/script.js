// Bayraktar. Tanks appear from the top of the screen in a random horizontal position and roll down.
// When you click on a tank, it explodes and disappears from the screen.

class Bayraktar {
  constructor(tankImgSrc, fireImg) {
    this.tankImgSrc = tankImgSrc
    this.fireImg = fireImg
    this.lifesLeft = 3
    this.destroyedTanks = 0
    this.tankMaker = null
    this.tankMoveInterval = null
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  tankRemover(tankImg, interval) {
    tankImg.setAttribute("src", this.fireImg)
    clearInterval(interval)
    setTimeout(() => {
      tankImg.remove()
      document.querySelector(".counter").innerHTML = `${++this.destroyedTanks}`
    }, 900)
  }

  getTank() {
    const container = document.querySelector(".container")
    this.tankMaker = setInterval(() => {
      for (let i = 0; i < this.getRandomNumber(1, 4); i++) {
        const tankImg = document.createElement("img")
        tankImg.setAttribute("src", this.tankImgSrc)
        tankImg.className = "tank"
        tankImg.style.top = `${this.getRandomNumber(-15, -8)}%`
        tankImg.style.left = `${this.getRandomNumber(5, 95)}%`
        tankImg.style.transition =
          "top 0.2s ease-in-out 0s, transform 1s ease-in-out 0s"
        container.append(tankImg)

        const step = this.getRandomNumber(0, 2)
        this.tankMoveInterval = setInterval(() => {
          tankImg.style.top = parseInt(tankImg.style.top) + step + "%"
          if (parseInt(tankImg.style.top) >= 100) {
            this.lifesLeft--
            tankImg.remove()
            clearInterval(this.tankMoveInterval)
            document.querySelector(
              ".counterLifes"
            ).innerHTML = `${this.lifesLeft}`
          }
        }, 100)

        tankImg.onclick = this.tankRemover.bind(
          this,
          tankImg,
          this.tankMoveInterval
        )
      }
    }, this.getRandomNumber(2000, 4000))
  }
}

const g = new Bayraktar("./img/tank.png", "./img/fire.png")
g.getTank()
