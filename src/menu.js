import './menu.css';
import des1 from './des1.jpg'
import des2 from './des2.jpg'
import des3 from './des3.jpg'
import des4 from './des4.jpg'
import des5 from './des5.jpg'


export const menu = function() {
    const content = document.querySelector('#content')
    const menu = document.createElement('div')
    menu.classList.add('menu')
    const names = [
        {name: 'Banana Cheesecake', ingridients: 'Chocolate Cookie Crust, Whipped Cream, Chocolate Sauce', image: des1},
        {name: 'Key Lime Pie', ingridients: 'Strawberry Sauce, Seasonal Fruit', image: des2},
        {name: 'Bourbon Chocolate Cake', ingridients: 'Nutella Frosting, Bourbon Salted Caramel, Vanilla Ice Cream', image: des3},
        {name: 'Deep Fried Oreos', ingridients: 'Cookies & Cream Ice Cream, Crispy Rice Cerea', image: des4},
        {name: 'Apple Cinnamon Cobbler', ingridients: 'Brown Sugar Oat Crumble, Vanilla Ice Cream, Baked Almond Cream', image: des5},
    ]
    for (const name of names) {
        const card = document.createElement('div')
        const h = document.createElement('h3')
        const text = document.createElement('div')
        h.textContent = name.name
        text.textContent = name.ingridients
        const desImg = new Image()
        desImg.src = name.image
        card.appendChild(desImg)
        card.appendChild(h)
        card.appendChild(text)
        menu.appendChild(card)
    }
    content.appendChild(menu)
}