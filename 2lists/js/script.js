// A list of athletes is given. It is necessary to form a list of those who will participate in the competition.
// At the same time, there are two columns. One shows all the athletes, the other shows the list of those who were selected.
// Clicking on the green arrow moves the athlete to the competition list.
// When clicking on the red arrow, the athlete moves to the general list.

class SportsManager {
  constructor(sportsList) {
    this.sportsList = sportsList
    this.greenArrowImg = "./img/green.png"
    this.redArrowImg = "./img/red.png"
    this.allSportsmanDiv = null
    this.selectedSportsmanDiv = null
  }

  addSportsman() {
    for (const el of this.sportsList) {
      const sportsman = document.createElement("div")
      sportsman.className = "sportsman-div"
      sportsman.textContent = el

      const arrowSrc = document.createElement("img")
      arrowSrc.setAttribute("src", this.greenArrowImg)
      arrowSrc.className = "sportsman-arrow-img"
      arrowSrc.addEventListener("click", () => {
        this.manageSportsmanList(sportsman, arrowSrc)
      })
      sportsman.append(arrowSrc)
      this.allSportsmanDiv.append(sportsman)
    }
  }

  manageSportsmanList(sportsman, arrow) {
    if (sportsman.parentNode === this.allSportsmanDiv) {
      this.allSportsmanDiv.removeChild(sportsman)
      this.selectedSportsmanDiv.append(sportsman)
      arrow.setAttribute("src", this.redArrowImg)
    } else {
      this.selectedSportsmanDiv.removeChild(sportsman)
      this.allSportsmanDiv.append(sportsman)
      arrow.setAttribute("src", this.greenArrowImg)
    }
  }

  createAllSportsmanList(parentElement) {
    const container = document.querySelector(parentElement)

    const wrapper = document.createElement("div")
    wrapper.className = "wrapper"

    const title = document.createElement("h2")
    title.className = "sportsman-title"
    title.innerHTML = "Общий список"

    const allSportsmanDiv = document.createElement("div")
    allSportsmanDiv.className = "sportsmans-div all-sportsman-div"

    wrapper.append(title)
    wrapper.append(allSportsmanDiv)
    container.append(wrapper)

    this.allSportsmanDiv = allSportsmanDiv
  }

  createSelectedSportsmanList(parentElement) {
    const container = document.querySelector(parentElement)

    const wrapper = document.createElement("div")
    wrapper.className = "wrapper"

    const title = document.createElement("h2")
    title.className = "sportsman-title"
    title.innerHTML = "Список участников змаганий"

    const selectedSportsmanDiv = document.createElement("div")
    selectedSportsmanDiv.className = "sportsmans-div selected-sportsman-div"

    wrapper.append(title)
    wrapper.append(selectedSportsmanDiv)
    container.append(wrapper)

    this.selectedSportsmanDiv = selectedSportsmanDiv
  }
}

const sportsList = [
  "John Depp",
  "Sara Wik",
  "Den Miro",
  "Alan Woo",
  "Olga Sich",
  "Ivan Hal",
]

const sportsManager = new SportsManager(sportsList)
sportsManager.createAllSportsmanList(".container")
sportsManager.createSelectedSportsmanList(".container")
sportsManager.addSportsman()