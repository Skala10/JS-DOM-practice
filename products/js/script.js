// We display product cards that the user can choose. The selected product has a green frame

class ItemCreator {
  constructor(initData) {
    Object.assign(this, initData)
  }

  mouseOver(card) {
    card.classList.add("active")
  }

  mouseLeave(card) {
    card.classList.remove("active")
  }

  render(parentElement) {
    const cardWrapper = document.createElement("a")
    cardWrapper.className = "card-container"
    cardWrapper.setAttribute("href", this.link)

    const labelDiv = document.createElement("div")
    labelDiv.className = "card-category"
    labelDiv.innerHTML = `${this.category}`
    if (this.category === "Топ продаж") labelDiv.classList.add("top")
    if (this.category === "Акція") labelDiv.classList.add("share")
    cardWrapper.appendChild(labelDiv)

    const imgWrapper = document.createElement("div")
    imgWrapper.className = "image-container"
    cardWrapper.append(imgWrapper)

    const img = document.createElement("img")
    img.className = "card-img"
    img.setAttribute("src", this.imageSrc)
    imgWrapper.appendChild(img)

    const title = document.createElement("p")
    title.className = "card-title"
    title.innerHTML = this.title
    cardWrapper.appendChild(title)

    const price = document.createElement("p")
    price.className = "card-price"
    price.innerHTML = `${this.price}$`
    cardWrapper.appendChild(price)

    const container = document.querySelector(parentElement)
    container.appendChild(cardWrapper)

    cardWrapper.onmouseover = this.mouseOver.bind(this, cardWrapper)
    cardWrapper.onmouseleave = this.mouseLeave.bind(this, cardWrapper)
  }
}

const cardList = [
  {
    imageSrc: "./img/1.webp",
    link: "https://rozetka.com.ua/acer_nh_qbfeu_00c/p288376303/",
    title: "Ноутбук Acer Aspire",
    price: "30 999",
    category: "Топ продаж",
  },
  {
    imageSrc: "./img/2.webp",
    link: "https://rozetka.com.ua/lenovo-82hl00hcra/p352335126/",
    title: "Ноутбук Asus Laptop",
    price: "19 999",
    category: "Топ продаж",
  },
  {
    imageSrc: "./img/3.webp",
    link: "https://rozetka.com.ua/asus-90nr03u2-m008e0/p353689830/",
    title: "Ноутбук Lenovo IdeaPad",
    price: "13 999",
    category: "Акція",
  },
  {
    imageSrc: "./img/4.webp",
    link: "https://rozetka.com.ua/apple_macbook_air_13_m1_256gb_2020_space_gray/p245161909/",
    title: "Ноутбук Apple MacBook Air",
    price: "39 999",
    category: "Топ продаж",
  },
]

for (const obj of cardList) {
  const item = new ItemCreator(obj)
  item.render(".container")
}
